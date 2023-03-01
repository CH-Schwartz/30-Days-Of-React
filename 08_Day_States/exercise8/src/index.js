
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
// To get the root element from the HTML document

const imgStyle = { borderRadius: '50%' }
const name = "Asabeneh 30 Days to React Dude"
const title = "Senior Dev, Finland"

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
const dateJoin = 'August 30, 2020'


// JSX element, header
class Header extends React.Component {


  render(){
    return(
      <header>
      <div className='header-wrapper'>
        <img alt='author' src={this.props.src} style={this.props.imgStyle} />
        <p style={{ fontWeight: 'bold', fontFamily: 'papyrus', padding: '35px'}}>{name}</p>
        <p style={{ paddingLeft: '35px', paddingBottom: '25px' }}>{title}</p>
      </div>
    </header>      
    )
  }
}

// JSX element, main
class Main extends React.Component {
  state = {
    backgroundColor:''
  }
  
  darkMode = () => {
    this.setState({backgroundColor:'#36454F'})
  }

  lightMode = () => {
    this.setState({backgroundColor:'#FFFFFF'})
  }
  render(){
    return(
      <main style={{backgroundColor: this.state.backgroundColor}}>
      <div className='main-wrapper'>
        <div>
        <button onClick={this.darkMode} style={skillButton}>Dark Mode</button>
        <button onClick={this.lightMode} style={skillButton}>Light Mode</button>
        </div>
        <h3 style={{ paddingLeft: '35px'}}>Skills Include:</h3>
        <p style={{ paddingLeft: '35px'}}>{this.props.skillsFormatted}</p>
      </div>
    </main>
    )
  }
}

// JSX element, footer
class Footer extends React.Component {
  render() {
    return (
    <footer>
    <div className='footer-wrapper'>
      <p style={{ paddingLeft: '35px'}}>Joined on {this.props.dateJoin}</p>
    </div>
  </footer>
    )
  }
}

// JSX element, app
class App extends React.Component{

  render(){
    return(
      <div style={this.props.backgroundStyle}  className='app'>
        <Header src={asabenehImage} imgStyle={imgStyle}/>
        <Main skillsFormatted={skillsFormatted} />
        <Footer dateJoin={dateJoin} testProps={"test"} />
      </div>  
    )
  }
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)