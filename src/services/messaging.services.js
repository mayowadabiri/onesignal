const Messaging = require("../models/messaging");
const url = require("../utils/libs/axios");
const axiosCall = require("../utils/libs/axiosCall");
require("dotenv").config();

class MessagingService {
  async setupWebhook(data) {
    const webhookSet = await axiosCall({
      method: "post",
      url: `${process.env.D360_BASE_URL}/v1/configs/webhook`,
      data: data,
      headers: {
        "D360-API-KEY": `${process.env.D360_API_KEY}`,
      },
    });
    return webhookSet;
  }

  async setupConnection() {}

  async sendAndRecieveMessage(data) {}

  async listAllMessagesForBothParties() {
    try {
      const response = await Messaging.findAll({});
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new MessagingService();
