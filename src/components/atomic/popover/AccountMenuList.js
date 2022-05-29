import React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { initLogoutRequest } from '@store/auth';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: ({ width }) => ({
    width,
  }),
  rootMenuDark: {
    backgroundColor: 'rgb(27, 36, 48)',
  },
  listItemText: { color: 'rgb(238, 238, 238)' },
  listItemIcon: { color: 'rgb(238, 238, 238)', opacity: 0.5 },
});

export default function AccountMenuList({
  anchorEl,
  onClose,
  width,
  dark,
  anchorOrigin,
  transformOrigin,
}) {
  const classes = useStyles({ width });
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogoutClick = () => {
    onClose();
    dispatch(initLogoutRequest());
  };

  const onSettingClick = () => {
    onClose();
    history.push('/settings/general');
  };

  return (
    <Menu
      classes={{
        paper: classNames(classes.root, { [classes.rootMenuDark]: dark }),
      }}
      keepMounted
      anchorOrigin={anchorOrigin}
      // getContentAnchorEl={null}
      transformOrigin={transformOrigin}
      anchorEl={anchorEl}
      onClose={onClose}
      open={Boolean(anchorEl)}
    >
      <MenuItem>
        <ListItemIcon
          className={classNames({
            [classes.listItemIcon]: dark,
          })}
        >
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <Typography
          className={classNames({
            [classes.listItemText]: dark,
          })}
          variant="inherit"
        >
          Profile
        </Typography>
      </MenuItem>
      <MenuItem onClick={onSettingClick}>
        <ListItemIcon
          className={classNames({
            [classes.listItemIcon]: dark,
          })}
        >
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <Typography
          className={classNames({
            [classes.listItemText]: dark,
          })}
          variant="inherit"
        >
          Setting
        </Typography>
      </MenuItem>
      <MenuItem onClick={onLogoutClick}>
        <ListItemIcon
          className={classNames({
            [classes.listItemIcon]: dark,
          })}
        >
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <Typography
          className={classNames({
            [classes.listItemText]: dark,
          })}
          variant="inherit"
        >
          Logout
        </Typography>
      </MenuItem>
    </Menu>
  );
}

AccountMenuList.defaultProps = {
  anchorEl: {},
  onClose: () => {},
  width: 220,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  dark: false,
};
AccountMenuList.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func,
  width: PropTypes.number,
  dark: PropTypes.bool,

  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
};
