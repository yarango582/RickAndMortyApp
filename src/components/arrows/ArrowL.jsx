
const ArrowButtonL = ({handleFunction, direction}) => {

    return(
        <a href='/#' onClick={handleFunction}>
            <i className={`fas fa-chevron-${direction} arrow-left`}></i>
        </a>
)
}

export default ArrowButtonL;