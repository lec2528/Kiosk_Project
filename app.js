const express = require('express');
const app = express();
const PORT = 80;
const router = require('./routes');

app.use('/api', router);

app.listen(PORT, () => {
  console.log(PORT, '로 서버가 실행 되었습니다.');
});
