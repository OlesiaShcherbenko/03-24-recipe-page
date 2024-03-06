import React from "react";
import "./Nutrition.scss";

function Nutrition() {
    return(
        <div className="nutrition">
            <h2>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p> 
            <table>
                <tr>
                    <td>Calories</td>
                    <td className="kcal">277kcal</td>
                </tr>
                <tr>
                    <td>Carbs</td>
                    <td className="kcal">0g</td>
                </tr>
                <tr>
                    <td>Protein</td>
                    <td className="kcal">20g</td>
                </tr>
                <tr>
                    <td>Fat</td>
                    <td className="kcal">22g</td>
                </tr>
            </table>
        </div>
    )
}

export default Nutrition;