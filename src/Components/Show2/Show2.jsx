import ConcertsItem from "../ConcertsItem/ConcertsItem";
import { arr } from "../../arr";

function Show2() {

    let concerts = arr.filter(elem => elem.category === 'Вистави-мюзикли');
    return (
      <div>
        <h1>АФІША НА ВИСТАВИ-МЮЗИКЛИ У ПК "НАФТОХІМІК"</h1>
        <ul className="concerts_items">
            {concerts.map((elem, index) => <ConcertsItem
            key={index}
            {...elem}/>)}
        </ul>
      </div>
    );
  }
  
  export default Show2;