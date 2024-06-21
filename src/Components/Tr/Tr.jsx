import { Context } from "../../Content";
import { useContext } from "react";

function Tr({category, title, data}) {

    const [concerts, count, setCount, addEl, setAddEl] = useContext(Context);
    // console.log(addEl)
    // let category = addEl.map(elem => elem.id);
    

    return (
        <tr>
        <td>{category}</td>
        <td>{title}</td>
        <td>{data}</td>
      </tr>
    );
  }
  
  export default Tr;