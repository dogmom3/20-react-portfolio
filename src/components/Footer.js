import React from 'react';

export default function Footer() {
  return (
<footer>
    <a className='link' target='blank' href='http://www.github.com/dogmom3'>
      <img src={require('../assets/github.png')}></img>
      </a>
    <a className='link' target='blank' href='http://www.linkedin.com/in/blairseivers/'>
    <img src={require('../assets/linkedin.png')}></img>
      </a>
    <a className='link' target='blank' href='https://stackoverflow.com/users/19273326/dogmom3'>
    <img src={require('../assets/stackoverflow.png')}></img>
      </a>
    <a className='link' target='blank' href='http://www.instagram.com/adventure.brindles/'>
    <img src={require('../assets/instagram.jpg')}></img>
      </a>
</footer>
  )};