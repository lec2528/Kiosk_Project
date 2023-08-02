const { options } = require('../models');

class OptionRepository {
  createOption = async (extraPrice, shotPrice, hot, takeout) => {
    return await options.create({ extraPrice, shotPrice, hot, takeout });
  };
}
module.exports = OptionRepository;
