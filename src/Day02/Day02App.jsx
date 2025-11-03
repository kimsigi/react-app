function Day02App() {
    const name = "React";
    const number = 10;
    const isLogin = true;
    const style = {color: "green", fontSize: "22px"};

    return (
        <div>
            <h1 style={style}>{name} 공부중!</h1>
            <p>{number} + 5 = {number + 5}</p>
            <p>{isLogin ? "로그인 상태입니다" : "로그인해주세요"}</p>
            <button onClick = {() => alert(name.toUpperCase())}>확인</button>
        </div>
    );
}

export default Day02App;