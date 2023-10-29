import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
