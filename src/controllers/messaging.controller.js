const {
  successResMsg,
  errorResMsg,
  redirect,
} = require("../utils/libs/response");
const MessagingService = require("../services/messaging.services");

class MessagingController {
  async setupWebhook(req, res) {
    const result = await MessagingService.setupWebhook(req.body);
    const dataInfo = {
      url: result.url,
    };
    return successResMsg(res, 200, dataInfo);
  }

  async setupConnection(req, res) {}

  async sendAndRecieveMessage(req, res) {}

  async listAllMessagesForBothParties(req, res) {
    const result = await MessagingService.listAllMessagesForBothParties();
    const dataInfo = {
      message: "All List of Messages for Both Parties",
      data: result,
    };
    return successResMsg(res, 200, dataInfo);
  }
}

module.exports = new MessagingController();
