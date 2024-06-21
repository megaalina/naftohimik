import ConcertsItem from "../ConcertsItem/ConcertsItem";
import { arr } from "../../arr";

function Concerts() {

    let concerts = arr.filter(elem => elem.category === 'Концерти');
    // console.log(concerts)
    return (
      <div>
        <h1>АФІША НА КОНЦЕРТИ У ПК "НАФТОХІМІК"</h1>
        <ul className="concerts_items">
            {concerts.map((elem, index) => <ConcertsItem
            key={index}
            {...elem}/>)}
        </ul>
      </div>
    );
  }
  
  export default Concerts;