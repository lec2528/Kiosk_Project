const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(port, '번 포트로 서버가 실행 되었습니다.');
});
