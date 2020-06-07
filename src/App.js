import React from "react";
import Header from "./Header";
import Video from "./Video";

class App extends React.Component {
  state = {
    latest: [],
  };

  componentDidMount = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyAfXif5ow-aL4o3qmngxCeezF9hWCvtV14`
    )
      .then((data) => data.json())
      .then((json) => {
        this.setState({ latest: json.items });
      });
  };

  onSearch = (e, query) => {
    e.preventDefault();

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyAfXif5ow-aL4o3qmngxCeezF9hWCvtV14&q=${query}`
    )
      .then((data) => data.json())
      .then((json) => {
        this.setState({ latest: json.items });
      });
  };

  render = () => {
    return (
      <>
        <Header onSearch={this.onSearch} />
        <div className="titleList">
          <div className="title">
            {this.state.latest.length > 0 && <h1>Videos</h1>}
            <div className="titles-wrapper">
              {this.state.latest.map((video) => (
                <Video key={video.id.videoId} video={video} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default App;
