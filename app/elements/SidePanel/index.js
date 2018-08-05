import React from 'react';
import styles from './styles.scss';

class SidePanel extends React.Component{
  render(){
    let {
      examples,
      previousPage
    } = this.props;
    return(
      <div className='main'>
        <p>
          Just a simple test
        </p>
      </div>
    );
  }
}

export default SidePanel;
