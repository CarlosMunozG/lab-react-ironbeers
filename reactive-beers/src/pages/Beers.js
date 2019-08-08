import React, { Component } from 'react'
import services from '../services/Services.js';
import {Link} from 'react-router-dom'

class Beers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    services.getAllBeers()
    .then((response) => {
      const beersFromAPI = response.data;
      this.setState({
        beers: beersFromAPI
      })
    })
    .catch((error) =>{
      console.log(error);
    })
  }





  render() {
    const {beers} = this.state;
    return (
      <section>
        <header>
          <Link to='/'>Go Back to home</Link>
        </header>
        <section>
          {beers.length > 0 ? beers.map((beer) => {
            return(
              <article key={beer._id}>
                <div>
                  <Link to={`/beer/${beer._id}`}>
                   <img src={beer.image_url} alt={beer.name}/>
                  </Link>
                </div>
                <div>
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </article>
            )
          }): <p>loading...</p>

          }
        </section>
        
      </section>
    )
  }
}

export default Beers;
