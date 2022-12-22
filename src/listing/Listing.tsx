import './App.css';
import TextTop from "../property_components/text-top/TextTop";
import Property from "../property_components/property/Property";
import HeadApp from "../head_components/HeadApp";

export default function Listing() {
    return (
        <main>
            <HeadApp/>
            <TextTop/>
            <Property/>
        </main>
    );
}

