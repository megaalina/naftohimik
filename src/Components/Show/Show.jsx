import ConcertsItem from "../ConcertsItem/ConcertsItem";
import { arr } from "../../arr";

function Show() {

    let concerts = arr.filter(elem => elem.category === 'Вистави');
    console.log(concerts)
    return (
      <div>
        <h1>АФІША НА ВИСТАВИ У ПК "НАФТОХІМІК"</h1>
        <ul className="concerts_items">
            {concerts.map((elem, index) => <ConcertsItem
            key={index}
            {...elem}/>)}
        </ul>
      </div>
    );
  }
  
  export default Show;