import { random } from "@/utils/random";
import { useMemo } from "react";

export type Bubble = {
  x: number;
  y: number;
  alpha: number;
  r: number;
};

export type UseBubbles = (options: { count?: number; frames?: number }) => {
  getBubbles: (frame: number, frames: number) => Bubble[];
};

export const useBubbles: UseBubbles = ({ count = 1000, frames = 600 }) => {
  const bubbles = useMemo(() => {
    const bubbles: Bubble[] = [];

    const createBubble = (y: number) => ({
      alpha: random(0.1, 0.4),
      r: random(20, 60),
      x: random(0, window.innerWidth),
      y,
    });

    const bubblesPerFrame = count / frames;

    for (let frame = 0; frame < frames; frame++) {
      const newBubbles = Math.floor(
        bubblesPerFrame * (frame + 1) - bubbles.length
      );

      [...Array(newBubbles).keys()].forEach(() =>
        bubbles.push(createBubble(-frame * 5))
      );
    }

    return bubbles;
  }, [count, frames]);

  const getBubbles = (frame: number, frames: number): Bubble[] =>
    bubbles
      .map(({ alpha, r, x, y }) => ({
        alpha,
        r,
        x,
        y: y + (Math.min(frame, frames) * r) / 30,
      }))
      .filter(({ y, r }) => y + r >= 0 && y - r <= window.innerHeight);

  return { getBubbles };
};

export const drawBubbles = (options: {
  bubbles: Bubble[];
  ctx: CanvasRenderingContext2D;
}) => {
  const { ctx, bubbles } = options;

  ctx.fillStyle = "white";

  for (const bubble of bubbles) {
    ctx.beginPath();
    ctx.arc(bubble.x, window.innerHeight - bubble.y, bubble.r, 0, 2 * Math.PI);

    ctx.globalAlpha = bubble.alpha;
    ctx.fill();
  }
};
