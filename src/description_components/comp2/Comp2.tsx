import './Comp2.css';
// @ts-ignore
import PropertyPhoto1 from "../../images/1property.jpg";
// @ts-ignore
import PropertyPhoto2 from "../../images/2propertry.jpg";
// @ts-ignore
import PropertyPhoto3 from "../../images/3property.jpg";
// @ts-ignore
import PropertyPhoto4 from "../../images/4property.jpg";
// @ts-ignore
import PropertyPhoto5 from "../../images/5property.jpg";


export default function Comp2() {
    // @ts-ignore
    return (

        <div>
            <table>

                <tr>
                    <td rowSpan={2} ><img className="image1" src={PropertyPhoto2} alt="PropertyPhoto"/></td>
                    <td><img className="image2" src={PropertyPhoto1} alt="PropertyPhoto"/></td>
                    <td><img className="image3" src={PropertyPhoto3} alt="PropertyPhoto"/></td>
                </tr>
                <tr>
                    <td><img className="image4" src={PropertyPhoto4} alt="PropertyPhoto"/></td>
                    <td><img className="image5" src={PropertyPhoto5} alt="PropertyPhoto"/></td>
                </tr>
            </table>
        </div>

    )
}
