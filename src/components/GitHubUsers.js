import React, {Component} from "react";
import "isomorphic-fetch";


class GitHubUsers extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentWillMount() {
    this.renderMyData();
  }

  renderMyData(){
    fetch('https://api.github.com/users')
    .then(results => {
      return results.json();
    })
    .then(data => {
      debugger
      let details = data;
      this.setState({detailsInfo: details});
      console.log(this.state);
    })
  }

  onItemClick(e, item) {
    this.setState({
      lang: item,
    });
}

  render(){
    console.log(this.state);
debugger
    const items = ['EN', 'IT', 'FR', 'GR', 'RU'].map((item) => {
      return (<li onClick={this.onItemClick.bind(this, item)} key={item}>{item}</li>);
    });
var detailsInfo;
    if (typeof this.state.detailsInfo != 'undefined'){
      detailsInfo = this.state.detailsInfo.map((details) => {
        return (<div className="col-lg-4 gi-p-t">

<div className="card card-width" key={details.id}>
            <img className="card-img-top {details.avatar_url}" src={details.avatar_url} alt="Card image"/>
              <div className="card-body">
                <h4 className="card-title">{details.login}</h4>
                  <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
                </div></div>);
      });
    }



    return (
      <div className="row ">
                {detailsInfo}
      </div>
    );
  }

}

export default GitHubUsers
