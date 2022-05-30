import React, { memo, useRef } from 'react';
import { OverlayView, Polyline } from '@react-google-maps/api';
import useNavigationData from '@hooks/useNavigationData';
import { SvgIcon, Paper, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Popper from '@mui/material/Popper';
import SpeedIcon from '@mui/icons-material/Speed';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { ReactComponent as Logo } from '../../assets/car.svg';

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

function RouteRender({ speed, pause, setCenterPoint, paueHandler }) {
  const { path, isLoading, isFetched } = useNavigationData({
    speed,
    pause,
    setCenterPoint,
    paueHandler,
  });

  const arrowRef = useRef(null);

  if (!isLoading && isFetched) {
    return (
      <>
        <Polyline path={path.path} options={options} />

        <OverlayView
          position={path.marker}
          mapPaneName={OverlayView.FLOAT_PANE}
        >
          <>
            <SvgIcon
              ref={arrowRef}
              style={{
                transformOrigin: '50% 50%',
                transform: `translate(-50%, -50%) rotate(${path.rotation}deg)`,
                height: 40,
                width: 36,
              }}
            >
              <Logo />
            </SvgIcon>

            <Popper
              placement="top"
              open
              disablePortal
              anchorEl={arrowRef?.current}
              modifiers={[
                {
                  name: 'flip',
                  enabled: false,
                },
                {
                  name: 'preventOverflow',
                  enabled: true,
                  options: {
                    altAxis: false,
                    altBoundary: true,
                    tether: true,
                    rootBoundary: 'document',
                    padding: 8,
                  },
                },
              ]}
            >
              <Paper sx={{ width: 'auto', p: 1 }}>
                <Grid container wrap="nowrap" spacing={1}>
                  <Grid item container direction="column" minWidth={90}>
                    <Grid item container wrap="nowrap">
                      <SpeedIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography>Speed</Typography>
                    </Grid>

                    <Typography>{path?.sp}km/hr</Typography>
                  </Grid>
                  <Grid item container direction="column" minWidth={160}>
                    <Grid item container wrap="nowrap">
                      <DateRangeIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography>Date</Typography>
                    </Grid>
                    <Typography>{path?.timestamp?.toLocaleString()}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Popper>
          </>
        </OverlayView>
      </>
    );
  }

  return null;
}

RouteRender.defaultProps = {
  speed: 1,
  pause: false,
  setCenterPoint: () => {},
  paueHandler: () => {},
};

RouteRender.propTypes = {
  speed: PropTypes.number,
  setCenterPoint: PropTypes.func,
  pause: PropTypes.bool,
  paueHandler: PropTypes.func,
};

export default memo(RouteRender);
