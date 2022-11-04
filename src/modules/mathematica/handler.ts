import Operators from './operators';
import { Expression, Variable, Operator } from './types';
// a+b^(x-2)/3

const isExpression = (item: Expression | Variable): item is Expression => {
  return (item as Expression).children !== undefined;
};

const utilities = <OperatorType extends Operator>(
  operator: OperatorType,
  exp: Expression,
  val1: Expression | Variable,
  val2: Expression | Variable
) => ({
  plugin: (symbol: string, value: number) => {
    isExpression(val1) ? val1.plugin(symbol, value) : (val1.value = value);
    isExpression(val2) ? val2.plugin(symbol, value) : (val2.value = value);
    return exp;
  },
  evaluate: () => {
    isExpression(val1) ? val1.evaluate() : null;
    isExpression(val2) ? val2.evaluate() : null;
    exp.value =
      val1.value && val2.value
        ? operator.calculationFunction([val1.value, val2.value])[0]
        : undefined;
    return exp;
  },
  evaluateNumber: () => {
    exp.evaluate();
    return exp.value;
  }
});

const add = (val1: Expression | Variable, val2: Expression | Variable): Expression => {
  const operator = Operators.Addition;
  const exp: Expression = {
    children: [val1, val2],
    operator,
    value: undefined
  };
  return exp;
};

// step 1:

export const stringToExpression = (input: string): Expression => {
  const x: Variable = {
    symbol: 'x',
    value: undefined
  };

  const five: Variable = {
    symbol: '5',
    value: 5
  };

  //   const expression: Expression<any> = {
  //     children: [x, five],
  //     operator: Operators.Addition,
  //     value: undefined,
  //     plugin() {},
  //   };
  return expression;
};

export const stringToHTML = (input: string): string => {
  return '';
};
