import React from 'react';

export default class NoMatch extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <h1>無批配此url的Component(萬用路由)</h1>
      </div>
    );
  }

}
