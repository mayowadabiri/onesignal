require("dotenv").config();
const axiosCall = require("./axiosCall");

exports.messagesCheck = async (requestBody) => {
  const sendMessages = await axiosCall({
    method: "post",
    url: `${process.env.M_360_DIALOG_BASE_URL_FOR_SENDING_MESSAGES}/v1/messages`,
    data: requestBody,
    headers: {
      "D360-API-KEY": `${process.env.M_360_DIALOG_TEST_API_KEY}`,
    },
  });
  return sendMessages;
};
