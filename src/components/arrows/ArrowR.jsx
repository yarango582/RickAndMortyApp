
const ArrowButtonR = ({handleFunction, direction}) => {

    return(
        <a href='/#' onClick={handleFunction}>
            <i className={`fas fa-chevron-${direction} arrow-right`}></i>
        </a>
)
}

export default ArrowButtonR;