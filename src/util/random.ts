/**
 * RANDOM INTEGER
 */

type RandomIntegerOptions = {
  floor: number;
  includeFloor: boolean;
  ceiling: number;
  includeCeiling: boolean;
};

const defaultRandomIntegerOptions: RandomIntegerOptions = {
  floor: 0,
  includeFloor: true,
  ceiling: 100,
  includeCeiling: false
};

export const randomInteger = (options?: Partial<RandomIntegerOptions>): number => {
  const { floor, includeFloor, ceiling, includeCeiling }: RandomIntegerOptions = {
    ...defaultRandomIntegerOptions,
    ...options
  };

  const floorCounter = includeFloor ? 0 : 1;
  const ceilingCounter = includeCeiling ? 1 : 0;
  return (
    Math.floor(Math.random() * (ceiling - floor + ceilingCounter - floorCounter)) +
    floor +
    floorCounter
  );
};

/**
 * RANDOM INTEGERS
 */

type RandomIntegersOptions = {
  count?: number;
  format?: 'csv' | 'arr';
} & RandomIntegerOptions;

const defaultRandomIntegersOptions: RandomIntegersOptions = {
  ...defaultRandomIntegerOptions,
  count: 10,
  format: 'arr'
};

export const randomIntegers = (options?: Partial<RandomIntegersOptions>): string | number[] => {
  const { count, format, ...randomIntegerOptions }: RandomIntegersOptions = {
    ...defaultRandomIntegersOptions,
    ...options
  };

  const randomValues = [...Array(count).keys()].map((_) => randomInteger(randomIntegerOptions));

  return format === 'arr' ? randomValues : randomValues.join(',');
};
// export const randomIntegers = <Format extends string[] | number[] | string>(options?: Partial<RandomIntegersOptions>): Format => {
//   const { count, ...randomIntegerOptions }: RandomIntegersOptions = {
//     ...defaultRandomIntegersOptions,
//     ...options
//   };

//   const randomValues = [...Array(count).keys()].map(_ => randomInteger(randomIntegerOptions));

//   return [] as Format;
// };
