import React from 'react';
import FontAwesome from 'react-fontawesome';

import{
  Header,
  SidePanel
} from './elements';

import styles from './App_styles.scss';


class App extends React.Component{
  render(){
    return(
      <div id='app'>
      <Header
        title= 'aetomic✨'
        likeCallback= {() => alert('Redirecting to main page')}
        icon= 'lel'
        version= '2137'
        />
      </div>
    );
  }
}
export default App;
