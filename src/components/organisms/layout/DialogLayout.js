import React from 'react';
import {
  Dialog,
  Slide,
  Button,
  Zoom,
  Fab,
  useMediaQuery,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    minHeight: '100%',
    height: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1310,
  },
  dialogHidden: {
    display: 'none',
  },
}));

export default function DialogLayout({
  showFab,
  showDialog,
  onClickAction,
  dialogContent,
  children,
  onCloseDialog,
  onSaveDialogData,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // return <Dialog fullScreen={fullScreen} />;

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const Transition = React.forwardRef((props, ref) => (
    <Slide unmountOnExit mountOnEnter direction="up" ref={ref} {...props} />
  ));

  return (
    <div className={classes.root}>
      <Dialog
        fullScreen={fullScreen}
        open={showDialog}
        hideBackdrop
        onClose={onCloseDialog}
        TransitionComponent={Transition}
        className={classNames({ [classes.dialogHidden]: !showDialog })}
      >
        <DialogTitle>Details</DialogTitle>
        <DialogContent dividers>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={onSaveDialogData} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Zoom
        in={showFab}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${showFab ? transitionDuration.exit : 0}ms`,
        }}
        unmountOnExit
      >
        <Fab className={classes.fab} color="primary" onClick={onClickAction}>
          {showDialog ? <CloseIcon /> : <EditIcon />}
        </Fab>
      </Zoom>
      {children}
    </div>
  );
}

DialogLayout.defaultProps = {
  showFab: false,
  onClickAction: () => {},
  children: <div />,
  dialogContent: <div />,
  showDialog: false,
  onSaveDialogData: () => {},
  onCloseDialog: () => {},
};
DialogLayout.propTypes = {
  showFab: PropTypes.bool,
  showDialog: PropTypes.bool,
  onClickAction: PropTypes.func,
  onCloseDialog: PropTypes.func,
  onSaveDialogData: PropTypes.func,
  children: PropTypes.node,
  dialogContent: PropTypes.node,
};
