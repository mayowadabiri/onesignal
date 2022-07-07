const router = require("express").Router();
const messagingController = require("../controllers/messaging.controller");

router.post("/setup", messagingController.setupConnection);
router.post("/messaging", messagingController.sendAndRecieveMessage);
router.get("/messaging", messagingController.listAllMessagesForBothParties);

module.exports.messagingRouter = router;
