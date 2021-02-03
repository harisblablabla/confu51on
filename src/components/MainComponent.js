import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Redirect, Route, Switch } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
          dishes: DISHES,
          selectedDish: null
        }
    }

    onDishSelected = (dishId) => {
        this.setState({selectedDish: dishId})
    }
    
      render(){

        const HomePage = () => {
          return(
            <Home/>
          )
        }

        return(
          <div>
            <Header/>
              <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
                <Redirect to="/home"/>
              </Switch>
            {/* <Menu dishes={this.state.dishes} onClick={ (dishId) => (this.onDishSelected(dishId)) }/>
            <DishDetail selectedDish={this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish)[0]}/> */}
            <Footer/>
          </div>
        )
      }

}

export default Main;