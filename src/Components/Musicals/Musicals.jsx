import ConcertsItem from "../ConcertsItem/ConcertsItem";
import { arr } from "../../arr";

function Musicals() {

    let musicals = arr.filter(elem => elem.category === 'Мюзикли');
    return (
      <div>
        <h1>АФІША НА МЮЗТКЛИ У ПК "НАФТОХІМІК"</h1>
        <ul className="concerts_items">
            {musicals.map((elem, index) => <ConcertsItem
            key={index}
            {...elem}/>)}
        </ul>
      </div>
    );
  }
  
  export default Musicals;