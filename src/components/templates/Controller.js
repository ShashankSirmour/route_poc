import React from 'react';

import {
  ButtonBase,
  Divider,
  Grid,
  IconButton,
  Paper,
  Slider,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PropTypes from 'prop-types';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import makeStyles from '@mui/styles/makeStyles';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useDispatch, useSelector } from 'react-redux';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  initDateReset,
  initEndDateChange,
  initStartDateChange,
} from '@store/route';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

function valuetext(value) {
  return `Speed ${value}X`;
}

const useStyles = makeStyles(() => ({
  circle: {
    height: '10px',
    width: '10px',
    backgroundColor: 'green',
    borderRadius: '50%',
    marginRight: 10,
  },
}));
export default function Controller({
  speed,
  pause,
  onControllerClose,
  speedChangeHandler,
  setPaueHandler,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { startTime, endTime, minTime, maxTime } = useSelector(
    (store) => store.route,
  );

  return (
    <Grid
      container
      sx={{
        width: { md: 'auto', xs: '100%' },
      }}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        margin: '2%',
        height: '94%',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Paper sx={{ p: 1, width: { md: '20vw', xs: '96%' }, height: '100%' }}>
          <Grid container direction="column" height="100%">
            <Grid
              item
              container
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4">Control</Typography>
              <IconButton
                color="primary"
                component="span"
                onClick={onControllerClose}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Divider />
            <Grid item>
              <ButtonBase
                sx={{ width: 1, py: 2 }}
                // onClick={() => setPaueHandler(false)}
              >
                <Grid container wrap="nowrap">
                  <div className={classes.circle} />
                  <div>AB10045 TC DD- MH</div>
                </Grid>
              </ButtonBase>
            </Grid>
            <Grid item style={{ flexGrow: 1 }} />
            <Grid item container direction="column">
              <Grid
                item
                container
                wrap="nowrap"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="overline" fontSize=".9rem">
                  Time
                </Typography>
                <Tooltip title="Reset Time" arrow placement="right">
                  <IconButton
                    color="primary"
                    component="span"
                    onClick={() => dispatch(initDateReset())}
                  >
                    <RestartAltIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item p={2} container spacing={2}>
                <Grid item>
                  <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Start date and time"
                    value={startTime}
                    minDateTime={minTime}
                    maxDateTime={endTime}
                    onChange={(newValue) => {
                      // setVa=lue(newValue);
                      dispatch(initStartDateChange(newValue));
                    }}
                  />
                </Grid>
                <Grid item>
                  <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="End date and time"
                    value={endTime}
                    minDateTime={startTime}
                    maxDateTime={maxTime}
                    onChange={(newValue) => {
                      dispatch(initEndDateChange(newValue));
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item container direction="column">
              <Grid
                item
                container
                wrap="nowrap"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="overline" fontSize=".9rem">
                  Animation
                </Typography>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={() => setPaueHandler(!pause)}
                >
                  {pause ? <PlayCircleIcon /> : <PauseCircleIcon />}
                </IconButton>
              </Grid>
              <Grid item p={2}>
                <Slider
                  onChange={speedChangeHandler}
                  defaultValue={1}
                  step={1}
                  value={speed}
                  valueLabelFormat={valuetext}
                  valueLabelDisplay="auto"
                  marks={marks}
                  min={1}
                  max={5}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </LocalizationProvider>
    </Grid>
  );
}

Controller.defaultProps = {
  speed: 1,
  pause: false,
  setPaueHandler: () => {},
  onControllerClose: () => {},
  speedChangeHandler: () => {},
};
Controller.propTypes = {
  speed: PropTypes.number,
  pause: PropTypes.bool,
  setPaueHandler: PropTypes.func,
  onControllerClose: PropTypes.func,
  speedChangeHandler: PropTypes.func,
};
