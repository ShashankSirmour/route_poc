/* eslint-disable no-dupe-keys */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: 14,
    marginBottom: '0.875em',
    marginTop: '0.875em',
    display: 'block',
  },
  noDataText: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: 12,
    display: 'block',
  },
  noDataTextContainer: {
    height: theme.spacing(6),
  },
  content: {
    position: 'relative',
    width: '-moz-available',
    width: '-webkit-fill-available',
    width: 'fill-available',
  },
}));

export default function LabelList({ title, children, noData, noDataText }) {
  const classes = useStyles();

  return (
    <Grid container direction="column" wrap="noWrap">
      <Grid item>
        <Typography className={classes.heading}>{title}</Typography>
      </Grid>
      {noData && (
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          className={classes.noDataTextContainer}
        >
          <Typography className={classes.noDataText}>{noDataText}</Typography>
        </Grid>
      )}
      {!noData && (
        <Grid item className={classes.content}>
          {children}
        </Grid>
      )}
    </Grid>
  );
}

LabelList.defaultProps = {
  title: 'title',
  noData: false,
  noDataText: 'No Data Available',
  children: <div />,
};
LabelList.propTypes = {
  title: PropTypes.string,
  noData: PropTypes.bool,
  noDataText: PropTypes.string,
  children: PropTypes.any,
};
