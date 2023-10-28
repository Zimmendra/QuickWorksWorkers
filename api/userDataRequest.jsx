import axios from "axios";
import { BaseUrl } from "./url";

export const requestUserData = (param) => {
  console.log("@/api/admin/worker");
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      url: `${BaseUrl}/api/admin/worker/${param}`,
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
