export default function Item(props){
    return(
        <li key={props.index}>{props.item}</li>
    )
}