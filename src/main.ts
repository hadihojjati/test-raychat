import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
    // Use cookie-parser
	app.use(cookieParser());
    app.enableCors({ origin: 'http://localhost:3001', credentials: true });
  await app.listen(process.env.App_External_port);
    console.log("app running on port "+process.env.App_External_port )

}
bootstrap();
