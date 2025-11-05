import Box from "./Box";
import Greeting from "./Greeting";
import Greeting2 from "./Greeting2";
import UserCard from "./UserCard";

const Day04App = () => {
    return (
        <>
            <h1>Day 4 — Props 완전정복</h1>
            <p>부모 → 자식 컴포넌트로 데이터 전달하는 공식적인 방법</p>
            <p>Props: Properties의 줄임말</p>
            <p>Props는 읽기 전용(immutable)</p>
            <p>Props를 변경하려면 부모 컴포넌트에서 새로운 Props를 전달해야 함</p>

            <Greeting name="철수" />
            <Greeting name="영희" />
            <Greeting2 name="길동" />
            <Greeting2 name="자식" age={18}>
                <p>P태그 자체가 넘어옵니다</p>
            </Greeting2>
            <Box title="박스 컴포넌트">
                <h3>첫 번째 박스</h3>
                <p>첫 번째 박스 내용입니다.</p>
            </Box>
            <Box title="">
                <h3>두 번째 박스</h3>
                <p>두 번째 박스 내용입니다.</p>
                <p>title 공백은 빈것으로 취급안해주네요.</p>
            </Box>
            <Box>
                <h3>세 번째 박스</h3>
                <p>세 번째 박스 내용입니다.</p>
                <p>title 속성을 아예 선언 안하니 디폴트값인 unknown이 나오네요.</p>
            </Box>

            <UserCard name="김평식" age={37} job="프로그래머">
                <p>리액트 공부중입니다.</p>
            </UserCard>
        </>
    );
}


export default Day04App;