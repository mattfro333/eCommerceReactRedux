"use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup,
ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {getBooks} from '../../actions/booksActions';
class BooksForm extends React.Component{
 handleSubmit(){
 const book=[{
 title:
findDOMNode(this.refs.title).value,
 description:
findDOMNode(this.refs.description).value,
 price:
findDOMNode(this.refs.price).value,
 }]
 this.props.getBooks(book);
 }
 render(){
 return(
 <Well>
 <Panel>
 <FormGroup controlId="title">

<ControlLabel>Title</ControlLabel>
 <FormControl
 type="text"
 placeholder="Enter Title"
 ref="title" />
 </FormGroup>
 <FormGroup controlId="description">

<ControlLabel>Description</ControlLabel>
 <FormControl
 type="text"
 placeholder="Enter
Description"
 ref="description" />
 </FormGroup>
 <FormGroup controlId="price">

<ControlLabel>Price</ControlLabel>
 <FormControl
 type="text"
 placeholder="Enter Price"
 ref="price" />
 </FormGroup>
 <Button
onClick={this.handleSubmit.bind(this)}
bsStyle="primary">Save book</Button>
 </Panel>
 </Well>
 )
42
 }
}
function mapDispatchToProps(dispatch){
 return bindActionCreators({getBooks},
dispatch)
}
export default connect(null,
mapDispatchToProps)(BooksForm);
