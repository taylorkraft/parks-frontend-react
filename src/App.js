import React from 'react'

class App extends React.Component {

  componentDidMount() {
    fetch('localhost:3000/states')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Parks App
        </header>
      </div>
    );
  }
}

export default App
