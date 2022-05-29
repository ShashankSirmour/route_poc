import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import {
  Box,
  ListItemAvatar,
  Avatar,
  SwipeableDrawer,
  ListItem,
  Hidden,
  Drawer,
  ListItemText,
  ListItemIcon,
  ButtonBase,
} from '@mui/material';

import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Scrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  DrawerAccordion,
  DrawerAccordionSummary,
  DrawerAccordionDetails,
  AccountMenuList,
} from '@components/atomic';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  drawer: ({ drawerWidth }) => ({
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  }),
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: ({ drawerWidth }) => ({
    width: drawerWidth,
    backgroundColor: 'rgb(27, 36, 48)',
    // '#273ab5',
  }),
  solidListItem: {
    backgroundColor: 'rgb(35, 47, 62)',
  },
  customListItem: {
    borderTopRightRadius: 2000,
    borderBottomRightRadius: 2000,
    width: '100%',
  },
  customlistItemTextPrimary: {
    fontSize: '0.9rem',
  },
  listItemIcon: {
    color: 'rgb(238, 238, 238)',
    opacity: 0.5,
  },
  customDetailListItemTextRoot: {
    color: '#868ca2',
    paddingLeft: theme.spacing(5),
    marginTop: 0,
    marginBottom: 0,
  },
  customListItemTextRoot: { color: 'rgb(238, 238, 238)', flex: '0 1 auto' },
  customListItemIconRoot: {
    minWidth: theme.spacing(5),
  },
  customListItemButton: {
    position: 'relative',
    '&:hover': {
      backgroundColor: `rgba(0,0,0,0.2)`,
    },
    '&:hover::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      [theme.breakpoints.up('sm')]: {
        height: '100%',
        borderLeft: `2px solid red`,
      },
    },
  },
}));

function NavigationDrawer({
  window,
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
  navigations,
}) {
  const history = useHistory();
  const classes = useStyles({ drawerWidth });

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const onNavigationClicked = (path) => () => history.replace(path);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderListItem = ({ name, path, children, IconComponent }) => {
    if (children)
      return (
        <DrawerAccordion key={name}>
          <ButtonBase
            classes={{
              root: classNames(
                classes.customListItem,
                classes.customListItemButton,
              ),
            }}
          >
            <DrawerAccordionSummary
              sx={{ py: 1 }}
              expandIcon={<ExpandMoreIcon className={classes.listItemIcon} />}
            >
              <ListItemIcon
                className={classes.listItemIcon}
                classes={{ root: classes.customListItemIconRoot }}
              >
                <IconComponent />
              </ListItemIcon>

              <ListItemText
                classes={{
                  root: classes.customListItemTextRoot,
                  primary: classes.customlistItemTextPrimary,
                }}
                primary={name}
              />
            </DrawerAccordionSummary>
          </ButtonBase>
          <DrawerAccordionDetails>
            {children.map((nav) => (
              <ListItem
                key={nav.name}
                onClick={onNavigationClicked(nav.path)}
                button
                classes={{
                  root: classes.customListItem,
                  button: classes.customListItemButton,
                }}
              >
                <ListItemText
                  classes={{
                    root: classes.customDetailListItemTextRoot,
                    primary: classes.customlistItemTextPrimary,
                  }}
                  primary={nav.name}
                />
              </ListItem>
            ))}
          </DrawerAccordionDetails>
        </DrawerAccordion>
      );

    return (
      <ListItem
        key={name}
        onClick={onNavigationClicked(path)}
        button
        classes={{
          root: classes.customListItem,
          button: classes.customListItemButton,
        }}
      >
        <ListItemIcon
          className={classes.listItemIcon}
          classes={{ root: classes.customListItemIconRoot }}
        >
          <IconComponent />
        </ListItemIcon>

        <ListItemText
          classes={{
            root: classes.customListItemTextRoot,
            primary: classes.customlistItemTextPrimary,
          }}
          primary={name}
        />
      </ListItem>
    );
  };

  const drawer = (
    <>
      <div className={classNames(classes.solidListItem, classes.toolbar)} />
      <Box
        flexDirection="column"
        height="100%"
        display="flex"
        overflow="hidden"
        justifyContent="space-between"
      >
        <Scrollbar
          options={{
            suppressScrollX: true,
            useBothWheelAxes: false,
          }}
        >
          <Box overflow="hidden">
            {navigations.map((data) => renderListItem({ ...data }))}
          </Box>
        </Scrollbar>
        <Box className={classes.solidListItem}>
          <AccountMenuList anchorEl={anchorEl} onClose={handleClose} />
          <ListItem button onClick={handleClick}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              className={classes.customListItemTextRoot}
              primary="Account"
            />
          </ListItem>
        </Box>
      </Box>
    </>
  );
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <SwipeableDrawer
          // disableBackdropTransition={!iOS}
          // disableDiscovery={iOS}
          container={container}
          open={mobileOpen}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

NavigationDrawer.defaultProps = {
  window: undefined,
  drawerWidth: 260,
  navigations: [],
};
NavigationDrawer.propTypes = {
  window: PropTypes.any,
  drawerWidth: PropTypes.number,
  navigations: PropTypes.array,
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default NavigationDrawer;
