import ReactDom from 'react-dom';
import App from '../../App';
import Modal from '../modal/detailsCharacter/Modal';

const Card = ({description, window, dimension, type}) => {
    
    let counter = setTimeout(() => {
        ReactDom.render(<App/>, document.getElementById('root')); 
    }, 1000);

    if(description.length>0){
        if(window){
            const {characters} = description[0];
            return (
                <div className='container'>
                    <div className='row container-characters'>
                        <div className='title-card'>
                            <h3>Dimension:{dimension}</h3>
                            <h4>Type:{type}</h4>
                        </div>
                            {
                                characters.map((character, index) => {
                                    if(index+1 === characters.length){
                                        clearTimeout(counter);
                                    }
                                    return(
                                        <div className='col-xl-3 col-lg-4 col-md-5 col-sm-12 col-xs-12 text-center card-border' key={character.id}>
                                            <div className='body'>
                                                <p>#{index+1}</p>
                                                <div>
                                                    <img src={character.image} alt={character.name} className='img-character'/>
                                                </div>
                                                <div className='footer-card'>
                                                    <p>{character.name}</p>
                                                    <p>{character.status}<i className={`fas fa-dot-circle ${character.status}`}></i></p>
                                                </div>
                                            </div>
                                            <Modal character={characters[index]}/>
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