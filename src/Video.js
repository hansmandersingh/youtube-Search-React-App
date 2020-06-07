import React from "react";

export default function Video(props) {
  return (
    <>
      <div className="movie">
        <img style={{height: 359}} src={props.video.snippet.thumbnails.high.url} alt="Movie poster" />
        <div className="overlay">
          <div className="title">{props.video.snippet.title}</div>
          <div className="rating">{props.video.snippet.channelTitle}</div>
          <div className="plot">{props.video.snippet.description}</div>
        </div>
      </div>
    </>
  );
}
