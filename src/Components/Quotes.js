

const Quotes=(props)=>{
    return (
        <div class="quote-container">
            <h2 class="quote">{props.quote}</h2>
            <p class="author">{props.author}</p>
        </div>
    )

}
export default Quotes;
