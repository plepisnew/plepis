export const objectKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;

export const objectEntries = Object.entries as <T extends object>(
  obj: T
) => [keyof T, T[keyof T]];
