import Th from "../Th/Th";
import Tr from "../Tr/Tr";
import { Context } from "../../Content";
import { useContext } from "react";

function Backed() {

    const [concerts, count, setCount, addEl, setAddEl] = useContext(Context);
    
    let arr = addEl.flat();

    return (
      <div className="backed">
        <table>
            <Th/>
           {arr.map((elem, index) => <Tr
           key={index}
           {...elem}/>)}
        </table>
       
      </div>
    );
  }
  
  export default Backed;