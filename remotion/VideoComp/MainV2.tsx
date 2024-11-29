import { AbsoluteFill } from "remotion";
// import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import LoopedOffthreadVideoV2 from "./LoopedOffthreadVideoV2";
import { Timer } from "./Timer";
// loadFont();
const containerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundColor: "yellow",
};

const videoStyle: React.CSSProperties = {
  width: "50%", // Adjust to fit half the screen width
  height: "50%", // Adjust to fit half the screen height
  objectFit: "cover",
  position: "absolute",
};

export const MainV2 = () => {
  return (
    <AbsoluteFill style={containerStyle}>
      <LoopedOffthreadVideoV2
        muted={true}
        src="https://dzqkhoe0j5v3w.cloudfront.net/editor-assets/pixabay/2023/10/15/185096-874643413_small.mp4#t=7.8,13"
        style={{ ...videoStyle, top: 0, left: 0 }}
        pauseWhenBuffering={true}
      />
      <LoopedOffthreadVideoV2
        muted={true}
        src="https://dzqkhoe0j5v3w.cloudfront.net/urls/amazon/29a4f0740a6465b6093422e18388ce03c14b62ec6c66e8aa39676b93dd042f7f/assets/video_1.mp4"
        pauseWhenBuffering={true}
        style={{ ...videoStyle, top: 0, right: 0 }}
      />
      <LoopedOffthreadVideoV2
        muted={true}
        src="https://dzqkhoe0j5v3w.cloudfront.net/urls/amazon/29a4f0740a6465b6093422e18388ce03c14b62ec6c66e8aa39676b93dd042f7f/assets/video_2.mp4"
        pauseWhenBuffering={true}
        style={{ ...videoStyle, bottom: 0, left: 0 }}
      />
      <LoopedOffthreadVideoV2
        muted={true}
        src="https://dzqkhoe0j5v3w.cloudfront.net/urls/amazon/95b4999049829a67088c7ad62ac8fad1512f4497484fb663ddef4b86fb1abaac/assets/video_2.mp4"
        pauseWhenBuffering={true}
        style={{ ...videoStyle, bottom: 0, right: 0 }}
      />
      <Timer />
    </AbsoluteFill>
  );
};
