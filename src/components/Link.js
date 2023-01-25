// @flow
import * as React from 'react';
import {PropTypes} from 'prop-types'

export function Link({to,children}) {
  const handelClick = (e)=>{
      e.preventDefault();
      console.log("user clicked on to  ",to)
    }
  return (
    <a onClick={handelClick} href={to}>{children}</a>
  );
};

Link.propTypes = {
    to:PropTypes.string
}