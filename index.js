const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose'); // 에러를 방지하기 위해 아래와 같이 2번째 파라미터를 받는다.
mongoose.connect('mongodb+srv://woogie:wook0781*@boilerplate-ujtcn.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.get('/', (req,res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

