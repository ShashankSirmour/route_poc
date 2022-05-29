import palette from '../palette';
import typography from '../typooverride';

export default {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${palette.divider}`,
  },
};
