import { createTheme } from '@mui/material/styles';

export const primary = {
    light: '#EDEAFF',
    main: '#8675FF',
    dark: '#6A36BE',
  };
  
export const secondary = {
    light: '#2DE0F2',
    main: '#36B1FF',
    dark: '#383874',
  };

const theme = createTheme({
    palette: {
      primary,
      secondary,
      text: {
        primary: secondary.dark,
      },
    },
    typography: {
      caption: {
        fontSize: '0.65rem',
      },
    },
});

export default theme;
