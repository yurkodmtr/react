import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import IndexContent from './components/IndexContent/IndexContent';

export default class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />

                <section className="content">

                    <Gallery />

                    <IndexContent />

                </section>

                <Footer /> 
            </div>
        );
    }
}
