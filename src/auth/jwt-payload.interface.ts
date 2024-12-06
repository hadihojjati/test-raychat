export interface JwtPayload {
  username: string;
  sub: string;  // This represents the user ID (_id in MongoDB)
}
