import React from 'react';
import Searchbox from '../Components/Searchbox.js'
import CardList from '../Components/CardList.js';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry.js'
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }   

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value })
    }
    
    render() {
        const { robots, searchfield } = this.state;
        
        const filteredRobots = robots.filter(
            robot=> {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            }
        )

        return !robots.length ?
        <h1>Loading</h1> :    
        (
            <div className='tc'>
                <h1 className="f-headline">Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = { filteredRobots }/>
                    </ErrorBoundry>
                    
                </Scroll>
            </div>        
        );
    }
}
  



export default App;