const LoginModel = require('../models/loginModel')

const patchController = async (request, reply) => {
    try {
        const { email, mobile } = request.body

        if (!mobile) {
            return reply.code(400).send({ error: "mobile is required" });
        }
        if (mobile && !/^\d{10}$/.test(mobile)) {
            return reply.code(400).send({ error: "mobile number must be exactly 10 digits" });
        }
        const patchUser = await LoginModel.findOneAndUpdate({mobile},{ email, mobile },{ new: true } )
        if(!patchUser){
            return reply.code(404).send({ error: "User not found" })
        }
        console.log("User information updated :",  patchUser);
        return reply.send({ message: "User information updated", user: patchUser });
    } catch (error) {
        console.error("Error in patchController:", error);
        return reply.code(500).send({ error: "Internal Server Error" });
    }
}
module.exports = patchController