import './TextBottom.css';

// @ts-ignore
import Star from "../../images/star.svg";


export default function TextBottom() {
    return (
        <div>
            <img className="star" src={Star} alt="first"/>
            <span><strong>2.5</strong></span>
            <span className="top-text">250 (reviews)</span>
            <span className="price">15 580 kr DKK</span>
            <div className="price-1">15 580 kr DKK total</div>
        </div>
    );
}

