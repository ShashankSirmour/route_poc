import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Typography, Avatar, colors } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import gradients from '@utils/gradients';
import { Label } from '@components/atomic';

const useStyles = makeStyles((theme) => ({
  root: {
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
  label: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48,
  },
}));

function TodaysMoneyCard(props) {
  const { ...rest } = props;

  const classes = useStyles();

  const data = {
    value: '24,000',
    currency: '$',
    difference: '+4.5%',
  };

  return (
    <Card {...rest} className={classes.root}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Todays money
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">
            {data.currency}
            {data.value}
          </Typography>
          <Label
            className={classes.label}
            color={colors.green[600]}
            variant="outlined"
          >
            {data.difference}
          </Label>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <AttachMoneyIcon />
      </Avatar>
    </Card>
  );
}

export default TodaysMoneyCard;
