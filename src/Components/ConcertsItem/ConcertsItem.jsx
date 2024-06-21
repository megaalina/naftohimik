import { Link } from "react-router-dom";
import { arr } from "../../arr";
import { Context } from "../../Content";
import { useContext } from "react";




function ConcertsItem({id, url, title, description, data, category}) {

    const [concerts, count, setCount, addEl, setAddEl] = useContext(Context);
    // console.log(addEl)

    const handlerClick =(e) => {
        if(e.target.matches('.title')){
           let titleArr = arr.filter(elem => elem.title === e.target.innerHTML);
           setCount(titleArr)
        }

        if(e.target.matches('.btn')){
            let elTitle = e.target.parentElement.children[1].innerHTML;
            let obj = arr.filter(elem => elem.title === elTitle);
            
            setAddEl([...addEl, obj]);
            // console.dir(addEl)
        }
      }

    let to = `/${title}`;

    let el = arr.filter(elem => elem.title === title);

    return (
        <li className="concerts_item" onClick={(e) => handlerClick(e)}>
        <img src={url} alt="" />

        <Link className="title" to='/concerts/concerts'>{title}</Link>
        <p className="data">{data}</p>
        <div className="btn">Додати до обраних подій</div>
    </li>
    );
  }
  
  export default ConcertsItem;