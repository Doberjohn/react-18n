import React, { Component } from 'react';

import LanguageContext from '../../contexts/LanguageContext';

class Field extends Component {
    static contextType = LanguageContext;    
    
    render() {
        this.text = this.context.language === 'english' ? 'Name' : 'Naam';

        return (
            <div className="ui field">
                <label>{this.text}</label>
                <input />
            </div>
        )
    }
}

export default Field;