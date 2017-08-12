import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <ul className="nav left clearfix">
                <li className="active"><a href="#">Новости</a></li>
                <li><a href="#">Клиентские</a></li>
                <li><a href="#">Браузерные</a></li>
                <li><a href="#">Мини-игры</a></li>
            </ul>
        );
    }
}
