import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Header extends React.Component {
  render(){
    let {
      title,
      likeCallback,
      icon,
      version
    } = this.props;
    return(
      <div className='header-component'>

        <div className='first-part'>
          <div className='title' onClick={likeCallback}>
            {title}
          </div>

          <div className='icon'>
            {icon}
          </div>
        </div>

        <div className='version'>
          {version}
        </div>
        
      </div>
    );
  }  
}

export default Header;
