import './ComponentTop.css';
import Comp1 from "../comp1/Comp1";
import Comp2 from "../comp2/Comp2";



export default function componentOne() {
    return (
        <main className="html-custom">
            <Comp1/>
            <Comp2/>
        </main>
    );
}


