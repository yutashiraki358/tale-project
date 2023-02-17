export interface Server {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface FormValues {
  name: string;
  email: string;
  password: string;
}
