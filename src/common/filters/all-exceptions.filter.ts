import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Determine the status code to return
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Handle MongoDB duplicate key error specifically
    let message = (exception as any).message || 'Internal server error';
    if ((exception as any).code === 11000) {
      message = 'ورود داده های تکراری مجاز نیست!';
      response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: message,
      });
    } else { 
	if(status===401)
	{
		 message = 'مجاز نیستید!';
      response.status(status).json({
        statusCode: status,
        message: message,
      });
	}
	else{
      response.status(status).json({
        statusCode: status,
        message: message,
      });
	}
    }
  }
}
