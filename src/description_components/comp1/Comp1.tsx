import './Comp1.css';
// @ts-ignore
import Star from "../../images/star.svg";
import "./Comp1.css"

export default function Comp1() {
    return (
        <div className="div-comp">
            <a href={`/`}><button className="button-custom">Home</button></a>
                <div></div>
                <div className="first-row-new">Cozy Shared Apartment in Copenhagen</div>
                <img className="star-new" src={Star} alt="first"/>
                <div className="top-text-new"><strong>4.5</strong></div>
                <div className="top-text-new-1">(250 reviews)</div>
        </div>
        )
}
