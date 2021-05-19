

const Header = ({child, typeStyle, button}) => {
    return (
        <div className={typeStyle}>
            {child}
            {button}
        </div>
    )
}

export default Header;