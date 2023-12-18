import axios from "axios";
import { ApiBaseUrl } from "./app-setting";

export interface ResponseType {
  data: object;
  status: number;
  statusText: string;
}

export const getWithoutToken = (path: string) => {
  axios({
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
      Authorization: `Bearer ${localStorage.getItem("authTocken")}`,
    },
  });
};

export const getWithToken = (path: string) => {
  axios({
    method: "get",
    url: `${ApiBaseUrl}/${path}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      Authorization: `Bearer ${localStorage.getItem("authTocken")}`,
    },
  });
};
