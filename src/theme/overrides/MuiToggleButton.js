import { colors } from '@mui/material';

import palette from '../palette';

export default {
  root: {
    color: palette.icon,
    '&:hover': {
      backgroundColor: colors.grey[100],
    },
    '&$selected': {
      backgroundColor: colors.grey[50],
      color: palette.primary.main,
      '&:hover': {
        backgroundColor: colors.grey[100],
      },
    },
    '&:first-child': {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    },
    '&:last-child': {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    },
  },
};
