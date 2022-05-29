import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import withStyles from '@mui/styles/withStyles';

export const LessonsAccordion = withStyles({
  root: {
    boxShadow: 'none',
    backgroundColor: '#161d28',
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

export const LessonsAccordionSummary = withStyles({
  root: {
    backgroundColor: '#344156',
    color: '#fff',
    borderBottom: '.2px solid rgba(0,0,0,0.2)',
    minHeight: 50,
    '&:expanded': {
      minHeight: 50,
    },
    '&:hover': {
      backgroundColor: 'rgba(52, 65, 86, 0.8)',
    },
  },
  content: {
    '&:expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const LessonsAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
