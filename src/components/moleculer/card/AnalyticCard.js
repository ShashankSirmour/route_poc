import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56,
  },
}));

function AnalyticCard({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...rest}>
      <CardContent>
        <Grid container justifyContent="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL PROFIT
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $23,200
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

AnalyticCard.defaultProps = {
  className: {},
};

AnalyticCard.propTypes = {
  className: PropTypes.string,
};

export default AnalyticCard;
