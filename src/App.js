import React from 'react';
import Nav from './Home/Nav';
import Services from './Home/Services';
import Portfolio from './Home/Portfolio';
import About from './Home/About';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Carousel from "./Carousel";
const App = () => {
    return (
        
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/catalog" component={Portfolio} />
                    <Route path="/shop" component={About} />\
                    <Route path="/supplying" component={About} />
                    <Route path="/link" component={About} />
                </Switch>
            </div>
         </BrowserRouter>
    );
};

const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <div className="row">

                    <Carousel />
                
                </div>
            </div>
        </div>
        )
};



export default App;
