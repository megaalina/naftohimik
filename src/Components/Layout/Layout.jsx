import { Outlet, NavLink } from "react-router-dom";
import Navigationitem from "../Navigationitem/Navigationitem";
import { Context } from "../../Content";
import { useContext } from "react";
import Backed from "../Bavked/Backed";

function Layout() {

  const [concerts, count, setCount, addEl, setAddEl] = useContext(Context);

    const setActive = ({isActive}) => isActive ? 'active__item': '';

    if(addEl.length > 0){
      return (
        <>
        <div className="header">

      <ul className="navigation">
        <Navigationitem to="/">Головна</Navigationitem>
        <Navigationitem to="/concerts">Концерти</Navigationitem>
        <Navigationitem to="/musicals">Мюзикли</Navigationitem>
        <Navigationitem to="/show">Вистави</Navigationitem>
        <Navigationitem to="/musical_performances">Вистави-мюзикли</Navigationitem>
      </ul>
    </div>
    <div className="content">
        <Outlet/>
    </div>
    <Backed/>
   
    {/* <div className="footer">
      2024 - Test&copy; Всі права захищено.
    </div> */}
        </>
        
    );
    } else{
      return (
        <>
        <div className="header">

      <ul className="navigation">
        <Navigationitem to="/">Головна</Navigationitem>
        <Navigationitem to="/concerts">Концерти</Navigationitem>
        <Navigationitem to="/musicals">Мюзикли</Navigationitem>
        <Navigationitem to="/show">Вистави</Navigationitem>
        <Navigationitem to="/musical_performances">Вистави-мюзикли</Navigationitem>
      </ul>
    </div>
    <div className="content">
        <Outlet/>
    </div>
   
    {/* <div className="footer">
      2024 - Test&copy; Всі права захищено.
    </div> */}
        </>
        
    );
    }


      
  
    }
  
  export default Layout;