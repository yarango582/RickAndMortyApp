import { useEffect, useState } from 'react';
import CoreApi from './../classes/coreApi';
import {loadingPopUpFast} from './pop-up/Alert';
import message from '../utils/messages.json';

const SearchInput = ({dataSearch}) => {
   
    const [querySearch, setQuerySearch] = useState('');
    const [condition, setCondition] = useState(false);

    const handleOnchange = (event) => {

        if(event.target.value.length >3){
            setQuerySearch(event.target.value);
            setCondition(true);
        }

        if(event.target.value === ''){
            setCondition(false);
            setQuerySearch('')
            loadingPopUpFast(message.loadingResourceWaitAmoment)
            .then(() => {})
        }

    }

    useEffect(() => {
        const coreApi = new CoreApi();
        if(condition === false){
            coreApi.getLocations()
            .then(({data}) => {
                dataSearch(data.results);
            })
            .catch((err) => console.log(err));            
        }
        if(querySearch.length >1){
            coreApi.getLocationByName(querySearch)
            .then(({data}) => {
                dataSearch(data.results);
                    loadingPopUpFast(message.loadingResourceWaitAmoment)
                    .then(() => {
                    });
            })
            .catch((err) => console.log(err));
        }
    }, [condition, dataSearch, querySearch]);

    return(
        <div>
             <input className='search-input' type="search" placeholder='Location:Name' id='search' onChange={handleOnchange}/>
             <label htmlFor="search">
                <i className="fas fa-search search-icon"></i>
             </label>
        </div>
       
    )
}

export default SearchInput;