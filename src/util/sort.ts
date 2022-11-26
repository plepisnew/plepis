export const isSorted = (arr: number[]) => {
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < prev) return false;
    prev = arr[i];
  }
  return true;
};

export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
