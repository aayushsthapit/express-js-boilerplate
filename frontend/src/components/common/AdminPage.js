import React,{Component} from 'react';
import NavBar from './NavBar';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import CategoryUpdate from '../admin/CategoryUpdate';
import ProductUpdate from '../admin/ProductUpdate';

class AdminPage extends Component{
    constructor(){
        super();
        this.state={
            openNavToggle:''
        }
        this.switchSelectedToggle=this.switchSelectedToggle.bind(this);
    }

    componentDidMount(){
        var pathName=this.props.location.pathname;
        this.setState({
            openNavToggle:pathName.substr(pathName.lastIndexOf('/')+1)
        })
    }

    switchSelectedToggle(val){
        return ()=>{
            this.setState({
                openNavToggle:val
            })
        }
    }

    render(){
        const match= this.props.match;
        return(
        <div className='container-fluid'>
            <Router>
                    <NavBar match={match} openNavToggle={this.state.openNavToggle} switchSelectedToggle={this.switchSelectedToggle}/>
                <Switch>
                    <Route path={`${match.url}/category`} component={CategoryUpdate}/>
                    <Route path={`${match.url}/products`} component={ProductUpdate}/>
                </Switch>
            </Router>
        </div>
    )}
    
}

export default AdminPage;