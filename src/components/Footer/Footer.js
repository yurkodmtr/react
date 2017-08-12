import React, { Component } from 'react';
import Social from './Social';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="center clearfix">
                    <div className="footer__copy left">
                        © 2014 Game Orbitum
                    </div>

                    <a href="#" className="footer__terms left">Пользовательское соглашение</a>

                    <Social />
                    
                </div>
            </footer>
        );
    }
}
