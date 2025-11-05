export default function UserCard(props) {
    const {name, age, job, children} = props;
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
            <p>직업: {job}</p>
            {children}
        </div>
    );
}