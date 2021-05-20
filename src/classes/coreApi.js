import axios from 'axios';

export default class CoreApi{

    constructor(){
        this.baseURL = `https://rickandmortyapi.com/api`;
    }

    getLocations(newPage){

        if(newPage){
            let locations = axios.get(`${newPage}`)
            return locations.then((results) => results);            
        }else{
            let locations = axios.get(`${this.baseURL}/location`)
            return locations.then((results) => results);
        }

    }

    getLocationByName(query){
        if(query){
            let locations = axios.get(`${this.baseURL}/location?name=${query}`)
            return locations.then((results) => results);
        }
    }

    getCharacters(array) {
        return new Promise((resolve, reject) => {

            const residents = {
                characters: [],
                promises: [],
            };
    
            const arrayOfPromises = [];
            residents.characters = [...array];

            if(residents.characters.length >0){
                for(let i = 0; i<residents.characters.length; i++){
                    arrayOfPromises.push(axios.get(residents.characters[i]).then((data) => data));
                   if(i===residents.characters.length-1){
                       residents.promises = [...arrayOfPromises];
                       let result = this.resolveMultiplePromises(residents.promises);
                       resolve([result, true]);
                   }
                }
            }else{
                reject(['No hay datos!', false])
            }

        });
    }

    resolveMultiplePromises(arrayPromises) {
        const residents = {
            characters: []
        }
        const promises = [...arrayPromises];
        for(let i = 0; i<promises.length; i++){
            promises[i].then(({data}) => residents.characters.push(data));
        }

        return residents;
    }


}