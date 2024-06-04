const prisma = require("../config/pirsma");

exports.createUser = (userId, email, hashedPassword) => {

    return prisma.user.create({
        data: {
            id: userId,
            email,
            password: hashedPassword,
        }

    })
}

exports.getUserByEmail = (email) => {
    return prisma.user.findFirst({
        where: {
            email: email
        }
    })
}