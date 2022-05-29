import React, { useCallback } from 'react';
import { Grid, useTheme, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import Scrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { UserHeader, SideDrawer } from '@components/moleculer';
import { useCurrentUserNavigation } from '@hooks/navigation';

const drawerWidth = 260; // todo make it global

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  // necessary for contentPaper to be below app bar
  toolbar: theme.mixins.toolbar,

  contentPaper: {
    height: '100%',
    width: '100%',
    position: 'relative',
    flexGrow: 1,
    backgroundColor: 'rgb(247, 249, 252)',
    overflowX: 'hidden',
    overflowY: 'hidden',
    [theme.breakpoints.down('md')]: {
      overflowY: 'auto',
    },
  },
  contentArea: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

function GenricLayout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  // todo remove it and use better scrollbar - rerendring in this breakpoint
  const disableScrollbar = useMediaQuery(theme.breakpoints.down('md'));
  const currentUserNavigation = useCurrentUserNavigation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <div className={classes.root}>
      <UserHeader
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <SideDrawer
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        window={window}
        navigations={currentUserNavigation}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Grid container direction="column" wrap="nowrap">
        <div className={classes.toolbar} />
        <Grid item className={classes.contentPaper}>
          {!disableScrollbar ? (
            <Scrollbar
              options={{
                suppressScrollX: true,
                useBothWheelAxes: false,
              }}
            >
              <div className={classes.contentArea}>{children}</div>
            </Scrollbar>
          ) : (
            <div className={classes.contentArea}>{children}</div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

GenricLayout.defaultTypes = {
  children: 'blank',
};

GenricLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default GenricLayout;
