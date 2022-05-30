/* eslint-disable no-useless-escape */
import React, { useState, useCallback } from 'react';
import { Fab, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { MAP_API_KEY } from '@utils/constants';
import { RouteRender, Controller } from '@components/templates';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  fab: { top: '0', left: '0', margin: '2%' },
}));

const getMapOptions = {
  streetViewControl: false,
  scaleControl: true,
  fullscreenControl: false,
  minZoom: 6,
  maxZoom: 20,
  mapTypeControl: false,
  zoomControl: true,
  clickableIcons: true,
};

export default function Map() {
  const classes = useStyles();

  const [expand, setExpand] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [pause, setPause] = useState(true);

  const [center, setCenter] = useState({
    lat: 20.344627,
    lng: 78.516747,
  });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY, // ,
    // ...otherOptions
  });

  const onClose = useCallback(() => {
    setExpand(false);
  }, []);

  const speedChangeHandler = useCallback((event, newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  const setPaueHandler = useCallback((state) => {
    setPause(state);
  }, []);

  const setCenterPoint = useCallback((point) => {
    setCenter(point);
  }, []);

  if (isLoaded) {
    return (
      <Grid container component="main" className={classes.root}>
        <GoogleMap
          mapContainerStyle={{
            height: '100%',
            width: '100%',
            position: 'relative',
          }}
          zoom={14}
          center={center}
          options={getMapOptions}
        >
          <RouteRender
            speed={speed}
            setCenterPoint={setCenterPoint}
            pause={pause}
            paueHandler={setPaueHandler}
          />
          {expand && (
            <Controller
              pause={pause}
              speed={speed}
              setPaueHandler={setPaueHandler}
              onControllerClose={onClose}
              speedChangeHandler={speedChangeHandler}
            />
          )}
          {!expand && (
            <Fab
              className={classes.fab}
              color="primary"
              onClick={() => setExpand(true)}
            >
              <DisplaySettingsIcon />
            </Fab>
          )}
        </GoogleMap>
      </Grid>
    );
  }
  if (loadError) {
    return 'error';
  }

  return 'loading';
}
