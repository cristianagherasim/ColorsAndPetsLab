import { useState } from "react";
import { Pet } from "../models/Pet";

function ArraysEx () {
    const [colors, setColors] = useState<string[]>(["red", "orange", "purple", "blue"])
    const [pets, setPets] = useState<Pet[]>(
        [{id:1, name: 'Fluffy', type:'cat'},
        {id:2, name: 'Dog', type:'dog'},
        {id:3, name: 'Happy', type:'dog'}]
    )
    function addColor(color:string) : void {
        setColors([...colors,color]); 
    }

    return (
        <div className="ArraysEx">
            <ol>
                { colors.map((color,index) => <li key={index}>{color}</li>)}
            </ol>
            <button onClick={() => addColor('violet')}>Violet</button>
        
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>  
                </thead>
                <tbody>
                   { pets.map((pet) => <tr key={pet.id}><td>{pet.name}</td><td>{pet.type}</td></tr>)}
                </tbody>
            </table>
        
        </div>
    )
 
    
}
export default ArraysEx;