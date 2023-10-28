import axios from "axios";
import { BaseUrl } from "./url";

export const requestApprovedGetJobs = (param) => {
  console.log("@/api/job/screen/approved/");
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      url: `${BaseUrl}/api/job/screen/approved/${param}`,
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

//653bf04d5221abc407ae9ee4
export const requestUpdateToOngoingJobs = (param) => {
  console.log("@/api/job/screen/updateToOngoing/");
  return new Promise((resolve, reject) => {
    let config = {
      method: "put",
      url: `${BaseUrl}/api/job/updateToOngoing/${param}`,
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
