import React from "react";

class Header extends React.Component {
  state = {
    textField: "",
  }

  changingVal = (e) => {
    this.setState({ textField: e.target.value });
  };

  fix = (e) => {
    this.props.onSearch(e, this.state.textField)
    this.setState({textField: ""})
  }

  render() {
    return (
      <>
        <header className="header">
          <a href="/">
            <img style={{width: 251, height: 80}}
              src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2016/06/28/youtube-inactive-account_1200x500.jpg"
              alt="netflix-font"
              border="0"
            />
          </a>
          <form id="search" className="search" onSubmit={this.fix}>
            <input
              type="search"
              placeholder="Search for a title..."
              value={this.state.textField}
              onChange={this.changingVal}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Header;
