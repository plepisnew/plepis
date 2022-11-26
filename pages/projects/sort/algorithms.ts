import { MutableRefObject } from 'react';

export type Algorithm = {
  name: string;
  sorter: (indices: LowestCompare) => void;
};

type LowestCompare = {
  currentIndex: MutableRefObject<number>;
  comparingIndex: MutableRefObject<number>;
  lowestIndex: MutableRefObject<number>;
  current: number[];
};

const algorithms: Algorithm[] = [
  {
    name: 'Bubble Sort',
    sorter: () => {}
  },
  {
    name: 'Quick Sort',
    sorter: () => {}
  },
  {
    name: 'Merge Sort',
    sorter: () => {}
  },
  {
    name: 'Insertion Sort',
    sorter: () => {}
  },
  {
    name: 'Selection Sort',
    sorter: ({ current, currentIndex, comparingIndex, lowestIndex }: LowestCompare) => {
      while (comparingIndex.current < current.length) {
        const comparingNumber = current[comparingIndex.current];
        const lowestNumber = current[lowestIndex.current];
        if (comparingNumber < lowestNumber) lowestIndex.current = comparingIndex.current;
        comparingIndex.current++;
      }
      const temp = current[currentIndex.current];
      current[currentIndex.current] = current[lowestIndex.current];
      current[lowestIndex.current] = temp;
      currentIndex.current++;
      comparingIndex.current = currentIndex.current + 1;
      lowestIndex.current = currentIndex.current;
    }
  },
  {
    name: 'Slow Selection Sort',
    sorter: ({ current, currentIndex, comparingIndex, lowestIndex }: LowestCompare) => {
      const lowestNumber = current[lowestIndex.current];
      const comparingNumber = current[comparingIndex.current];
      if (comparingNumber <= lowestNumber) lowestIndex.current = comparingIndex.current;
      comparingIndex.current++;
      if (comparingIndex.current === current.length) {
        const temp = current[currentIndex.current];
        console.log(current);
        console.log(
          `Reached end. Replacing current=${temp} at ${currentIndex.current} with lowest=${
            current[lowestIndex.current]
          } at ${lowestIndex.current}`
        );
        current[currentIndex.current] = current[lowestIndex.current];
        current[lowestIndex.current] = temp;
        currentIndex.current++;
        comparingIndex.current = currentIndex.current + 1;
        lowestIndex.current = currentIndex.current; // bless this line <3
      }
    }
  },
  {
    name: 'Heap Sort',
    sorter: () => {}
  },
  {
    name: 'Radix Sort',
    sorter: () => {}
  },
  {
    name: 'Shellsort',
    sorter: () => {}
  },
  {
    name: 'Bogo Sort',
    sorter: () => {}
  }
];

export default algorithms;
