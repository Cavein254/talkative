const router = require("express").Router();
const isUserAuthenticated = require("../middleware/authmiddleware");
const { accessChats, fetchChats } = require("../controllers/chatController");

router.route("/").get(isUserAuthenticated, fetchChats);
router.route("/").post(isUserAuthenticated, accessChats);
// router.route("/group").get(isUserAuthenticated, createGroupChat);
// router.route("/rename").put(isUserAuthenticated, renameGroupChat);
// router.route("/leave").put(isUserAuthenticated, leaveGroupChat);
// router.route("/add").put(isUserAuthenticated, addToGroupChat);

module.exports = router;
