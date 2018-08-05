import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Header extends React.Component {
  render(){
    let {
      title,
      subdirectory,
      icon
    } = this.props;
    return(
      <div className='main'>
      </div>
    );
  }  
}

export default Header;
