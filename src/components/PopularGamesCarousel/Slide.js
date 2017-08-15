import React, { Component } from 'react';

export default class Slide extends Component {

    render() {
        return (
            <div className="item">
                <figure>
                    <img src={this.props.img} alt="" />
                    <div className="label clearfix">
                        {this.props.labelPopular ? <div className="popular">ПОПУЛЯРНАЯ</div> : ''}
                        {this.props.labelHit ? <div className="hit">ХИТ</div> : ''}
                    </div>
                </figure>
                <div className="item__content">
                    <section>
                        <a href="#" className="item__name">{this.props.title}</a>                    
                        <div className="item__descr">
                            {this.props.descr}
                        </div>
                    </section>
                    <div className="console">
                        {this.props.consoleLinePc ? <span>PC</span> : ''}
                        {this.props.consoleLinePs4 ? <span>PS4</span> : ''}
                        {this.props.consoleLineXbox ? <span>XBox</span> : ''}
                        {this.props.consoleLine3ds ? <span>3Ds</span> : ''}
                        <i>+{this.props.consoleLineAge}</i>
                    </div>
                    <div className="rating_pas">
                        <span>Рейтинг :</span> 
                        <i className="act"></i>
                        <i className="act"></i>
                        <i className="act"></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div> 
        );
    }
}
