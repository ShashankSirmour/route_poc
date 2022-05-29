import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Card,
  CardContent,
  Typography,
  colors,
  Checkbox,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      flexWrap: 'wrap',
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%',
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      flexBasis: '50%',
    },
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      flexBasis: '50%',
    },
  },
}));

function PaymentCard(props) {
  const { project, ...rest } = props;

  const classes = useStyles();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600],
  };

  return (
    <Card {...rest} className={clsx(classes.root)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Checkbox />
          <Typography variant="h5">{project.title}</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {project.currency}
            {project.price}
          </Typography>
          <Typography variant="body2">Payment price</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{project.members}</Typography>
          <Typography variant="body2">Team members</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project.start_date).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Payment started</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project.end_date).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Payment deadline</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{ color: statusColors[project.status] }}
            variant="h6"
          >
            {project.status}
          </Typography>
          <Typography variant="body2">Payment status</Typography>
        </div>
        <div className={classes.actions}>
          <Button color="primary" size="small" variant="outlined">
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

PaymentCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default PaymentCard;
