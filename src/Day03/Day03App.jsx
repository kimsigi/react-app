import Header from "@/Day03/Header";
import Main from "./Main";
import Footer from "./Footer";

function InComp() {
    return (
        <>
            <p>Day03App 안에서도 별도 선언 후 사용이 가능합니다! inComp</p>
        </>
    );
}

export default function Day03App() {
    return (
        <div>
            <div>이 내용은 Day03App에서 작성한 내용입니다.</div>
            <InComp />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}