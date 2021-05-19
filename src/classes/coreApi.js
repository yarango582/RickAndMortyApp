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


}