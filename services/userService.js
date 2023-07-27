const UserRepository = require('../repositories/userRepository');

class userService {
  userRepository = new UserRepository();

  createUser = async (phone, stamp, birthday) => {
    await this.userRepository.createUser(phone, stamp, birthday);
  };
}
module.exports = userService;
