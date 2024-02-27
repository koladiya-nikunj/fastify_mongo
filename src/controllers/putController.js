const LoginModel = require('../models/loginModel')

const putController = async(request, reply)=> {
    try {
        const { email, mobile } = request.body;
        const updatedUser = await LoginModel.findOneAndReplace({ mobile }, { email, mobile }, { new: true });
        if (!updatedUser) {
            return reply.code(404).send({ error: "User not found" });
        }
        console.log("Successfully updated :",updatedUser);
        return reply.send({ message: "Successfully updated", user: updatedUser });
    } catch (error) {
        console.error("Error in putController:", error);
        return reply.code(500).send({ error: "Internal Server Error" });
    }
}
module.exports = putController