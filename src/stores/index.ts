import create from 'zustand';

type store = {
  test: number;
}

export const useStore = create<store>(set => ({
  test: 0
}));