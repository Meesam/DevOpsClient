import axios from "axios";
import { ApiBaseUrl } from "./app-setting";

interface ResponseDataType {
  isSuccess: boolean;
  message: string;
  statusCode: number;
  response: any;
}

export interface ResponseType {
  data: Partial<ResponseDataType>;
  status: number;
  statusText: string;
}

export const getWithoutToken = (path: string) => {
  return axios({
    method: "get",
    url: `${ApiBaseUrl}/${path}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
};

export const postWithoutToken = (path: string, data: object) => {
  return axios({
    method: "post",
    url: `${ApiBaseUrl}/${path}`,
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
};

export const postWithToken = (path: string, data: object) => {
  return axios({
    method: "post",
    url: `${ApiBaseUrl}/${path}`,
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      Authorization: `Bearer ${localStorage.getItem("myToken")}`,
    },
  });
};

export const getWithToken = (path: string) => {
  return axios({
    method: "get",
    url: `${ApiBaseUrl}/${path}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      Authorization: `Bearer ${localStorage.getItem("myToken")}`,
    },
  });
};
