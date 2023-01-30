import './Property.css';
import TextTable from "../text-table/TextTable";
import Amenities from "../amenities/Amenities";
import TextBottom from "../text-bottom/TextBottom";
import CarouselBox from "../../assets/CarouselBox";

export default function Property() {
    return (
        <div>
            <table className="tableWidth">
                <tr>
                    <td className="td-picture">
                        <CarouselBox/>
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

