import './App.css';
import { Component } from 'react';
import CardList from './components/card-lists/card-list-component';
import SearchBox from './components/search-box/search-box-component';

const URL_FILTERED = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      mosters: [],
      searchField: ''

    }
  }

//FETCHING THE API AND PASSING INTO THE STATE
  componentDidMount(){
    fetch(URL_FILTERED)
    .then(res => res.json())
    .then(json =>{
      this.setState({
        mosters: json
      })
    })
  }

// ONCHANGE EVENT FROM THE INPUT FIELD
  onSearchChange = (e) => {
      const searchField = e.target.value.toLowerCase()
      this.setState( { searchField})              
    }
              

  render() {
    // DISTRUCTING THE (THIS AND THIS.STATE)
    const { mosters, searchField} = this.state;
    const {onSearchChange } = this

// FILTERING THE MOSTERS
     const filterMosters = mosters.filter((item)=>{
                 return item.name.toLowerCase().includes(searchField)
                })
    return (
        <div className="App">  
          <SearchBox 
            onChangeHandler = {onSearchChange} 
            placeholder="Search Mosters" 
            className = 'search-box'
          />                     
          <CardList mosters ={filterMosters}/>

        </div>
      );
  }
}

export default App;
