export interface ApiContact {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface Contact extends ApiContact {
  id: string;
}
