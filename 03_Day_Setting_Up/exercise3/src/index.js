
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
// To get the root element from the HTML document

// JSX element, header
const imgStyle = { borderRadius: '50%' }
const name = "Asabeneh 30 Days to React Dude"
const title = "Senior Dev, Finland"

// JSX element, header
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <img alt='author' src={asabenehImage} style={imgStyle} />
      <p style={{ fontWeight: 'bold', fontFamily: 'papyrus', padding: '35px'}}>{name}</p>
      <p style={{ paddingLeft: '35px', paddingBottom: '25px' }}>{title}</p>
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
const Main = (props) => (
  <main>
    <div className='main-wrapper'>
      <h3 style={{ paddingLeft: '35px'}}>Skills Include:</h3>
      <p style={{ paddingLeft: '35px'}}>{props.skillsFormatted}</p>
    </div>
  </main>
)

const dateJoin = 'August 30, 2020'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p style={{ paddingLeft: '35px'}}>Joined on {dateJoin}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    <Header />
    <Main skillsFormatted={skillsFormatted} />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)