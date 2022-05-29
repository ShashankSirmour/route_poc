import makeStyles from '@mui/styles/makeStyles';

export const useTabsStyles = makeStyles(() => ({
  root: {
    width: '100%',
    boxShadow: 'inset 0 -1px 0 0 #E6ECF0',
  },
  indicator: {
    backgroundColor: '#1da1f2',
  },
}));

export const useTabItemStyles = makeStyles(({ breakpoints }) => ({
  root: {
    minHeight: 53,
    minWidth: 80,
    [breakpoints.up('md')]: {
      minWidth: 120,
    },
    // '&:hover': {
    //   backgroundColor: 'rgba(29, 161, 242, 0.1)',
    //   '& $wrapper': {
    //     color: '#1da1f2',
    //   },
    // },
    '&$selected': {
      '& *': {
        color: '#1da1f2',
      },
    },
  },
  selected: {},
  textColorInherit: {
    opacity: 1,
  },
  wrapper: {
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
    color: '#657786',
  },
}));

// ? tabs
// export const useTabsStyles = makeStyles(({ spacing }) => {
//   const tabsBackground = 'linear-gradient(60deg, #ab47bc, #8e24aa)';
//   const indicatorBackground = 'rgba(255, 255, 255, .2)';
//   const borderRadius = spacing(1);
//   return {
//     root: {
//       width: '100%',
//       borderRadius: spacing(1),
//       background: tabsBackground,
//       padding: 10,
//       boxShadow: '0px 3px 15px rgba(34, 35, 58, 0.5)',
//     },
//     indicator: {
//       height: '100%',
//       borderRadius,
//       backgroundColor: indicatorBackground,
//     },
//   };
// });
// export const useTabItemStyles = makeStyles(({ breakpoints, spacing }) => {
//   const tabsGutter = spacing(2);
//   const labelColor = '#ffffff';
//   return {
//     root: {
//       textTransform: 'initial',
//       margin: `0 ${tabsGutter}px`,
//       minWidth: 0,
//       [breakpoints.up('md')]: {
//         minWidth: 0,
//       },
//     },
//     wrapper: {
//       fontWeight: 'normal',
//       letterSpacing: 0.5,
//       color: labelColor,
//     },
//   };
// });
