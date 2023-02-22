
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
// To get the root element from the HTML document

// JSX element, header
const imgStyle = { borderRadius: '50%' }

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <img alt='author' src={asabenehImage} style={imgStyle} />
      <p style={{ fontWeight: 'bold', fontFamily: 'papyrus', padding: '35px'}}>Asabeneh 30 Days to React Dude</p>
      <p style={{ paddingLeft: '35px', paddingBottom: '25px' }}>Senior Developer, Finland</p>
    </div>
  </header>
)

const skillButton = {
  backgroundColor: '#4CAF50', /* Green */
  border: 'none',
  color: 'white',
  padding: '10px',
  margin: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  borderRadius: '10%'
}

const skills = [ 'CSS','HTML', 'Sass','JS','React','Redux','Node','MongoDB']
const skillsFormatted = skills.map((skills) => <div style={skillButton}>{skills}</div>)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <h3 style={{ paddingLeft: '35px'}}>Skills Include</h3>
      <p style={{ paddingLeft: '35px'}}>{skillsFormatted}</p>
    </div>
  </main>
)

const dateJoin = 'August 30, 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p style={{ paddingLeft: '35px'}}>Joined on {dateJoin}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)