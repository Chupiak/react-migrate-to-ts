import './ImageStyle.css';
// @ts-ignore
import PropertyPhoto from "../../images/flat1.jpg";

export default function ImageComponent() {
    return (
        <a href={`description`}><img className="img-picture" src={PropertyPhoto} alt="PropertyPhoto"/></a>
    );
}
