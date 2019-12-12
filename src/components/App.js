import React,{Component} from 'react';
import './App.css';
import DisplayBios from './DisplayBios';
import "bootstrap/dist/css/bootstrap.css"
import AddDeveloper from './AddDeveloper';
import Developer from '../models/Developer'
import Home from './Home';
import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import NavbBar from './NavbBar';

class App extends Component{
  constructor(props){
    super(props);
        this.state = {
            developers: [
                new Developer(1,"Riddhi","Patel","React",2015),
                new Developer(2,"Purav","Patel","Java",2014)
            ]
        }
      }

      addDeveloper = (dev) => {
        dev.id = this.state.developers.length+1;
        let newDevs = [...this.state.developers,dev];
        this.setState({developers:newDevs});
      }
  render(){
    return(
      <Router >
      <div>
      <NavbBar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/bios"><DisplayBios developers={this.state.developers} /></Route>
          <Route path="/create-bio"><AddDeveloper addDeveloper={this.addDeveloper}/></Route>
        </Switch>
      </div>

  
    </Router>
    )
  }
}
 

export default App;
