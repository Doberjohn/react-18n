import React, { Component } from 'react';

import UserCreate from '../UserCreate/UserCreate';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { LanguageStore } from '../../contexts/LanguageContext';
import ColorContext from '../../contexts/ColorContext';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector/>
                    <ColorContext.Provider value='primary'>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;