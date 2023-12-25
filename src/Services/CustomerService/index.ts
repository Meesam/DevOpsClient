import { getWithToken, ResponseType } from "../../Utils/request-axios";

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

export const getAllCustomers = async () => {
  try {
    const resp: ResponseType = await getWithToken("Customer/getAll");
    if (resp.status === 200) return resp.data.response as Customer[];
  } catch (err) {
    console.log("err ", err);
  }
};
