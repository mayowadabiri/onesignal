const router = require("express").Router();
const messagingController = require("../controllers/messaging.controller");

router.post("/webhook", messagingController.setupWebhook);
router.post("/setup", messagingController.setupConnection);
router.post("/messaging", messagingController.sendAndRecieveMessage);
router.get(
  "/listOfInteractionMessages",
  messagingController.listAllMessagesForBothParties
);

module.exports.messagingRouter = router;
