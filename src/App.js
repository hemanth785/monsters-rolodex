import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component';

class App extends Component {
    constructor(){
        super()
        this.state = {
            monsters : [],
            searchText : ""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }
    handleChange = (event) =>{
        this.setState({searchText: event.target.value})
    }
    render(){
        const {monsters,searchText} = this.state;
        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchText.toLowerCase());  
        })

        return (
        <div className="App">
            <SearchBox placeholder="Search monster" handleChange={this.handleChange} />
            <CardList monsters={filteredMonsters} /> 
        </div>
        );
    }
}

export default App;
