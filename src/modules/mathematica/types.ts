// [x] TODO: parameterize Operator by making its output a tuple with types T1, T2, ..., Tn (vector fns)
// [ ] TODO: make symbol reusable in representationFunction
// [ ] TODO: custom calculation for astronomic and nanoscopic numbers (JS fails with NaN and 0 and infinity)
// [x] TODO: make input arrays fixed length l=inputCount (Array<number>(inputCount))

// prettier-ignore
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;
// prettier-ignore
export type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;

export type R<N extends number = 1> = Tuple<number, N>;

export type S<N extends number = 1> = Tuple<string, N>;

export type E<N extends number = 1> = Tuple<Expression, N>;

/**
 * Operator model. Input and output sets are subset of R. Other operator type required for non-R mappings (i.e. from sets to fields)
 */
export type Operator<I extends number, O extends number> = {
  /**
   * Conventional name of the operator
   */
  name: string;
  /**
   * Conventional symbol (representation) of the operator
   */
  symbol: string;
  /**
   * Aliases or other identifiers of the operator. Used for accessibility
   */
  aliases: string[];
  /**
   * Number of inputs the operator maps to an output
   */
  inputCount: number;
  //   /**
  //    * Number of outputs the operator maps to from the input
  //    */
  //   outputCount: O;
  /**
   * Map from input strings to output string. Used for representing expressions with the given operator e.g. `representationFunction(['a', '5']) // "a + 5"`
   */
  representationFunction: (inputs: Tuple<string, I>) => Tuple<string, O>;
  /**
   * Map from input numbers (values) to output number (value). Used for calculating expressions with the given operator e.g. `calculationFunction([13, 37]) // 50`
   */
  calculationFunction: (inputs: Tuple<number, I>) => Tuple<number, O>;
  //   /**
  //    * Map from input expressions to output expression. Used for creating new expression from input expressions
  //    */
  //   expressionFunction: (inputs: Tuple<Expression, I>) => Tuple<Expression, O>;
};

// TODO: create generic operator (think vector addition, dot product and cross multi; set cardinality)
// export type GenericOperator<InputSet, OutputSet> = {
//   /**
//    * Conventional name of the operator
//    */
//   name: string;
//   /**
//    * Conventional symbol (representation) of the operator
//    */
//   symbol: string;
//   /**
//    * Aliases or other identifiers of the operator
//    */
//   aliases: string[];
//   /**
//    * Number of inputs the operator maps to an output. Used for accessibility
//    */
//   inputCount: number;
//   /**
//    * Map from input strings to output string. Used for representing expressions with the given operator e.g. `representationFunction(['a', '5']) // "a + 5"`
//    */
//   representationFunction: (inputs: InputSet) => OutputSet;
//   /**
//    * Map from input numbers (values) to output number (value). Used for calculating expressions with the given operator e.g. `calculationFunction([13, 37]) // 50`
//    */
//   calculationFunction: (inputs: InputSet) => OutputSet;
//   /**
//    * Map from input expressions to output expression. Used for creating new expression from input expressions
//    */
//   expressionFunction?: (
//     inputs: Expression<Operator<I, O>>[]
//   ) => Expression<Operator<I, O>>;
// };

export type Expression<OperatorType = any> = {
  /**
   * Children expressions of the current expression, which can be
   */
  children: (Expression<any> | Variable)[];
  /**
   * Root operator of the expression
   */
  operator: OperatorType;
  /**
   * Numerical value of the expression (or undefined if indefinite)
   */
  value: number | undefined;
  /**
   * Traverses syntax tree and replaces all variables that match `symbol` with `value`. If `f(x,y)=x+y`, `plugin('x', 2)` is the semantic equivalent of `f(2,y)`. Does not mutate `this`, returns new expression instead.
   * @param symbol string representation of the variable to be replaced or plugged in for
   * @param value numerical value at which to evaluate replaced or plugged in variables
   * @returns resulting expression
   */
  plugin?: (symbol: string, value: number) => Expression<OperatorType>;
  /**
   * Traverses syntax tree and replaces all variables that match `symbol` with `value`. If `f(x,y)=x+y`, `plugin('x', 2)` is the semantic equivalent of `f(2,y)`. Mutates `this` and returns it.
   * @param symbol string representation of the variable to be replaced or plugged in for
   * @param value numerical value at which to evaluate replaced or plugged in variables
   * @returns resulting expression
   */
  pluginMutate?: (symbol: string, value: number) => Expression<OperatorType>;
  /**
   * Traverses syntax tree and attempts to assign a value to each child expression if the composed expressions have definite values. `evaluate()` is the semantic equivalent of pressing the `=` button on a calculator. Does not mutate `this`, returns new expression instead.
   * @returns copy `this`
   */
  evaluate?: () => Expression<OperatorType>;
  /**
   * Traverses syntax tree and attempts to assign a value to each child expression if the composed expressions have definite values. `evaluateMutate()` is the semantic equivalent of pressing the `=` button on a calculator. Mutates `this` and returns it.
   * @returns `this`
   */
  evaluateMutate?: () => Expression<OperatorType>;
  /**
   * Traverses syntax tree and attempts to assign a value to each child expression if the composed expressions have definite values. `evaluateNumber()` is the semantic equivalent of pressing the `=` button on a calculator and saving the resulting number. Does not mutate `this`, returns resulting number (or undefined if answer is indefinite).
   * @returns `this.value`
   */
  evaluateNumber?: () => number | undefined;
  /**
   * Traverses syntax tree and attempts to assign a value to each child expression if the composed expressions have definite values. `evaluateNumberMutate()` is the semantic equivalent of pressing the `=` button on a calculator and saving the resulting number. Mutates `this` and returns resulting number (or undefined if answer is indefinite).
   * @returns `this.value`
   */
  evaluateNumberMutate?: () => number | undefined;
};

export type Variable = {
  symbol: string;
  value: number | undefined;
};
