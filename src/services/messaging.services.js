const { Messaging } = require('../models/index');
const BufferStream = require('bufferstream');

const url = require('../utils/libs/axios');
const axiosCall = require('../utils/libs/axiosCall');
require('dotenv').config();

class MessagingService {
  async setupWebhook(data) {
    console.log(process.env.D360_BASE_URL);
    console.log(process.env.D360_API_KEY);
    const webhookSet = await axiosCall({
      method: 'post',
      url: `${process.env.D360_BASE_URL}/v1/configs/webhook`,
      data: data,
      headers: {
        'D360-API-KEY': `${process.env.D360_API_KEY}`,
      },
    });
    console.log(webhookSet);
    return webhookSet;
  }

  async setupConnection() {}

  async sendAndRecieveMessage(data) {
    const { number, text } = data;
    const payload = {
      recipient_type: 'individual',
      to: number,
      type: 'text',
      text: {
        body: text,
      },
    };
    const response = await axiosCall({
      method: 'post',
      url: `${process.env.D360_BASE_URL}v1/messages`,
      data: payload,
      headers: {
        'D360-API-KEY': `${process.env.D360_API_KEY}`,
      },
    });
    console.log(response);

    const message = await Messaging.create({
      sender: '4930609859535',
      receiver: number,
      message: text,
      messageId: response.messages[0].id,
    });
    console.log(message);
    return message;
  }

  async listAllMessagesForBothParties() {
    try {
      const response = await Messaging.findAll({});
      return response;
    } catch (error) {
      return error;
    }
  }
  async receiverWebhookMessage(r, s, t) {
    console.log(r.res);
    // Parse a readable stream to get the data from it
    const readable = new BufferStream(r);
    const data = await readable.toString();
    console.log(data);
  }
}

module.exports = new MessagingService();
