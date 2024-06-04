const createError = require("../utils/createError");
const bcrypt = require('bcrypt');
const userService = require("../service/userService");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        console.log('Email:', email);
        console.log('Password:', password);

        if (!email || !password) {
            throw createError(400, 'Email and password are required');
        }

        const userExist = await userService.getUserByEmail(email);
        if (userExist) {
            throw createError(409, 'Email already in use');
        }

        const userId = uuidv4().replace(/-/g, '');
        const hashedPassword = await bcrypt.hash(password, 10);

        await userService.createUser(userId, email, hashedPassword);

        res.status(201).json({ message: "Register success" });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExist = await userService.getUserByEmail(email)

        if (!userExist) {
            throw createError(401, "Authentication failed! Wrong email or password")
        }

        const isMatch = await bcrypt.compare(password, userExist.password);

        if (!isMatch) {
            throw createError(401, "Invalid Password")
        }

        const token = jwt.sign({ id: userExist.id }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRES_IN })
        res.status(200).json({ message: "login success", token: token });
    } catch (err) {
        next(err);
    }
}