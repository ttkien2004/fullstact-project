export interface authType {
  email: string;
  token: string;
}

export interface authUser {
  email: string;
  token: string;
}

export type authAction =
  | { type: "LOGIN"; payload: authUser }
  | { type: "LOGOUT" };
