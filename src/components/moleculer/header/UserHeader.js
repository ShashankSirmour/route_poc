import React from 'react';
import {
  AppBar,
  Avatar,
  ButtonBase,
  Grid,
  IconButton,
  Toolbar,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { AccountMenuList } from '@components/atomic';

const useStyles = makeStyles((theme) => ({
  appBar: ({ drawerWidth }) => ({
    backgroundColor: '#fff',
    boxShadow: 'rgba(53, 64, 82, 0.05) 0px 0px 14px 0px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  }),
  menuButton: {
    color: 'rgb(158, 158, 158)',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  rootMenuStyles: {
    backgroundColor: '#262626',
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

function UserHeader({ handleDrawerToggle, drawerWidth }) {
  const classes = useStyles({ drawerWidth });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar>
        <Grid container wrap="nowrap">
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Grid item className={classes.flexGrow} />
          <>
            <AccountMenuList
              dark
              anchorEl={anchorEl}
              onClose={handleClose}
              width={180}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              rootStyle={classes.rootMenuStyles}
            />
            <ButtonBase onClick={handleClick}>
              <Avatar>S</Avatar>
            </ButtonBase>
          </>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

UserHeader.defaultProps = {
  handleDrawerToggle: () => {},
  drawerWidth: 260,
};
UserHeader.propTypes = {
  handleDrawerToggle: PropTypes.func,
  drawerWidth: PropTypes.number,
};

export default UserHeader;
