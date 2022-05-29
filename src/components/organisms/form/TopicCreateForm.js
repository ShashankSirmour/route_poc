import React from 'react';
import { TextField, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import {
  useFilledHelperTextStyles,
  useFilledInputStyles,
} from '@styles/input/filledTextField';

import { DevTool } from '@hookform/devtools';

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

function TopicCreateForm({ onSubmit }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const filledInputStyles = useFilledInputStyles();
  const filledHelperTextStyle = useFilledHelperTextStyles();

  return (
    <>
      <DevTool control={control} />
      <form
        id="topic-create-form"
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          inputRef={register({ required: 'Topic is required.' })}
          variant="filled"
          InputProps={{
            disableUnderline: true,
            classes: filledInputStyles,
          }}
          FormHelperTextProps={{
            classes: filledHelperTextStyle,
          }}
          margin="normal"
          fullWidth
          label="Topic Name"
          placeholder="Enter topic name"
          autoFocus
          name="name"
          error={errors.name}
          helperText={errors.name && '⚠ Topic name is required'}
        />
        <TextField
          inputRef={register({ required: true })}
          variant="filled"
          InputProps={{
            disableUnderline: true,
            classes: filledInputStyles,
          }}
          FormHelperTextProps={{
            classes: filledHelperTextStyle,
          }}
          margin="normal"
          fullWidth
          label="Topic Number"
          placeholder="Enter topic number"
          type="number"
          name="number"
          error={errors.number}
          helperText={errors.number && '⚠ Topic number is required'}
        />
        <TextField
          inputRef={register({ required: true })}
          variant="filled"
          InputProps={{
            disableUnderline: true,
            classes: filledInputStyles,
          }}
          FormHelperTextProps={{
            classes: filledHelperTextStyle,
          }}
          margin="normal"
          fullWidth
          label="Topic Url"
          placeholder="Enter Url"
          name="url"
          error={errors.url}
          helperText={errors.url && '⚠ Topic url is required'}
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
    </>
  );
}
TopicCreateForm.defaultProps = {
  onSubmit: () => {},
};

TopicCreateForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TopicCreateForm;
