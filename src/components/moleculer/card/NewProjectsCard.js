import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Typography, Avatar, colors } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpenOutlined';

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
    backgroundImage: gradients.blue,
    height: 48,
    width: 48,
  },
}));

function NewProjectsCard(props) {
  const { ...rest } = props;

  const classes = useStyles();

  const data = {
    value: '12',
    difference: '-10%',
  };

  return (
    <Card {...rest} className={classes.root}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          New projects
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{data.value}</Typography>
          <Label
            className={classes.label}
            color={colors.red[600]}
            variant="outlined"
          >
            {data.difference}
          </Label>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <FolderOpenIcon />
      </Avatar>
    </Card>
  );
}

export default NewProjectsCard;
