const {
  successResMsg,
  errorResMsg,
  redirect,
} = require("../utils/libs/response");
const MessagingService = require("../services/messaging.services");

class MessagingController {
  async setupConnection(req, res) {}

  async sendAndRecieveMessage(req, res) {}

  async listAllMessagesForBothParties(req, res) {}
}

module.exports = new MessagingController();
