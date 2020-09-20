import React from 'react';

import '../Loader/Loader.scss';

export default class MiniLoader extends React.Component {
  render () {
    return (
      <div className="lds-grid">
        <div />
        <div />
        <div />
      </div>
    );
  };
};
