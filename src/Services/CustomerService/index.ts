import { Customer, CustomerInputRequest } from "../../Interface";
import {
  getWithToken,
  postWithToken,
  ResponseType,
} from "../../Utils/request-axios";

export const getAllCustomers = async () => {
  try {
    const resp: ResponseType = await getWithToken("Customer/getAll");
    if (resp.status === 200) return resp.data.response as Customer[];
  } catch (err) {
    console.log("err ", err);
  }
};

export const addCustomer = async (params: CustomerInputRequest) => {
  try {
    await postWithToken("Customer/addCustomerContacts", params);
  } catch (error) {
    console.log("err ", error);
  }
};
