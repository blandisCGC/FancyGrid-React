import React from 'react';
import Fancy from 'fancygrid';

class Grid extends React.Component {
  render() {
	var self = this,
  	  containerProps = this.props.containerProps || {};

    // Add ref to div props
    containerProps.ref = function (container) {
	  self.container = container 
	}

    // Create temp container for our grid
    return React.createElement('div', containerProps);
  }
  
  componentDidMount() {
    var me = this,
	  props = me.props,
	  config = me.props.config || {},
	  container = me.container;
	
	for(var p in props){
	  switch(p){
		case 'config':
		  break;
		default:
		  config[p] = props[p];
	  }
	}
	
	config.renderOuter = container;
	
    me.widget = new Fancy.Grid(config);
  }
  
  componentWillUnmount() {
	if(this.widget.el.dom){
      this.widget.destroy();
	}
  }
}

class Form extends React.Component {
  render() {
	var self = this,
  	  containerProps = this.props.containerProps || {};

    // Add ref to div props
    containerProps.ref = function (container) {
	  self.container = container 
	}

    // Create temp container for our grid
    return React.createElement('div', containerProps);
  }
  componentDidMount() {
    var me = this,
	  props = me.props,
	  config = me.props.config || {},
	  container = me.container;
	
	for(var p in props){
	  switch(p){
		case 'config':
		  break;
		default:
		  config[p] = props[p];
	  }
	}
	
	config.renderOuter = container;
	
    me.widget = new Fancy.Form(config);
  }
  
  componentWillUnmount() {
    if(this.widget.el.dom){
      this.widget.destroy();
	}
  }
}

class Tab extends React.Component {
  render() {
	var self = this,
  	  containerProps = this.props.containerProps || {};

    // Add ref to div props
    containerProps.ref = function (container) {
	  self.container = container 
	}

    // Create temp container for our grid
    return React.createElement('div', containerProps);
  }
  
  componentDidMount() {
      var me = this,
	  props = me.props,
	  config = me.props.config || {},
	  container = me.container;
	
	for(var p in props){
	  switch(p){
		case 'config':
		  break;
		default:
		  config[p] = props[p];
	  }
	}
	
	config.renderOuter = container;
	
    me.widget = new Fancy.Tab(config);
  }
  
  componentWillUnmount() {
    if(this.widget.el.dom){
      this.widget.destroy();
	}
  }
}

export {
  Fancy,
  Grid as grid,
  Form as form,
  Tab as tab,
  Grid,
  Form,
  Tab,
  Grid as FancyGridReact,
  Form as FancyFormReact,
  Tab as FancyTabReact
};