const {
  successResMsg,
  errorResMsg,
  redirect,
} = require("../utils/libs/response");
const MessagingService = require("../services/messaging.service");

class MessagingController {
  async setupConnection(req, res) {}

  async sendAndRecieveMessage(req, res) {}

  async listAllMessagesForBothParties(req, res) {}
}

module.exports = new MessagingController();
