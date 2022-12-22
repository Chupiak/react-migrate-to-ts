import './HeadApp.css';
// @ts-ignore
import Head from "../images/filters.svg";

export default function HeadApp() {
    return (
        <div className="header">
            <button className="nav nav-first">Price ▼</button>
            <button className="nav nav-second">Property Type ▼</button>
            <span className="vl"></span>
            <button className="nav nav-first">Furnished</button>
            <button className="nav">Utilities Included</button>
            <button className="nav">Student friendly</button>
            <button className="nav">Parking</button>
            <button className="nav">Basement</button>
            <button className="nav">Garden</button>
            <button className="nav">Pets allowed</button>
            <button className="nav">Couples allowed</button>
            <button className="nav">
                <img className="filter" src={Head} alt=""/>
                <span> Filter</span>
            </button>
        </div>
    );
}

