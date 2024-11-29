import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

// Function to format time into MM:SS:SSS
const formatTime = (frames: number, fps: number): string => {
  const totalSeconds = Math.floor(frames / fps);
  const milliseconds = Math.floor(((frames % fps) / fps) * 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}:${String(milliseconds).padStart(3, "0")}`;
};

export const Timer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate formatted time with milliseconds
  const formattedTime = useMemo(() => formatTime(frame, fps), [frame, fps]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        color: "red", // Set text color to red
        fontSize: "100px",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)", // Add shadow effect
      }}
    >
      {formattedTime}
    </div>
  );
};
