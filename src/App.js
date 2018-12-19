import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: ""
    }
  }

  getData = () => {
    return fetch('https://swapi.co/api/films/')
    .then(res => res.json())
    .then(data => {
      this.setState({data: data.results})
      return data
    })
    .then(this.getMoveTitles)
    .catch(err => console.error(err))
  }

  getMoveTitles = () => {
    let title = this.state.data.map((moveTitle, index) => <p key={index}>{moveTitle.title}</p>)
    return title
  }
  
  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.data ? 
          <div>
            <h1>Move Titles</h1>
            {this.getMoveTitles()}
          </div> : 
          <div>
            <h1>I find your lack of fetch disturbing..</h1>
            <Loader type="Grid" color="red" height={80} width={80} />
          </div>        
          }
        </div>
      </div>
    )
  }
}

export default App;
