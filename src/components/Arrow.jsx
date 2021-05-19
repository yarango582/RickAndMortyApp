
const ArrowButton = ({handleFunction, direction}) => {

    return(
        <a href='/#' onClick={handleFunction}>
            <i className={`fas fa-chevron-${direction} arrow`}></i>
        </a>
)
}

export default ArrowButton;