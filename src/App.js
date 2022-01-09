import React, { useState, useEffect } from "react";
import "./App.css";
import database from "./config";
import Video from "./Video";
//import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    database.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // useEffect(() => {
  //   const videoCol = collection(database, "videos");
  //   console.log("videoCol", videoCol);
  //   const videoSnapshot = getDocs(videoCol);
  //   console.log("videoSnapshot", videoSnapshot);
  //   setVideos(videoSnapshot.docs.map((doc) => doc.data()));
  // }, []);

  return (
    //BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}

        {/* <Video
          url="https://media.istockphoto.com/videos/fountain-in-the-temple-complex-iskcon-of-the-international-society-video-id1153266437"
          channel="krishna"
          description="hare krishna"
          song="hare krishna hare ram"
          likes="111"
          messages="222"
          shares="333"
        />
        <Video
          url="https://media.istockphoto.com/videos/fountain-in-the-temple-complex-iskcon-of-the-international-society-video-id1153266437"
          channel="krishna"
          description="hare krishna"
          song="hare krishna hare ram"
          likes="111"
          messages="222"
          shares="333"
        />
        <Video
          url="https://media.istockphoto.com/videos/fountain-in-the-temple-complex-iskcon-of-the-international-society-video-id1153266437"
          channel="krishna"
          description="hare krishna"
          song="hare krishna hare ram"
          likes="111"
          messages="222"
          shares="333"
        />
        <Video
          url="https://media.istockphoto.com/videos/fountain-in-the-temple-complex-iskcon-of-the-international-society-video-id1153266437"
          channel="krishna"
          description="hare krishna"
          song="hare krishna hare ram"
          likes="111"
          messages="222"
          shares="333"
        /> */}
      </div>
    </div>
  );
}

export default App;
