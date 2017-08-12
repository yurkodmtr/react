import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="center clearfix">   
                    <a href="#" className="logo left"><img src="images/logo.png" alt="" /></a>     
                    <div className="languages left">RU</div>      
                    
                    <Search />

                    <Nav />                    
                </div>
            </header>
        );
    }
}
