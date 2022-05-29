import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import withStyles from '@mui/styles/withStyles';

export const DrawerAccordion = withStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

export const DrawerAccordionSummary = withStyles({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
    marginBottom: 0,
    minHeight: 0,
    '&$expanded': {
      minHeight: 0,
    },
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
  },
  expandIcon: {
    padding: 10.74,
  },
  expanded: {},
})(MuiAccordionSummary);

export const DrawerAccordionDetails = withStyles(() => ({
  root: {
    flexDirection: 'column',
    padding: 0,
  },
}))(MuiAccordionDetails);
