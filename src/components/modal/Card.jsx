import ReactDom from 'react-dom';
import App from '../../App';

const Card = ({description, window, dimension, type}) => {


    setTimeout(() => {
        ReactDom.render(<App/>, document.getElementById('root')); 

    }, 1000);

    if(description.length>0){
        if(window){
            const {characters} = description[0];
            return (
                <div className='container'>
                    <div className='row container-characters'>
                        <div className='title-card'>
                            <h3>{dimension}</h3>
                            <h4>{type}</h4>
                        </div>
                            {
                                characters.map((character) => {
                                    return(
                                        <div className='col-xl-3 col-lg-4 col-md-5 col-sm-12 col-xs-12 text-center' key={character.id}>
                                            <img src={character.image} alt={character.name} className='img-character'/>
                                            <div>
                                                <p>Name: {character.name}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            )
        }else{
            return ''
        }
    }else{
        return ''
    }
    
}

export default Card;