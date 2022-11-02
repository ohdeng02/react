import React, {useState, useEffect} from "react";
import './User.css';

const serverURL = "http://localhost:65010/users";

function User(){
    const [userData, setUserData] = useState(null);
    const [text, setText]=useState(null);

    const getUserData = () =>{
        fetch(serverURL)
        .then((res)=>res.json())
        .then((data)=>setUserData(data))
        .then(console.log(userData))
    }

    const getCheck = ( ) =>{
        fetch(serverURL)
        .then((res)=>res.json())
        .then((data)=>setText(data))
        .then(console.log(text))
    }

    useEffect(getUserData, []);

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        console.log("Submit버튼 클릭후 서버로 POST전송");

        fetch(serverURL, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name,id,passwd}),
        })
        .then(getUserData())
    }

    const onSubmitHandler_2 = (event) =>{
        event.preventDefault();
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        console.log("Submit버튼 클릭후 서버로 POST전송");

        fetch(serverURL, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id,passwd}),
        })
        // fetch(serverURL)
        // .then((res) => res.json()) //추가된 부분
        // .then((json) => {setText(json)})
        .then(getCheck());
    }     

    

    return(
        <>
            <div>
                <h2>회원등록</h2>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" name="name" placeholder="이름"/>
                    <input type="text" name="id" placeholder="아이디"/>
                    <input type="text" name="passwd" placeholder="비밀번호"/>
                    <button type="submit">등록</button>
                </form>
            </div>
            <div>
                <h2>회원확인</h2>
                <form onSubmit={onSubmitHandler_2}>
                    <input type="text" name="id" placeholder="아이디"/>
                    <input type="text" name="passwd" placeholder="비밀번호"/>
                    <button type="submit">확인</button>
                    <p>{text}</p>
                </form>
            </div>
            <p></p>
            <div>
                <h2>회원목록</h2>
                <ol>
                    {(userData=== null)?(
                        <p>서버에서 데이터를 가져오는중....</p>
                    ):(
                        userData.map((user, i)=>(
                            <li key={user.keyid}>{user.name}{user.id}{user.passwd}</li>
                        ))
                    )}
                </ol>
            </div>
        </>
    )
}

export default User;