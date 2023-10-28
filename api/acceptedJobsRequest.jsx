import axios from "axios";
import { BaseUrl } from "./url";

export const requestAcceptedGetJobs = (param) => {
  console.log(param, "requestAcceptedGetJobs");
  console.log("@/api/job/screen/accepted/");
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      url: `${BaseUrl}/api/job/screen/accepted/${param}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data, 222);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const onSendQuotation = (body) => {
  console.log("@/send-quotation");
  return new Promise((resolve, reject) => {
    let config = {
      method: "post",
      url: `${BaseUrl}/send-quotation`,
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data, 222);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
