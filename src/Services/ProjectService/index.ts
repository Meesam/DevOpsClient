import { getWithToken, ResponseType } from "../../Utils/request-axios";

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

export const getAllProjects = async () => {
  try {
    const resp: ResponseType = await getWithToken("Project/getall");
    if (resp.status === 200) return resp.data.response as Project[];
  } catch (err) {
    console.log("err ", err);
  }
};
