
import './App.css';
import { Component } from 'react';

const URL_FILTERED = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      mosters: []
      
    }
  }

  componentDidMount(){
    fetch(URL_FILTERED)
    .then(res => res.json())
    .then(json =>{
      this.setState({
        mosters: json
      })
    })
  }

  render() {
    return (
        <div className="App">
          <div>
            {
              this.state.mosters.map((item)=>{
                return(
                  <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>Email: {item.email}</p>
                  {/* <p>Company: {item.company.name}</p> */}
                  
                  </div>
                )
              })
            }
          </div>

        </div>
      );
  }
}

export default App;
