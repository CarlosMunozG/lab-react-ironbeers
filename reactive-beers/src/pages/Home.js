import React from 'react'
import {Link} from 'react-router-dom';


function Home() {

  return (
    <section>
      <ul>
        <li>
          <Link to='/beers'>All beers</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta obcaecati quas, fugit maiores quidem deleniti consectetur nihil totam alias ducimus. Non nostrum praesentium beatae et quis. Tempore, quia fugiat!</p>
        </li>
        <li>
          <Link to='/random-beer'>Random beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta obcaecati quas, fugit maiores quidem deleniti consectetur nihil totam alias ducimus. Non nostrum praesentium beatae et quis. Tempore, quia fugiat!</p>
        </li>
        <li>
          <Link to='/new-beer'>New beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta obcaecati quas, fugit maiores quidem deleniti consectetur nihil totam alias ducimus. Non nostrum praesentium beatae et quis. Tempore, quia fugiat!</p>
        </li>
      </ul>
    </section>
  )
}

export default Home
