export type ArrayMap<TSource, TDestination> = (
  value: TSource,
  index: number,
  array: TSource[]
) => TDestination;

export type ArrayFilter<TSource> = (
  value: TSource,
  index: number,
  array: TSource[]
) => boolean;

export type ArrayForEach<TSource> = (
  value: TSource,
  index: number,
  array: TSource[]
) => void;
