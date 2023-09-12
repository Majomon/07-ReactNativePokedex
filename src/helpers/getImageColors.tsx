import {getPalette} from 'react-native-palette-picker';

export const getImageColors = async (uri: string) => {
  const res = await getPalette(uri, {
    fallback: '#ff0000',
    fallbackTextColor: '#ffffff',
  });

  let dominant = res.dominant;

  return {dominant};
};
