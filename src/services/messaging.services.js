const Messaging = require("../models/messaging");
const { messagesCheck } = require("../utils/libs/messagingAxiosCall");

class MessagingService {
  async setupConnection() {}

  async sendAndRecieveMessage(data) {}

  async listAllMessagesForBothParties() {
    try {
      const messages = await Messaging.findAll();
      return messages;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new MessagingService();
