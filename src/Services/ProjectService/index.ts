import { Project } from "../../Interface";
import { getWithToken, ResponseType } from "../../Utils/request-axios";

export const getAllProjects = async () => {
  try {
    const resp: ResponseType = await getWithToken("Project/getall");
    if (resp.status === 200) return resp.data.response as Project[];
  } catch (err) {
    console.log("err ", err);
  }
};
