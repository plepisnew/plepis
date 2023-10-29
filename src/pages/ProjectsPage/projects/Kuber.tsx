import { Italic } from "@/components/aux/Italic";
import { Project } from "../data/projects";
import { technologies } from "../data/technologies";

import kuberImage from "@/assets/images/projects/kuber/kuber_old.png";
import { Code } from "@/components/aux/Code";

const Kuber: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <h1 className="text-xl font-medium border-b border-b-primary-boundary pb-2">
        Deliverables
      </h1>
      <p>
        This one is my personal favorite. After watching Code Bullet's{" "}
        <a target="_blank" className="underline">
          "AI" solve Rubiks cubes
        </a>{" "}
        (check out Code Bullet, he's amazing), I told myself that if he can do
        it, so can I, and got to coding, unaware of the nightmares about to
        occur.
      </p>
      <p>The main deliverables are:</p>
      <ul className="list-disc pl-4">
        <li>
          Simulate the behavior of a NxN Rubiks cube and render it to the
          screen;
        </li>
        <li>
          Provide users with a simple interface for manually applying
          moves/algorithms to the cube;
        </li>
        <li>
          And finally, <Italic>*sigh*</Italic>, create an algorithm that would
          automatically solve the cube.
        </li>
      </ul>
      <h1 className="text-xl font-medium border-b border-b-primary-boundary pb-2">
        What went wrong?
      </h1>
      <p>
        When you work on a construction, if the foundation is weak, everything
        will collapse. In my case, I wanted to build a castle, but the
        foundation was made out of lego's. I dove right into building the
        project without properly understanding how <code>THREE.js</code> works
        and ended up making a subpar cube renderer and duct-taped all the
        problems I had with hacky solutions.
      </p>
      <p>
        In particular, I wanted to turn the sides of the cube in a smooth
        fashion (so that it's pleasant to look at). For this, I made cube
        turning an asynchronous operation, which would increment the rotation of
        the cube in very small angles (interpolation). The problem is that now,
        the number of rotations I can execute per second is capped, meaning the
        idea of an extremely fast solver which could take care of thousands of
        7x7 cubes every second, was gone.
      </p>
      <p>
        Another problem is the way I modeled the cube, namely as a 3x3 matrix of
        poorly chosen objects:
      </p>
      <Code>
        class MatrixEntry &#123; <br />
        &emsp;constructor(identifier, colorString, mesh) &#123; <br />
        &emsp;&emsp;this.identifier = identifier;
        <br />
        &emsp;&emsp;this.colorString = colorString;
        <br />
        &emsp;&emsp;this.mesh = mesh;
        <br />
        &emsp;&emsp;this.isCorner = false;
        <br />
        &emsp;&emsp;this.isEdge = false;
        <br />
        &emsp;&emsp;this.isCenter = false;
        <br />
        &emsp;&emsp;switch(this.colorString.split(' ').length) &#123; <br />
        &emsp;&emsp;&emsp;case 2:
        <br />
        &emsp;&emsp;&emsp;&emsp;this.isCenter = true; <br />
        &emsp;&emsp;&emsp;&emsp;break; <br />
        &emsp;&emsp;&emsp;case 3:
        <br />
        &emsp;&emsp;&emsp;&emsp;this.isEdge = true; <br />
        &emsp;&emsp;&emsp;&emsp;break; <br />
        &emsp;&emsp;&emsp;case 4:
        <br />
        &emsp;&emsp;&emsp;&emsp;this.isCorner = true; <br />
        &emsp;&emsp;&emsp;&emsp;break; <br />
        &emsp;&emsp;&#65373; <br />
        &emsp;&#65373; <br />
        &#65373; <br />
      </Code>
      <p>
        Yeah... I'm not entirely sure what I'm looking at here. In any case,
        such a complicated model made it very difficult to teach the algorithm
        "how to see the cube", which is why I only got to the 3x3 solver
        implementation.
      </p>
    </div>
  );
};

export const kuber: Project = {
  title: "Kuber",
  subtitle: "Rubiks Cube Solver",
  imageSrc: kuberImage,
  technologies: [
    technologies.javascript,
    technologies.threejs,
    technologies.linearalgebra,
    technologies.handlebars,
  ],
  Description: <Kuber />,
  url: "/kuber.html",
  sourceUrl:
    "https://github.com/plepisnew/learn-js/blob/main/public/js/rubiks.js",
};
