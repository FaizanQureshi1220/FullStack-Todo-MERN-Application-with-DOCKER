"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createUser = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
const userLogin = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
const createTodo = zod_1.z.object({
    title: zod_1.z.string().min(5),
    description: zod_1.z.string().min(5)
});
module.exports = {
    createUser,
    userLogin,
    createTodo
};
