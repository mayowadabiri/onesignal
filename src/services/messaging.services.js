const Messaging = require("../models/messaging.model");
const { messagesCheck } = require("../utils/libs/messagingAxiosCall");

class MessagingService {
  async setupConnection() {}

  async sendAndRecieveMessage(data) {}

  async listAllMessagesForBothParties(data) {}
}

module.exports = new MessagingService();
