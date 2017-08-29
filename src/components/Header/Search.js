import React, { Component } from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            activeClass: ''
        }

        this.searchValueChange = this.searchValueChange.bind(this);
    }

    searchValueChange (event) {
        if ( event.target.value != '' ) {
            this.setState({
                activeClass: 'active'
            });
        } else {
            this.setState({
                activeClass: ''
            });
        }
    }
    
    render() {
        return (
            <div  className={ `search right ${this.state.activeClass}` }>
                <form>
                    <input 
                        type="text" 
                        placeholder="Поиск" 
                        ref={(input) => { this.searchValueInput = input; }} 
                        onChange={this.searchValueChange}
                    />
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
