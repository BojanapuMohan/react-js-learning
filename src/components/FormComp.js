import React, {Component} from "react";
import "isomorphic-fetch";

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


class FormComp extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

//   componentWillMount() {
//     this.renderMyData();
//   }
//
//   renderMyData(){
//     fetch('https://api.github.com/users')
//     .then(results => {
//       return results.json();
//     })
//     .then(data => {
//       debugger
//       let details = data;
//       this.setState({detailsInfo: details});
//       console.log(this.state);
//     })
//   }
//
//   onItemClick(e, item) {
//     this.setState({
//       lang: item,
//     });
// }


submitForm() {

  console.log("test");
}

getComponent(event) {
  var obj = {};
  obj.name = document.getElementById("formBasicName").value;
  obj.salary = document.getElementById("formBasicSalery").value;
  obj.age = document.getElementById("formBasicAge").value;



//   fetch('http://dummy.restapiexample.com/api/v1/create', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(obj)
// })

let postData = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    },
    body: obj
}

fetch('http://dummy.restapiexample.com/api/v1/create', postData)
.then((response) => response.json())
.then((responseJson) => { console.log('response:', responseJson); })
.catch((error) => { console.error(error); });



};

  render(){
//     console.log(this.state);
// debugger
//     const items = ['EN', 'IT', 'FR', 'GR', 'RU'].map((item) => {
//       return (<li onClick={this.onItemClick.bind(this, item)} key={item}>{item}</li>);
//     });
// var detailsInfo;
//     if (typeof this.state.detailsInfo != 'undefined'){
//       detailsInfo = this.state.detailsInfo.map((details) => {
//         return (<div className="col-lg-4 gi-p-t">
//
// <div className="card card-width" key={details.id}>
//             <img className="card-img-top {details.avatar_url}" src={details.avatar_url} alt="Card image"/>
//               <div className="card-body">
//                 <h4 className="card-title">{details.id}</h4>
//                   <p className="card-text">Some example text.</p>
//                     <a href="#" className="btn btn-primary">See Profile</a>
//                 </div>
//                 </div></div>);
//       });
//     }



    return (
      <div className="col-lg-4 col-md-4 col-xs-12">
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formBasicSalery">
          <Form.Label>Salery</Form.Label>
          <Form.Control type="text" placeholder="Salery" />
        </Form.Group>

        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Age" />
        </Form.Group>


        <Button variant="primary" type="submit" onClick={this.getComponent.bind(this)} >
          Submit
        </Button>
      </Form>

      </div>
    );
  }

}

export default FormComp
