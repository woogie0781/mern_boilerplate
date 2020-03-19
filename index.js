const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose'); // 에러를 방지하기 위해 아래와 같이 2번째 파라미터를 받는다.
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.get('/', (req,res) => res.send('Hello World! fire~~~!!!'));

app.post('/register', (req, res) => {

    //회원 가입할 때 필요한 정보들을 client에서 가져오고
    //해당 정보들을 데이터베이스에 저장하는 기능 구현
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err }); //에러시 false와 함께 error정보를 클라이언트에게 보낸다.
        return res.status(200).json({ success: true });
    });

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

