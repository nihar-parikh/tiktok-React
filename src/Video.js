import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null); //for referencing particular item and manipulate

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      {/* <video className="video__player" src=""></video> */}

      <video
        title="video"
        className="video__player"
        loop //for looping the same video
        ref={videoRef} //giving frame of refernce
        onClick={onVideoPress}
        src={url}
      ></video>

      {/* <VideoFooter /> */}

      <VideoFooter channel={channel} description={description} song={song} />

      {/* <VideoSidebar /> */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
