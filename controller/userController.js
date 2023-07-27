const UserService = require('../services/userService');

class userController {
  userService = new UserService();

  createUser = async (req, res) => {
    const { phone, stamp, birthday } = req.body;
    const userInfo = await this.userService.createUser(phone, stamp, birthday);

    res.status(200).json({
      message: '회원가입 완료',
      userInfo,
    });
  };
}
module.exports = userController;
