
const Button = (prop) => {
    return (
        <button className='btn' style ={{backgroundColor : prop.color}}>{prop.text}</button>
    )
}

Button.defaultProps = {
    color : "steelblue",
    text : "ADD"
}
export default Button
