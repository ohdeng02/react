const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static(path.join(__dirname,'my-app/build')));
app.use(bodyParser.urlencoded({extended:false}));

var keyid=3;
var userList = [
    {keyid:1, name: "오수똥", id:"ohsuddong", passwd: "1234"},
    {keyid:2, name:"김지똥", id:"kjwon", passwd:"1234"}
];

const mainPage = (req,res) =>{
    res.sendFile(path.join(__dirname, 'my-app/build/index.html'));
}

const listUsers = (req,res) =>{
    console.log("회원명단 조회요청을 받았으며, 리액트에게 명단을 보냅니다.");
    res.json(userList);
}
const addUser = (req,res) => {
    const{name,id,passwd}= req.body;
    userList.push({keyid:keyid++, name, id, passwd});
    console.log("회원등록 요청을 완료하였으며, 이를 반영한 전체목록입니다.");
    userList.map((user,i) => {
        console.log(user.keyid+"."+user.name+"."+user.id+"."+user.passwd);
    })
    return res.send('sucess');
}

const checkUser = (req,res) =>{
    const{id,passwd}= req.body;
        for(i=0;i<keyid-1;i++){
            if(userList[i].id===id && userList[i].passwd===passwd){
                console.log("등록된 회원입니다.");
                return res.send({text:"회원으로 확인되었습니다."});
            }
        }
        return res.send({text:"그런 회원은 없습니다."});
}


app.get("/", mainPage);
app.get("/users", listUsers);
app.post("/users", addUser);
app.post("/users", checkUser);

app.listen(65010, ()=>{
    console.log("-----------------------------------------");
    console.log("(리액트 연동용)웹서버 실행중...");
    console.log("접속주소: http://localhost:65010/");
    console.log("-----------------------------------------");
});