import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", repositories: [], favorites: [] };
  }

  async _fetchData() {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=" + this.state.value
    );
    let repositories = (await response.json()).items;
    repositories = repositories.slice(0, 10);

    for (const repository of repositories) {
      const tagsResponse = await fetch(repository.tags_url);
      const tagsJson = await tagsResponse.json();
      repository.tags = tagsJson;
    }

    this.setState({ repositories: repositories });
  }

  _enterPressed(event) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this._fetchData();
    }
  }

  _onChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === "") {
      this.setState({ repositories: [] });
    }
  }

  _onClick() {
    this._fetchData();
  }

  _onAddFavorites(repository) {
    this.setState({ favorites: [...this.state.favorites, repository] });
  }

  _removeFavorites(repository) {
    this.setState({
      favorites: this.state.favorites.filter(x => x.id !== repository.id)
    });
  }

  render() {
    const repositories = this.state.repositories.map(item => (
      <tr>
        <td>
          <a className="linkNoFormating" href={item.html_url}>
            {item.full_name}
          </a>
        </td>
        <td>{item.language}</td>
        <td>{item.tags[0] ? item.tags[0].name : null}</td>
        <td>
          {!this.state.favorites.find(x => x.id === item.id) ? (
            <a href="#" onClick={() => this._onAddFavorites(item)}>
              Add
            </a>
          ) : null}
        </td>
      </tr>
    ));

    const favorites = this.state.favorites.map(item => (
      <tr>
        <td>
          <a className="linkNoFormating" href={item.html_url}>
            {item.full_name}
          </a>
        </td>
        <td>{item.language}</td>
        <td>{item.tags[0] ? item.tags[0].name : null}</td>
        <td>
          <a href="#" onClick={() => this._removeFavorites(item)}>
            Remove
          </a>
        </td>
      </tr>
    ));

    return (
      <div>
        {/* Header */}
        <div className="header">
          <h1>My Github Favorites</h1>
        </div>

        {/* Flexbox */}
        <div className="container">
          {/* Flexbox Left Search */}
          <div className="left_section">
            <div className="search">
              <input
                className="input"
                type="text"
                placeholder="Search Repositories"
                value={this.state.value}
                onChange={e => this._onChange(e)}
                onKeyPress={this._enterPressed.bind(this)}
              />
              <button className="button" onClick={() => this._onClick()}>
                Search
              </button>
            </div>

            {/* Flexbox Left Table*/}
            <div className="left_table">
              <table>
                <thead>
                  <tr>
                    <th className="name">Name</th>
                    <th className="language">Language</th>
                    <th className="latest_tag">Latest tag</th>
                    <th className="add_remove" />
                  </tr>
                </thead>

                <tbody>{repositories}</tbody>
              </table>
            </div>
          </div>

          {/* Flexbox Right Table*/}
          <div className="right_section">
            <div className="right_table">
              <table>
                <thead>
                  <tr>
                    <th className="name">Name</th>
                    <th className="language">Language</th>
                    <th className="latest_tag">Latest tag</th>
                    <th className="add_remove" />
                  </tr>
                </thead>

                <tbody>{favorites}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
