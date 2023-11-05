import { Dispatch, SetStateAction } from "react";

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

export type PropsWithClassName = {
  className?: string;
};

export type Setter<T> = Dispatch<SetStateAction<T>>;

export type KeysMatching<T extends object, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];
