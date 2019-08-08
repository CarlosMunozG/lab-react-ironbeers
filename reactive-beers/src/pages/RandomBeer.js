import React, { Component } from 'react'
import services from '../services/Services.js';
import {Link} from 'react-router-dom'

class RandomBeer extends Component {
  state = {
    beer: null
  }

  componentDidMount() {
    services.getRandomBeer()
    .then((response) => {
      const newBeer = response.data;
      this.setState({
        beer: newBeer
      })
    })
    .catch((error) =>{
      console.log(error);
    })
  }


  render() {
    return (
      <section>
      {this.state.beer !== null ? 
        <>
        <header>
          <Link to='/'>Go Back to home</Link>
        </header>
        <section>
              <article>
                <div>
                  <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                </div>
                <div>
                  <h3>{this.state.beer.name}</h3>
                  <p>{this.state.beer.tagline}</p>
                  <p>Created by: {this.state.beer.contributed_by}</p>
                </div>
              </article>         
        </section> 
        </> : <p>loading...</p>}
      </section> 
      
    )
  }
}

export default RandomBeer;