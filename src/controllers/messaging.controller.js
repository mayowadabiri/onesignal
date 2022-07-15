const {
  successResMsg,
  errorResMsg,
  redirect,
} = require('../utils/libs/response');
const MessagingService = require('../services/messaging.services');

class MessagingController {
  async setupWebhook(req, res) {
    console.log('setupWebhook');
    const result = await MessagingService.setupWebhook(req.body);
    console.log(result);
    const dataInfo = {
      url: result.url,
    };
    return successResMsg(res, 200, dataInfo);
  }
  x;
  async setupConnection(req, res) {}

  async sendAndRecieveMessage(req, res) {
    try {
      const result = await MessagingService.sendAndRecieveMessage(req.body);
      const dataInfo = {
        result: result,
      };
      return successResMsg(res, 200, dataInfo);
    } catch (error) {
      console.log(error);
      return errorResMsg(res, 500, error);
    }
  }

  async listAllMessagesForBothParties(req, res) {
    const result = await MessagingService.listAllMessagesForBothParties();
    const dataInfo = {
      message: 'All List of Messages for Both Parties',
      data: result,
    };
    return successResMsg(res, 200, dataInfo);
  }
}

module.exports = new MessagingController();
