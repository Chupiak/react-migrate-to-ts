import './Comp2.css';


export default function Comp2() {
    // @ts-ignore
    return (

        <div>
            <table className="table-custom">

                <tr>
                    <td rowSpan={2}>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                </tr>
            </table>
        </div>

    )
}
