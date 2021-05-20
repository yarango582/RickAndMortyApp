
const DetailsCharacter = ({character}) => {

    return (
        <div className='chacterContainer'>
            <img src={character.image} alt={character.name} className='characterInformation'/>
            <div className='information-character'>
                <ul className='list-information-character'>
                    <li className='list-information-character__item'>Episodes: {character.episode.length}</li>
                    <li className='list-information-character__item'>Location: {character.location.name}</li>
                    <li className='list-information-character__item'>Name: {character.name}</li>
                    <li className='list-information-character__item'>Origin: {character.origin.name}</li>
                    <li className='list-information-character__item'>Species: {character.species}</li>
                    <li className='list-information-character__item'>Status: {character.status} <i className={`fas fa-dot-circle ${character.status}`}></i></li>
                </ul>
            </div>
        </div>
    )
}

export default DetailsCharacter;