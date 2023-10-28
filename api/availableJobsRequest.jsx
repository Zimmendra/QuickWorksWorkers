import axios from "axios";
import { BaseUrl } from "./url";

export const requestGetJobs = () => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      url: `${BaseUrl}/api/job/getJobsAvaliable/Plumbing/Kandy`,
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

export const onUpdateToAccepted = (jobID, workerid) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "put",
      url: `${BaseUrl}/api/job/updateToAccepted/${jobID}/${workerid}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data, "onUpdateToAccepted");
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

