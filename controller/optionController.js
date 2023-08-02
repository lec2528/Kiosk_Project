const OptionService = require('../services/optionService');

class OptionController {
  optionService = new OptionService();

  createOption = async (req, res, next) => {
    const { extraPrice, shotPrice, hot, takeout } = req.body;

    const selectOption = await this.optionService.createOption(extraPrice, shotPrice, hot, takeout);
    res.status(200).json({
      selectOption: selectOption,
    });
  };
}
module.exports = OptionController;
