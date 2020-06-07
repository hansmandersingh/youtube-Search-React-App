import React from "react";

class Header extends React.Component {
  state = {
    textField: "",
  }

  changingVal = (e) => {
    this.setState({ textField: e.target.value });
  };

  render() {
    return (
      <>
        <header className="header">
          <a href="/">
            <img
              src="https://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/128/youtube-icon.png"
              alt="netflix-font"
              border="0"
            />
          </a>
          <form id="search" className="search" onSubmit={(e) =>this.props.onSearch(e, this.state.textField)}>
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
