import { Customer } from "../../Interface";
import { getWithToken, ResponseType } from "../../Utils/request-axios";

export const getAllCustomers = async () => {
  try {
    const resp: ResponseType = await getWithToken("Customer/getAll");
    if (resp.status === 200) return resp.data.response as Customer[];
  } catch (err) {
    console.log("err ", err);
  }
};
