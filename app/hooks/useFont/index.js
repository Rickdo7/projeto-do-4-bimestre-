import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function useBebasFont() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Bebas: require('../../assets/fonts/BebasNeue.ttf'),
      });
      setLoaded(true);
    }

    loadFont();
  }, []);

  return loaded;
}