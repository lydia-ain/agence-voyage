const express = require("express");
const router = express.Router();
const controller = require("../controllers/notifications.controller");
const { validerNotification } = require("../middleware/valider.middleware");

router.post("/create", controller.createNotification);
router.get("/", controller.getAllNotifications);
router.get("/:id", controller.getNotificationById);
router.delete("/:id", controller.deleteNotification);
router.put("/:id", controller.updateNotification);

module.exports = router;
