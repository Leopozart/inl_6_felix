export default function Movie(props) {
    const stars = [];
    for (let i = 0; i < parseInt(props.item.rating); i++) {
        stars.push(<img key={i} src="./logo192.png" alt="star" width="40px" />);
    }
    
    return (
        <li>
            <p>{ props.item.title}</p>
            <span>
                {stars}
                <img src="./delete.png" alt="delete-button" onClick={() => props.removeMovie(props.item.id)} width="40px" />
            </span>
        </li>
    )
}