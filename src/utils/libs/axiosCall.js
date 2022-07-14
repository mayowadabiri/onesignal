const axios = require("axios");

const axiosCall = async ({ method, url, data, headers }) => {
  try {
    const urlResponse = await axios({
      method: method || "get",
      url,
      data,
      headers,
    });
    // console.log("urlResponse:", urlResponse);
    return urlResponse.data;
  } catch (err) {
    console.log("err:", err);
    const error = {
      status: err.response.status,
      message: err.response.statusText,
      ...err.response.data,
    };
    // return err;
    return error;
  }
};

module.exports = axiosCall;
