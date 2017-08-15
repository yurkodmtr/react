import React, { Component } from 'react';
import Slide from './Slide';

const gameList = [
    {
        img: 'https://unsplash.it/255/170/?random',
        labelPopular: true,
        labelHit: false,
        href: '#',
        title: 'Halo: The Master Chief Collection',
        descr: 'Bumbling space hero Rex Nebular must prevent an army of war-minded females from conquering the galaxy and bjugating males everywhere into slaves to do their bidding.',
        consoleLinePc: false,
        consoleLinePs4: true,
        consoleLineXbox: true,
        consoleLine3ds: true,
        consoleLineAge: '12',
        rating: '3'
    },
    { 
        img: 'https://unsplash.it/255/170/?random',
        labelPopular: false,
        labelHit: true,
        href: '#',
        title: 'Halo: The Master ',
        descr: 'Bumbling space hero Rex Nebular.',
        consoleLinePc: true,
        consoleLinePs4: false,
        consoleLineXbox: true,
        consoleLine3ds: false,
        consoleLineAge: '14',
        rating: '2'
    },
    {
        img: 'https://unsplash.it/255/170/?random',
        labelPopular: true,
        labelHit: true,
        href: '#',
        title: 'Halo: The Master Chief Collection',
        descr: 'Bumbling space hero Rex Nebular must prevent an army of war-minded females from conquering the galaxy and bjugating males everywhere into slaves to do their bidding.',
        consoleLinePc: false,
        consoleLinePs4: true,
        consoleLineXbox: true,
        consoleLine3ds: false,
        consoleLineAge: '8',
        rating: '4'
    },
];

export default class IndexContent extends Component {
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
                                gameList.map(function(el,index){
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
