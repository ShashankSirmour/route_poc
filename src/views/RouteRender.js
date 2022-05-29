import React, { memo, useRef } from 'react';
import { OverlayView, Polyline } from '@react-google-maps/api';
import useNavigationData from '@hooks/useNavigationData';
import { SvgIcon, Typography, Paper, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Popper from '@mui/material/Popper';
import { ReactComponent as Logo } from '../assets/car.svg';

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

function RouteRender({ speed, pause, setCenterPoint }) {
  const { path, isLoading, isFetched } = useNavigationData({
    speed,
    pause,
    setCenterPoint,
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
              <Paper sx={{ width: '100%' }}>
                <Typography sx={{ p: 2 }}>
                  The content of the Popper.
                </Typography>
                <Button>click</Button>
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
};

RouteRender.propTypes = {
  speed: PropTypes.number,
  setCenterPoint: PropTypes.func,
  pause: PropTypes.bool,
};

export default memo(RouteRender);
