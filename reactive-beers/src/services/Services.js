import axios from 'axios'

class Services {
  constructor(){
    this.info = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers/'
    })
  }
  
  getAllBeers(){
    return this.info.get()
    .then(response => response);
  }

  getOneBeer(id){
    return this.info.get(id)
    .then(response => response);
  }

  getRandomBeer(){
    return this.info.get('random')
    .then(response => response);
  }

}

const services = new Services();

export default services;