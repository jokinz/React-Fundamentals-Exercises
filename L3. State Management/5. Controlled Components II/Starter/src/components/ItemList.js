import Item from "./Item"
import PropTypes from "prop-types";

export default function ItemList(props){

    return(
        <ol className="item-list">
            {props.items.map((item, index) => (
            <Item key={index} item={item}/>
            ))}
        </ol>
    )
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
  };
  
  