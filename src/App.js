import React from 'react';
import axios from 'axios';
import './App.css';  // Update the import statement to match the correct file name


class App extends React.Component {
  state = { advice: '' }; 

  componentDidMount() {
    this.fetchAdvice(); // Assuming you want to fetch advice when the component mounts
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip; 

        this.setState({advice}); 
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    const { advice } = this.state;
    return (
      <div className="app"> {/* Fix the typo here: classNmae -> className */}
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}> 
          <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
