const Greeting2 = ({name, age, children}) => {
    console.log(name,age,children);
    return (
        <>
            <h3>안녕하세요. {name}님</h3>
            <p>나이는 {age}살 입니다.</p>
            {children}
        </>
    );
}

export default Greeting2;