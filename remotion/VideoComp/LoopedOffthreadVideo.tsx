// import { Loop, OffthreadVideo, useVideoConfig } from "remotion";

// export const LoopedOffthreadVideo: React.FC<{
//   durationInSeconds: number | null;
//   src: string;
// }> = ({ durationInSeconds, src }) => {
//   const { fps } = useVideoConfig();

//   if (durationInSeconds === null) {
//     return null;
//   }

//   return (
//     <Loop durationInFrames={Math.floor(fps * durationInSeconds)}>
//       <OffthreadVideo src={src} />
//     </Loop>
//   );
// };

import React, { useEffect, useState } from "react";

import { getVideoMetadata } from "@remotion/media-utils";
import { Loop, OffthreadVideo, useVideoConfig } from "remotion";
import { OffthreadVideoProps } from "remotion/dist/cjs/video/props";

const LoopedOffthreadVideo: React.FC<OffthreadVideoProps> = (props) => {
  const { fps } = useVideoConfig();
  const [durationInFrames, setDurationInFrames] = useState(0);

  useEffect(() => {
    (async () => {
      const { durationInSeconds } = await getVideoMetadata(props.src);
      if (props.startFrom !== undefined || props.endAt !== undefined) {
        const calculatedDurationInFrames =
          (props.endAt || durationInSeconds * fps) - (props.startFrom || 0);
        setDurationInFrames(Math.floor(calculatedDurationInFrames));
        return;
      }
      setDurationInFrames(Math.floor(props.endAt || durationInSeconds * fps));
    })();
  }, [fps, props.endAt, props.src, props.startFrom]);

  return (
    <>
      {durationInFrames && (
        <Loop durationInFrames={durationInFrames}>
          <OffthreadVideo
            {...props}
            delayRenderTimeoutInMilliseconds={300 * 1000}
            delayRenderRetries={5}
          />
        </Loop>
      )}
    </>
  );
};

export default LoopedOffthreadVideo;
