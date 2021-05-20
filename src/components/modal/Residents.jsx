import {useEffect, useState} from 'react';
import CoreApi from '../../classes/coreApi';
import NoFoundCharacter from './NoFoundCharacter';
import Card from './Card';

const Residents = ({residents, dimension, type, window}) => {

    const [verifyCharacters, setVerifyCharacters] = useState(true);
    const [descriptionResidents, setDescriptionResidents] = useState([]);

    useEffect(() => {

        let coreApi = new CoreApi();
        coreApi.getCharacters(residents)
            .then((data) => {
                setVerifyCharacters(true)
                const description = [...data];
                setDescriptionResidents(description);
               
            })
            .catch((err) => {
                setVerifyCharacters(false);
            })
    },[residents, setVerifyCharacters]);
    
    return(
        <div className='Residents-container'>
            <NoFoundCharacter condition={verifyCharacters} type={type} dimension={dimension}/>
            <Card description={descriptionResidents} window={window} type={type} dimension={dimension}/>
        </div>
    )
} 

export default Residents;