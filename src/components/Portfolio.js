import React, { Component } from 'react';
import '../styles/portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: []
    }
  }
  render() {
    return (
        <div id="my-github-projects">
          <h1> Portfolio </h1>
          <ul className="list-group list-unstyled small">
            {this.state.repos.map((repo => {
              return <li className="list-group-item repo-item">
                <a href={repo.html_url}> <b> {repo.name} </b> </a>
                <br></br>
              </li>
            }))}
          </ul>
        </div>
      );
  }

  // Api request function
  fetchApi(url) {

    fetch(url)
      .then((res) => res.json() )
      .then((data) => {

        // Update state with API data
        this.setState({
          repos: data
        })
      })
      .catch((err) => console.log('Unable to retrieve repos!') )
  }

  fetchUserRepos(username) {
    let url = `https://api.github.com/users/${username}/repos`
    this.fetchApi(url)
  }

  componentWillMount() {
    this.setState(this.fetchUserRepos("tvao"))
  }

  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.username}`
    this.fetchApi(url)
  }
}

export default Portfolio;
