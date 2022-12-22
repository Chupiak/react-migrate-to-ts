import './Property.css';
import ImageComponent from "../image-component/ImageComponent";
import TextTable from "../text-table/TextTable";
import Amenities from "../amenities/Amenities";
import TextBottom from "../text-bottom/TextBottom";

export default function Property() {
    return (
        <div>
            <table className="tableWidth">
                <tr>
                    <td className="td-picture">
                        <ImageComponent/>
                    </td>
                    <td className="td-text">
                        <TextTable/>
                        <Amenities/>
                        <TextBottom/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

