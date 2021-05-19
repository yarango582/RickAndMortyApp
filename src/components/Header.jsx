import SearchInput from './SearchInput';

const Header = ({logo, dataSearch}) => {
    
    const handleClick = () => {
        window.location.replace('https://www.netflix.com/title/80014749');
    }

    return(
        <div className='header'>
            <img className ='logoP' src={logo} alt="LogoPrincipal" title='Quieres ver la serie? Click!!!' onClick={handleClick}/>
            <SearchInput dataSearch={dataSearch}/>
        </div>
    )
}

export default Header;