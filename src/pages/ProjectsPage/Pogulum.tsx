import { Project } from "./projects";
import { Italic } from "@/components/aux/Italic";
import { technologies } from "./technologies";
import pogulumImage from "@/assets/images/projects/pogulum/logo.png";
import pogulumJavaImage from "@/assets/images/projects/pogulum/pogulum_java.png";
import pogulumAspnetImage from "@/assets/images/projects/pogulum/pogulum_aspnet.png";
import { Bold } from "@/components/aux/Bold";
import React, { useState } from "react";
import { Code } from "@/components/aux/Code";

const PogulumDescription: React.FC = () => {
  const noParamsResponse = {
    data: [],
    error: "Bad Request",
    message: "The id or game_id or broadcaster_id query parameter is required.",
    status: 400,
  };

  const gameResponse = {
    data: [
      {
        box_art_url:
          "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-{width}x{height}.jpg",
        id: "27471",
        igdb_id: "121",
        name: "Minecraft",
      },
    ],
  };

  const clipResponse = {
    data: [
      {
        broadcaster_id: "22484632",
        broadcaster_name: "forsen",
        created_at: "2023-10-11T19:12:01Z",
        creator_id: "52349693",
        creator_name: "Hoaw",
        duration: 28,
        embed_url:
          "https://clips.twitch.tv/embed?clip=DeterminedHeartlessMarrowFutureMan-FV087sFVlyekwSio",
        game_id: "27471",
        id: "DeterminedHeartlessMarrowFutureMan-FV087sFVlyekwSio",
        is_featured: false,
        language: "en",
        thumbnail_url:
          "https://clips-media-assets2.twitch.tv/_is9sRVdPO7BVZcnpMEoqA/41227911736-offset-11360-preview-480x272.jpg",
        title: "Forsen beats xQc's record by 1 second 16:37",
        url: "https://clips.twitch.tv/DeterminedHeartlessMarrowFutureMan-FV087sFVlyekwSio",
        video_id: "1948325694",
        view_count: 228918,
        vod_offset: 11336,
      },
      "...",
    ],
    pagination: {
      cursor: "eyJiIjpudWxsLCJhIjp7IkN1cnNvciI6Ik1qQT0ifX0",
    },
  };

  const [stage, setStage] = useState(0);

  return (
    <div className="flex flex-col gap-3 pb-3">
      <p>
        The main deliverables of <Bold>Pogulum</Bold> are:
      </p>
      <ul className="list-disc pl-4 flex flex-col gap-4">
        <li>
          To provide users with a thin wrapper around the Twitch API, which
          normally allows querying for clips based on either a user{" "}
          <Italic>OR</Italic> a game/category. It also doesn't help that
          parameters are <Italic>required</Italic> to be internal IDs (thus an
          API call to determine the ID first is necessary). With Pogulum, users
          can find and filter clips based on human-readable parameters and
          auxiliary ones like clip title and creation date range. For anyone
          interested, here's a sample Twitch API call
        </li>
        <div className="py-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <Code className="flex-grow">$ twitch api get clips</Code>
            <Code onClick={() => (stage > 0 ? setStage(0) : setStage(1))}>
              {stage > 0 ? "Clear" : "Send"}
            </Code>
          </div>
          {stage > 0 && (
            <React.Fragment>
              <Code>{JSON.stringify(noParamsResponse, null, 2)}</Code>
              <p>
                Looks like we need to supply a <code>broadcaster_id</code> or{" "}
                <code>game_id</code>. OK, let's first find a user.
              </p>
              <div className="flex gap-2">
                <Code className="flex-grow">
                  $ twitch api get games -q name=Minecraft
                </Code>
                <Code onClick={() => (stage > 1 ? setStage(1) : setStage(2))}>
                  {stage > 1 ? "Clear" : "Send"}
                </Code>
              </div>
            </React.Fragment>
          )}
          {stage > 1 && (
            <React.Fragment>
              <Code>{JSON.stringify(gameResponse, null, 2)}</Code>
              <p>
                Great! Now, let's extract the id (
                <code>response.data[0].id</code>) and see if we can get some
                clips with it.
              </p>
              <div className="flex gap-2">
                <Code className="flex-grow">
                  $ twitch api get clips -q game_id=27471
                </Code>
                <Code onClick={() => (stage > 2 ? setStage(2) : setStage(3))}>
                  {stage > 2 ? "Clear" : "Send"}
                </Code>
              </div>
            </React.Fragment>
          )}
          {stage > 2 && (
            <React.Fragment>
              <Code>{JSON.stringify(clipResponse, null, 2)}</Code>
              <p>
                Awesome! Now we have some clips. But notice that we had to do
                the additional step of determining the internal ID of the game.
                In addition, we couldn't specify both a game{" "}
                <Italic>and</Italic> a user. For that, we would have to query
                against the first parameter, and manually filter results based
                on the second parameter (this is <Italic>very</Italic> bad)
              </p>
            </React.Fragment>
          )}
        </div>
        <li>
          When the desired clips have been found, they can then be formatted,
          with the help of FFmpeg, as necessary (cut, resized, adding audio) to
          then yield a single video file...
        </li>
        <li>
          ... Which can then be either downloaded or uploaded to selected social
          media (like YouTube or TikTok) using OAuth 2.0
        </li>
        <li>
          Another core feature is to allow users to star clips, so that they can
          be archived and seen whenever necessary (for proper persistence, users
          are required to authenticate with Twitch via Code Flow).
        </li>
      </ul>
      <p>
        The spirit of Pogulum was born during a bootcamp, at the end of which
        participants were required to deliver a web app. At this point I had
        never used HTML/CSS/JS, and thus required to deliver the project while
        also self-teaching the technologies. Since I was very new to programming
        (thus had weak problem solving, information finding and technical
        depth), it is understandable why the project <Italic>flopped</Italic> :(
      </p>
      <div className="flex gap-4">
        <img src={pogulumJavaImage} className="rounded-md h-[240px]" />
        <p className="italic">
          The design looks pretty inconsistent and janky. The only functionality
          I was able to deliver was the retrieval of clips and even then the
          codebase was incoherent and completely unmaintainable (if you feel
          like cringing, the source is{" "}
          <a
            href="https://github.com/plepisnew/pogulum_java"
            target="_blank"
            className="underline"
          >
            here
          </a>
          ). The project was a huge failure, but I took away lots of learning
          outcomes.
        </p>
      </div>
      <p>
        Then, a few months later, when I had matured quite a bit as a developer,
        I had to deliver another web app, this time as part of a trainee-ship. I
        wanted to redeem myself, so I re-made Pogulum (this time with an ASP.NET
        backend)
      </p>
      <div className="flex gap-4">
        <img src={pogulumAspnetImage} className="rounded-md h-[240px]" />
        <p className="italic">
          This time, I was able to get much farther. Clips could still be
          fetched, and this time around they could even be combined together
          using FFmpeg. However, the design was still very awkward, the backend
          had tons of security vulnerabilities, and I still couldn't manage to
          upload the combined clips. The source can be found{" "}
          <a
            href="https://github.com/plepisnew/pogulum_aspnet"
            target="_blank"
            className="underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export const pogulum: Project = {
  title: "Pogulum",
  subtitle: "Twitch Clip Scraper",
  Description: <PogulumDescription />,
  sourceUrl: "https://github.com/plepisnew/pogulum_next",
  url: "https://www.pogulum.com",
  imageSrc: pogulumImage,
  technologies: [
    technologies.typescript,
    technologies.react,
    technologies.next,
    technologies.nextui,
    technologies.tailwind,
    technologies.i18n,
    technologies.prisma,
    technologies.trpc,
    technologies.planetscale,
    technologies.twitch,
    technologies.openid,
  ],
};
