import React from 'react';
import FontAwesome from 'react-fontawesome';

import Footer from './elements/Footer';
import SideBar from './elements/SideBar';

import styles from './App_styles.scss';


class App extends React.Component{
  render() {
    let {
      version
    } = this.props;
    return(
      <div className='main-window'>
        <span>
          Dupacyce
        </span>
        <SideBar />
        <Footer />
      </div>
    );
  }
}

export default App;
