import type { Expression, Operator, Variable } from './types';
import { stringToExpression, stringToHTML } from './handler';

type MathematicaContext = {
  stringToExpression: (input: string) => Expression<any>;
  stringToHTML: (input: string) => string;
};

const mathematica: MathematicaContext = {
  stringToExpression,
  stringToHTML
};

export { Expression, Operator, Variable };
export default mathematica;
