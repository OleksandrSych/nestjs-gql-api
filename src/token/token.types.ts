export interface IPayload {
  username: string;
  sub: number;
  roleId: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

interface IDecodedToken {
  username: string;
  sub: number;
  roleId: string;
  iat: number;
  exp: number;
  isAccessToken: number;
}

export type TDecodedToken = IDecodedToken | null | string;

export type TVerifyedToken = IDecodedToken | string;
