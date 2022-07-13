const Messaging = require("../models/messaging");
const url = require("../utils/libs/axios");

class MessagingService {
  async setupWebhook(data) {
    const response = await url.post("/v1/configs/webhook", {
      ...data,
    });
    console.log("360Dialog Response:", response);
    return response;
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
