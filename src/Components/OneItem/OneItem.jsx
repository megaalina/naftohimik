
import { Context } from "../../Content";
import { useContext } from "react";

function OneItem() {

    const [concerts, count, setCount] = useContext(Context);

    let title = count.map(elem => elem.title);
    let url = count.map(elem => `../${elem.url}`);
    let description = count.map(elem => elem.description);

        return (
            <div className="item">
                <img src={url} alt=""/>
                <h1>{title}</h1>
                <div className="container">
                {description[0].map((elem, index) => <p className="desc" key={index}>{elem}</p>)}
                </div>
                
            </div>
       
        );
    }
  
  export default OneItem;