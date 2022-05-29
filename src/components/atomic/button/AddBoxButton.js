import React from 'react';
import { ButtonBase } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const useStyles = makeStyles(() => ({
  baseButton: {
    width: '100%',
    padding: 5,
  },
  insideDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'auto',
    border: '1px dashed #ffe',
  },
  addIcon: {
    color: '#FFF3EF',
  },
}));

function AddBoxButton({ minHeight, onClick }) {
  const classes = useStyles();
  return (
    <ButtonBase className={classes.baseButton} onClick={onClick}>
      <div
        className={classes.insideDiv}
        style={{
          minHeight,
        }}
      >
        <AddCircleOutlineRoundedIcon className={classes.addIcon} />
      </div>
    </ButtonBase>
  );
}

AddBoxButton.defaultProps = {
  onClick: () => {},
};

AddBoxButton.propTypes = {
  minHeight: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default AddBoxButton;
