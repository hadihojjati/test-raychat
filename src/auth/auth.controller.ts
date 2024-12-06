import { Controller, Post, Body, Res, Req, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { Public } from '../common/decorators/public.decorator';
import { CustomRequest } from '../types/express-request.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {

    // Get the token from the AuthService
    const token = await this.authService.login(loginDto);

    // Set the token as an HTTP-only cookie
    res.cookie('Authentication', token, {
      httpOnly: true,            // Prevent client-side access
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'strict',        // Strict or Lax (for cross-site cookie handling)
      maxAge: 1000 * 60 * 60,    // Cookie expiry 
    });

    // You can optionally return some response (but not the token itself)
    return res.send({ message: 'با موفقیت وارد شدید' });
  }

  @Post('logout')
  @HttpCode(200)
  async logout(@Req() req: CustomRequest,@Res() res: Response) {
    const user = req.user;
    if (!user) {
      return res.status(401).send({ message: 'User not authenticated' });
    }
    const token = req.cookies['Authentication'];

  if (!token) {
    return res.status(400).send({ message: 'No token found in cookies' });
  }
    await this.authService.logout(token);
    res.cookie('Authentication', '', {
      httpOnly: true,     // Prevent access from JavaScript
      expires: new Date(0), // Expire the cookie immediately
      sameSite: 'strict',    // Use the same site policy
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
    }); 
    return res.send({ message: 'شما خارج شدید.' });
  }
}

  
  
  

