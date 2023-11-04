import { headerHeight } from "@/components/adhoc/HeaderLayout";
import { UseCanvas, useCanvas } from "@/hooks/useCanvas";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useBubbles } from "./useBubbles";
import { useAudioPlayer } from "./AudioPlayer";
import { useCallback, useRef } from "react";

const TOTAL_FRAMES = 1800;

export const HomePage: React.FC = () => {
  const frameRef = useRef<number>(0);
  const { getBubbles, drawBubbles } = useBubbles({
    count: 400,
    frames: TOTAL_FRAMES,
  });
  const { AudioPlayer, playing } = useAudioPlayer({
    frameRef,
    frames: TOTAL_FRAMES,
  });

  const animate: Parameters<UseCanvas>[0]["animate"] = useCallback(
    ({ ctx }) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const bubbles = getBubbles(frameRef.current, TOTAL_FRAMES);
      drawBubbles({ bubbles, ctx });

      if (playing) frameRef.current!++;
    },
    [playing, getBubbles, drawBubbles]
  );

  const { width, height } = useWindowSize();
  const { Canvas } = useCanvas({
    width,
    height: height - headerHeight,
    animate,
    clearBetweenFrames: false,
    canvasProps: {
      style: { position: "absolute", top: headerHeight, left: 0 },
    },
  });

  return (
    <div>
      {Canvas}
      {AudioPlayer}
    </div>
  );
};
