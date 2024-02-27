const LoginModel = require('../models/loginModel');

const getController = async(request, reply) => {
    try {
        const { mobile } = request.query; 
        if (!mobile) {
            console.log( "mobile is required");
            return reply.code(400).send({ error: "mobile is required" });
        }
        const findUser = await LoginModel.find({ mobile });
        if (findUser.length === 0) {
            return reply.code(404).send({ error: "User not found" });
        }
        console.log('Get user :',  findUser );
        return reply.send({ message: 'Get user:', user: findUser });
    } catch (error) {
        console.error("Error in getController:", error.message);
        return reply.code(500).send({ error: "Internal Server Error" });
    }
}

module.exports = getController;
