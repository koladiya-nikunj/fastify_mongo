const LoginModel = require('../models/loginModel');

const postController = async (request, reply) => {
   try {
    const { email, mobile } = request.body;
        if (!email || !mobile) return reply.code(400).send({ error: "mobile and email are required" });
        
        // Check if mobile number is already registered
        const existingUser = await LoginModel.findOne({ mobile });
        if (existingUser) {
            return reply.code(409).send({ error: `User with mobile '${mobile}' is already eixst` });
        }
        if (mobile && !/^\d{10}$/.test(mobile)) {
            return reply.code(400).send({ error: "mobile number must be exactly 10 digits" });
        }
        // If mobile is not registered, create a new user
        const user = await LoginModel.create({ email, mobile });
        return reply.send({ message: "User created successfully", user });
   
   } catch (error) {
    return error
   }
}

module.exports = postController;
