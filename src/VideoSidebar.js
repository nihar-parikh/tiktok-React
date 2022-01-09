import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

const VideoSidebar = ({ likes, messages, shares }) => {
  const [liked, setLiked] = useState(false);
  const [number, setNumber] = useState(likes);
  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setNumber(likes);
    } else {
      setLiked(true);
      setNumber(++likes);
    }
  };

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__icons" onClick={handleClick}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        {liked ? <p>{number}</p> : <p>{number}</p>}
      </div>
      <div className="videoSidebar__icons">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__icons">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
