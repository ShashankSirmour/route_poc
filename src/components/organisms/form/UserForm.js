import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';

import {
  useFilledHelperTextStyles,
  useFilledInputStyles,
} from '@styles/input/filledTextField';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  submit: {
    display: 'block',
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5),
    borderTopLeftRadius: '200px',
    borderBottomLeftRadius: '200px',
    borderBottomRightRadius: '200px',
  },
}));

function UserForm({ courseID, onSubmit }) {
  const { handleChange, handleSubmit, values, errors } = {};
  const classes = useStyles();
  const filledInputStyles = useFilledInputStyles();
  const filledHelperTextStyle = useFilledHelperTextStyles();

  const onSubmitForm = (event) => {
    if (event) event.preventDefault();
    const validationError = handleSubmit(courseID);
    if (Object.values(validationError).length <= 0) onSubmit();
  };

  return (
    <Grid>
      <form
        id="dialog-form"
        className={classes.form}
        noValidate
        onSubmit={onSubmitForm}
      >
        <TextField
          variant="filled"
          InputProps={{
            disableUnderline: true,
            classes: filledInputStyles,
          }}
          FormHelperTextProps={{
            classes: filledHelperTextStyle,
          }}
          margin="normal"
          required
          fullWidth
          id="name"
          label="User Name"
          placeholder="Enter User name"
          name="name"
          autoFocus
          onChange={handleChange}
          value={values.name}
        />
        <TextField
          variant="filled"
          InputProps={{
            disableUnderline: true,
            classes: filledInputStyles,
          }}
          FormHelperTextProps={{
            classes: filledHelperTextStyle,
          }}
          margin="normal"
          required
          fullWidth
          name="email"
          label="E-mail Address"
          placeholder="Enter E-mail address"
          type="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="User Password"
          placeholder="Enter User Password"
          type="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="passwordConfirm"
          label="Confirm Password"
          placeholder="ReEnter User Password"
          type="password"
          id="passwordConfirm"
          onChange={handleChange}
          value={values.passwordConfirm}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit Detail
        </Button>
      </form>
    </Grid>
  );
}
UserForm.defaultProps = {
  onSubmit: () => {},
};

UserForm.propTypes = {
  courseID: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default UserForm;
