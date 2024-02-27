const LoginModel = require('../models/loginModel')

const getAllController = async(request,reply) =>{
    try {
        const allUser = await LoginModel.find()
        if (allUser.length === 0) {
            return reply.code(404).send({ error: "No users found" });
        }
        console.log('All users :',allUser);
        return reply.code(200).send({message: 'All users :',allUser})
    } catch (error) {
        console.error("Error in getAllController:", error);
        return reply.code(500).send({ error: "Internal Server Error" });
    }
}
module.exports = getAllController