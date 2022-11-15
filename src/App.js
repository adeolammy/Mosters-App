
import './App.css';
import { Component } from 'react';

const URL_FILTERED = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      mosters: [],
      searchField: ''

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

     const filterMosters = this.state.mosters.filter((item)=>{
                 return item.name.toLowerCase().includes(this.state.searchField)
                })
    return (
        <div className="App">
          <div>
              <input 
              type="search" 
              className="inputSearch" 
              placeholder="Search Moster"
              onChange={(e)=>{
               const searchField = e.target.value.toLowerCase()
                this.setState( { searchField})              
              }}
              />

            {
              filterMosters.map((item)=>{
                return(
                  <div key={item.id}>
                      <h2>{item.name}</h2>
                      <p>Email: {item.email}</p>

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
