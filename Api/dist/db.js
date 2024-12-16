"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
mongoose_1.default.connect(process.env.DATABASE_URL || "")
    .then(() => console.log("DB connected"))
    .catch(() => console.log("Connection Error"));
const TodoSchema = new mongoose_1.default.Schema({
    todoid: String,
    userId: String,
    title: String,
    description: String,
});
const UserSchema = new mongoose_1.default.Schema({
    userId: String,
    name: String,
    email: String,
    password: String,
});
const todo = mongoose_1.default.model("todo", TodoSchema);
const user = mongoose_1.default.model("user", UserSchema);
module.exports = {
    todo,
    user
};
