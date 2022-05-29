import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Divider,
  colors,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

function NotificationsCard(props) {
  const { ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={classes.root}>
      <CardHeader title="Notifications" />
      <Divider />
      <CardContent>
        <form>
          <Grid container spacing={6} wrap="wrap">
            <Grid className={classes.item} item md={4} sm={6} xs={12}>
              <Typography gutterBottom variant="h6">
                System
              </Typography>
              <Typography gutterBottom variant="body2">
                You will recieve emails in your business email address
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Email alerts"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Push Notifications"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Text message"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label={
                  <>
                    <Typography variant="body1">Phone calls</Typography>
                    <Typography variant="caption">
                      Short voice phone updating you
                    </Typography>
                  </>
                }
              />
            </Grid>
            <Grid className={classes.item} item md={4} sm={6} xs={12}>
              <Typography gutterBottom variant="h6">
                Chat App
              </Typography>
              <Typography gutterBottom variant="body2">
                You will recieve emails in your business email address
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Email"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Push notifications"
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button className={classes.saveButton} variant="contained">
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
}

export default NotificationsCard;
