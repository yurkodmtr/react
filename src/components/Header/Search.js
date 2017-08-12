import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="search right">
                <form>
                    <input type="text" placeholder="Поиск" />
                    <input type="submit" value="" />
                </form>
                <ul>
                    <li><a href="#">Colin McRae</a></li>
                    <li><a href="#">Colin McRae Rally</a></li>
                    <li><a href="#">Colin McRae Rally DIRT</a></li>
                    <li><a href="#">Colin McRae Rally DIRT 2</a></li>
                </ul>
            </div>
        );
    }
}
