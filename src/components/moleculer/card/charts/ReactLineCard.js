import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@mui/styles';
import { Card, CardHeader, CardContent, Divider } from '@mui/material';

import { GenericMoreButton, ReactLineChart } from '@components/atomic';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {},
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginLeft: theme.spacing(1),
    },
  },
  inner: {
    height: 375,
    minWidth: 500,
  },
}));

function ReactLineCard(props) {
  const { ...rest } = props;

  const classes = useStyles();

  const data = {
    thisWeek: {
      data: [],
      labels: [],
    },
    thisMonth: {
      data: [],
      labels: [],
    },
    thisYear: {
      data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5],
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  };

  return (
    <Card {...rest} className={classes.root}>
      <CardHeader
        action={<GenericMoreButton />}
        title="Performance Over Time"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <ReactLineChart
              data={data.thisYear.data}
              labels={data.thisYear.labels}
            />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
}

export default ReactLineCard;
