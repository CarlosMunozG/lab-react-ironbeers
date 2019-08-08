import React, { Component } from 'react'
import services from '../services/Services.js';
import {Link} from 'react-router-dom'

class Beer extends Component {
  state = {
    beer: null
  }

  componentDidMount() {
    console.log(this.props.match.params);
    const {id} = this.props.match.params;
    services.getOneBeer(id)
    .then((response) => {
      const newBeer = response.data;
      console.log(response);
      this.setState({
        beer: newBeer
      })
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  



  render() {
    const beer = this.state.beer;
    return (
      <section>
        {beer !== null ? 
        <>
          <header>
            <Link to='/'>Go Back to home</Link>
          </header>
          <section>
                <article>
                  <div>
                    <img src={beer.image_url} alt={beer.name}/>
                  </div>
                  <div>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                  </div>
                </article>
          </section>
        </> : <p>loading...</p>}
      </section>
    )
  }
}

export default Beer;