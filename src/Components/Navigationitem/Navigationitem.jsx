import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";

function Navigationitem({children, to}) {

    const current = useMatch(to);
    console.log(current);

    const setActive = current ? 'nagivation__item nagivation__item--active' : ''
    
    return (
     <li className={setActive}>
        <Link to={to}>{children}</Link>
     </li>
    );
  }
  
  export default Navigationitem;