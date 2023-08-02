const OptionRepository = require('../repositories/optionRepository');

class OptionService {
  optionRepository = new OptionRepository();
  createOption = async (extraPrice, shotPrice, hot, takeout) => {
    return await this.optionRepository.createOption(extraPrice, shotPrice, hot, takeout);
  };
}

module.exports = OptionService;
