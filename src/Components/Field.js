import React, { Component } from 'react';
import Languagecontext from './contexts/LanguageContext';

export default class Field extends Component {
    static contextType = Languagecontext;
    render() {
        const text = this.context === 'english'? 'Name':'Namm';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        )
    }
}
