import React from 'react';

class TopBrand extends React.Component{
  render(){
    return (
      <header>
      <div className="row">
        <div className="col-xs-4 col-lg-4">
          <img className="pull-left logo" src="/img/logo_edf.gif"/>
        </div>
        <div className="col-xs-4 col-lg-4">
        </div>
        <div className="col-xs-4 col-lg-4 ">
          <img className="pull-right" src="/img/bg_logo_ig.png"/>
          <div className="title">ROadmap SImplifiéE</div>
        </div>
      </div>
      </header>
  )
  }
}

export default TopBrand;
