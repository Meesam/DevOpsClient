export interface CustomerContact {
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  isPrimary: boolean;
}

export interface CustomerBasicInfo {
  name: string;
  website: string;
  logoUrl: string;
  description: string;
}
