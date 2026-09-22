const express = require("express");

const router = express.Router();

let notifications = [
{
id: 1,
userId: 101,
title: "Welcome",
message: "Welcome to the system!",
type: "info",
read: false
},
{
id: 2,
userId: 102,
title: "Order Update",
message: "Your order has been completed.",
type: "success",
read: true
},
{
id: 3,
userId: 101,
title: "New Message",
message: "You have received a new message.",
type: "info",
read: false
}
];

module.exports = router;

