export enum USERTYPE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type User = {
  id: number;
  name: string;
  email: string;
  type: USERTYPE;
  age: number;
};
