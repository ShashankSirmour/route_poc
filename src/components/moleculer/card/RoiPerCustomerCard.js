import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Typography, Avatar } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 48,
    width: 48,
  },
}));

function RoiPerCustomerCard(props) {
  const { ...rest } = props;

  const classes = useStyles();

  const data = {
    value: '25.50',
    currency: '$',
  };

  return (
    <Card {...rest} className={classes.root}>
      <div>
        <Typography
          color="inherit"
          component="h3"
          gutterBottom
          variant="overline"
        >
          Roi per customer
        </Typography>
        <div className={classes.details}>
          <Typography color="inherit" variant="h3">
            {data.currency}
            {data.value}
          </Typography>
        </div>
      </div>
      <Avatar className={classes.avatar} color="inherit">
        <AttachMoneyIcon />
      </Avatar>
    </Card>
  );
}

export default RoiPerCustomerCard;
