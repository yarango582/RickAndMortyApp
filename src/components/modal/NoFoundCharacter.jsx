
const NoFoundCharacter = ({condition, dimension, type}) => {
    if(!condition){
        return(
            <div className='containerNoFound'>
                <h1 className='text-center'>No found characters in this location!</h1>
                <h3 className='text-center'>Dimension:{dimension}</h3>
                <h4 className='text-center'>Type:{type}</h4>
            </div>
        )
    }else{
        return ''
    }
}

export default NoFoundCharacter;