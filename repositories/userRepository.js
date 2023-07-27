const { Users } = require('../models');

class UserRepository {
  createUser = async (phone, birthday) => {
    return await Users.create({ phone, birthday });
  };
}

module.exports = UserRepository;
