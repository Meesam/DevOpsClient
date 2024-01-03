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

export interface Customer {
  id: number;
  name: string;
  website: string;
  logoUrl: string;
  createdDate: Date;
  updatedDate: Date;
  addressList: any[];
  emailAddresses: any[];
  projects: any[];
  appMenus: any[];
}

export interface Project {
  projectId: number;
  customerId: number;
  customerName: string;
  projectName: string;
  projectDescription: string;
  projectType: string;
  projectStartDate: Date;
  projectEndDate: Date;
  projectStatus: string;
}
