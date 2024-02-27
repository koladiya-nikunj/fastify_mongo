const { repl } = require('@nestjs/core')
const LoginModel = require('../models/loginModel')

const deleteController = async (request, reply) => {
    try {
        const { email, mobile } = request.body
        if (!mobile) {
            return reply.code(404).send({ error: `mobile is required` })
        }
        const deleteUser = await LoginModel.findOneAndDelete({ mobile }, { email, mobile }, { new: true })
        if (!deleteUser) {
            return reply.code(404).send({ error: `mobile number '${mobile}' is not found` })
        }
        console.log('User deleted successfully :',deleteUser);
        return reply.send({ message: 'User deleted successfully', User: deleteUser })
    } catch (error) {

    }

}
module.exports = deleteController