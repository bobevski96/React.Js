import './Card.css';
const Card =(props)=>{
    
    return(
        <div className='cardMain'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <img className='imgTest' src={`${props.imgUrl}`} alt="img text"/>
        </div>
    )
}

export default Card;