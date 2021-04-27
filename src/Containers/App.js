import React, {useState, useEffect} from 'react';
import Searchbox from '../Components/Searchbox.js'
import CardList from '../Components/CardList.js';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry.js'
import './App.css';

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        console.log(count)
    },[count])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    
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
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <Searchbox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots = { filteredRobots }/>
                </ErrorBoundry>
            </Scroll>
        </div>        
    );
}

export default App;