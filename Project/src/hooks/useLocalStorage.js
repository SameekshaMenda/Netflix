import { useState } from 'react';

export default function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const s = localStorage.getItem(key);
      return s ? JSON.parse(s) : initial;
    } catch (e) {
      return initial;
    }
  });

  const setAndStore = (val) => {
    const value = typeof val === 'function' ? val(state) : val;
    setState(value);
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  };

  return [state, setAndStore];
}
