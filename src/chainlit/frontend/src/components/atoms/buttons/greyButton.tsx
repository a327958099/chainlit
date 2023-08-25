import { darkGreyButtonTheme, lightGreyButtonTheme } from 'theme';

import Button, { ButtonProps } from '@mui/material/Button';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { log } from 'console';

export default function GreyButton(props: ButtonProps) {
  const theme = useTheme();
  const greyTheme =
    theme.palette.mode === 'dark' ? darkGreyButtonTheme : lightGreyButtonTheme;
  return (
    <ThemeProvider theme={greyTheme}>
      <Button {...props} />
    </ThemeProvider>
  );
}
