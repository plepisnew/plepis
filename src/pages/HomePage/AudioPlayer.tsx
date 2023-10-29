import { cn } from "@/utils/cn";
import powerpuff from "@/assets/images/powerpuff.webp";
import {
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from "react-icons/fa";

export type UseAudioPlayer = (options: {
  frameRef: MutableRefObject<number>;
  frames: number;
  fps?: number;
}) => {
  AudioPlayer: ReactNode;
  playing: boolean;
};

export const useAudioPlayer: UseAudioPlayer = ({
  frameRef,
  frames,
  fps = 60,
}) => {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(true);
  const mouseDownRef = useRef<boolean>(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newFrame = frameRef.current;
      if (newFrame >= frames) {
        setFrame(frames);
        return setPlaying(false);
      }
      setFrame(frameRef.current);
    }, 1000 / fps);

    return () => clearInterval(intervalId);
  }, [frameRef, frames, fps]);

  const currentSeconds = frame / fps;
  const endSeconds = frames / fps;

  const secondsToTimestamp = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);

    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
  };

  const handleClickPlay: MouseEventHandler = () => {
    if (frame === frames) {
      setFramesFromRatio(0);
    }
    setPlaying(true);
  };

  const handleClickPause: MouseEventHandler = () => {
    setPlaying(false);
  };

  const handleClickFastForward: MouseEventHandler = () => {
    setFramesFromRatio(1);
  };

  const handleClickFastBackward: MouseEventHandler = () => {
    setFramesFromRatio(0);
  };

  const handleMouseDownProgressBar: MouseEventHandler = (e) => {
    mouseDownRef.current = true;
    setFramesFromEvent(e);
  };

  const handleMouseUpProgressBar: MouseEventHandler = () => {
    mouseDownRef.current = false;
  };

  const handleMouseMoveProgressBar: MouseEventHandler = (e) => {
    if (mouseDownRef.current) {
      setFramesFromEvent(e);
    }
  };

  const handleMouseLeaveProgressBar: MouseEventHandler = () => {
    mouseDownRef.current = false;
  };

  const setFramesFromEvent: MouseEventHandler = (e) => {
    const targetRect = progressBarRef.current!.getBoundingClientRect();
    const ratio = (e.clientX - targetRect.x) / targetRect.width;
    console.log(targetRect.width);
    setFramesFromRatio(ratio);
  };

  const setFramesFromRatio = (ratio: number) => {
    frameRef.current = Math.floor(frames * ratio);
  };

  const AudioPlayer = (
    <div
      className={cn(
        "fixed bottom-5 left-1/2 -translate-x-1/2 p-2 flex gap-2 w-[500px]",
        "bg-primary-darker rounded-2xl border border-primary-boundary"
      )}
    >
      <img src={powerpuff} className="w-16 rounded-xl aspect-square" />
      <div className="flex flex-col grow gap-1">
        <h1>
          Playing{" "}
          <span className="font-semibold">Useless Bubble animation</span>{" "}
        </h1>
        <div className="flex gap-1 items-center">
          <span className="basis-[30px]">
            {secondsToTimestamp(currentSeconds)}
          </span>

          <div
            onMouseDown={handleMouseDownProgressBar}
            onMouseUp={handleMouseUpProgressBar}
            onMouseMove={handleMouseMoveProgressBar}
            onMouseLeave={handleMouseLeaveProgressBar}
            className="relative flex-grow cursor-pointer h-[20px]"
            ref={progressBarRef}
          >
            <div
              className="top-1/2 -translate-y-1/2 absolute h-[3px] rounded-full bg-primary-foreground/20"
              style={{ width: "100%" }}
            />
            <div
              className="top-1/2 -translate-y-1/2 absolute h-[3px] rounded-full bg-primary-foreground"
              style={{ width: `${(100 * frame) / frames}%` }}
            />
          </div>

          <span className="basis-[30px]">{secondsToTimestamp(endSeconds)}</span>
        </div>
        <div className="mx-auto flex gap-2 items-center">
          <FaFastBackward
            className="cursor-pointer"
            onClick={handleClickFastBackward}
          />
          {playing ? (
            <FaPause className="cursor-pointer" onClick={handleClickPause} />
          ) : (
            <FaPlay className="cursor-pointer" onClick={handleClickPlay} />
          )}
          <FaFastForward
            className="cursor-pointer"
            onClick={handleClickFastForward}
          />
        </div>
      </div>
    </div>
  );

  return { AudioPlayer, playing };
};
