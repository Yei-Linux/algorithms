import { useEffect, useState } from 'react';
import { preffixes } from '../constants';

export const usePreffix = () => {
  const [label, setLabel] = useState('');

  const [preffix, setPreffix] = useState('');
  const [suffix, setSuffix] = useState('');

  useEffect(() => {
    getPreffixSuffix(label);
  }, [label]);

  const updateLabel = (text: string) => setLabel(text);

  const getPreffixSuffix = (label: string) => {
    const found = preffixes
      .sort((a, b) => b.length - a.length)
      .find((item) => {
        const len = item.length;
        const preffixLabel = label.substring(0, len);
        return preffixLabel === item;
      });

    if (!found) {
      setPreffix('');
      setSuffix('');
      return;
    }

    setPreffix(found);
    setSuffix(label.substring(found.length));
  };

  return { preffix, suffix, label, updateLabel };
};
