import { Operator, R, S, E } from "./types";

/**
 * f: R2 -> R
 */

const Addition: Operator<2, 1> = {
  name: "addition",
  symbol: "+",
  aliases: ["add", "plus", "sum"],
  inputCount: 2,
  representationFunction: (inputs: S<2>) => [`${inputs[0]}+${inputs[1]}`],
  calculationFunction: (inputs: R<2>) => [inputs[0] + inputs[1]],
};

const Subtraction: Operator<2, 1> = {
  name: "subtraction",
  symbol: "-",
  aliases: ["sub", "subtract", "minus"],
  inputCount: 2,
  representationFunction: (inputs: S<2>) => [`${inputs[0]}-${inputs[1]}`],
  calculationFunction: (inputs: R<2>) => [inputs[0] - inputs[1]],
};

const Multiplication: Operator<2, 1> = {
  name: "multiplication",
  symbol: "*",
  aliases: ["multi", "times"],
  inputCount: 2,
  representationFunction: (inputs: S<2>) => [`${inputs[0]}*${inputs[1]}`],
  calculationFunction: (inputs: R<2>) => [inputs[0] * inputs[1]],
};

const Division: Operator<2, 1> = {
  name: "division",
  symbol: "/",
  aliases: ["divide", "on", "ratio"],
  inputCount: 2,
  representationFunction: (inputs: S<2>) => [`${inputs[0]}/${inputs[1]}`],
  calculationFunction: (inputs: R<2>) => [inputs[0] / inputs[1]],
};

const Exponentiation: Operator<2, 1> = {
  name: "exponentiation",
  symbol: "^",
  aliases: ["exp", "exponent", "power"],
  inputCount: 2,
  representationFunction: (inputs: S<2>) => [`${inputs[0]}^${inputs[1]}`],
  calculationFunction: (inputs: R<2>) => [Math.pow(inputs[0], inputs[1])],
};

const Hypotenuse: Operator<2, 1> = {
  name: "hypotenuse",
  symbol: "hyp",
  aliases: ["pythagorean", "distance"],
  inputCount: 2,
  representationFunction: (inputs: S<2>) => [`hyp(${inputs[0]}, ${inputs[1]})`],
  calculationFunction: (inputs: R<2>) => [Math.hypot(inputs[0], inputs[1])],
};

/**
 * f: R -> R
 */

const Sine: Operator<1, 1> = {
  name: "sine",
  symbol: "sin",
  aliases: ["sinus"],
  inputCount: 1,
  representationFunction: (inputs: S) => [`sin(${inputs[0]})`],
  calculationFunction: (inputs: R) => [Math.sin(inputs[0])],
};

const Cosine: Operator<1, 1> = {
  name: "cosine",
  symbol: "cos",
  aliases: ["cosinus"],
  inputCount: 1,
  representationFunction: (inputs: S) => [`cos(${inputs[0]})`],
  calculationFunction: (inputs: R) => [Math.cos(inputs[0])],
};

const Tangent: Operator<1, 1> = {
  name: "tangent",
  symbol: "tan",
  aliases: ["tangens"],
  inputCount: 1,
  representationFunction: (inputs: S) => [`tan(${inputs[0]})`],
  calculationFunction: (inputs: R) => [Math.tan(inputs[0])],
};

const Operators = {
  Addition,
  Subtraction,
  Multiplication,
  Division,
  Exponentiation,
  Sine,
  Cosine,
  Tangent,
  Hypotenuse,
};

export default Operators;
