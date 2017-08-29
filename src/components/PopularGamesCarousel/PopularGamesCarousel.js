import React, { Component } from 'react';
import Slide from './Slide';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class IndexContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFromJson: []
        }
    }

    componentWillMount() {         

        fetch('/json/indexPagePopularGamesCarousel.json', {
          heders : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((stories) => {
            this.setState({
                dataFromJson: stories
            });
        });

    }

    render() {
        return ( 
            <div className="center"> 
                <h1>
                    <b>Популярные игры</b>
                </h1>
                <div className="carousel_main blocktype_1">
            
                    <div className="jcarousel">
                        <ul>
                            {
                                this.state.dataFromJson.map(function(el,index){
                                    return (
                                        <li key={index}>
                                            <Slide 
                                                img={el.img}
                                                labelPopular={el.labelPopular}
                                                labelHit={el.labelHit}
                                                href={el.href}
                                                title={el.title}
                                                descr={el.descr}
                                                consoleLinePc={el.consoleLinePc}
                                                consoleLinePs4={el.consoleLinePs4}
                                                consoleLineXbox={el.consoleLineXbox}
                                                consoleLine3ds={el.consoleLine3ds}
                                                consoleLineAge={el.consoleLineAge}
                                                rating={el.rating}
                                            />  
                                        </li>                                      
                                    )
                                })
                            }                                                       
                        </ul>
                    </div>

                    <a href="#" className="jcarousel-control-prev"></a>
                    <a href="#" className="jcarousel-control-next"></a>

                </div>
      
            </div>
        );
    }
}
