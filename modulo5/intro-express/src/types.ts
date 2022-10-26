export type Users = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};

export type BuscaPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
