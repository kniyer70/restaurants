import React, {Component, Fragment} from 'react';
import Header from './Header';
import RestaurantsDisplay from './Restaurants';

#const url = "https://developerfunnel.herokuapp.com/restaurants";
const url = "http://44.199.247.225:8443/restaurant/";


class Home extends Component{
    constructor(){
        super()

        this.state={
            restaurant:''
        }
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                restaurant:data
            })
        })
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <RestaurantsDisplay datalist={this.state.restaurant}/>
            </Fragment>
        )
    }
}

export default Home;
