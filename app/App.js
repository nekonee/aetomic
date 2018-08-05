import React from 'react';
import FontAwesome from 'react-fontawesome';

import Header from './elements/Header/';
import SidePanel from './elements/SidePanel/';

import styles from './App_styles.scss';
import styles_css from './styles.css';

class App extends React.Component{
  render() {
    let {
      version
    } = this.props;
    return(
      <div className='main-window'>
        <SidePanel />
        <Header />
      </div>
    );
  }
}

export default App;
