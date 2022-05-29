import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typooverride';
import overrides from './overrides';

const theme = createTheme({
  palette,
  typography,
  overrides,
});

export default theme;
