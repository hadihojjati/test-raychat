import { Request } from 'express';

export interface CustomRequest extends Request {
  user: {
    userId(userId: any): unknown;
    username: string;
    sub: string; // or userId, depending on your JWT payload structure
  };
}
