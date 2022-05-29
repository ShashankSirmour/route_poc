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

function LessonCreateForm({ onSubmit }) {
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
        id="lesson-create-form"
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register({ required: true })}
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
          label="Lesson Name"
          placeholder="Enter lesson name"
          name="name"
          error={errors.name}
          helperText={errors.name && '⚠ Lesson name is required'}
          autoFocus
        />

        <TextField
          {...register({ required: true })}
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
          label="Lesson Number"
          placeholder="Enter lesson number"
          type="number"
          name="number"
          error={errors.number}
          helperText={errors.number && '⚠ Lesson number is required'}
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
LessonCreateForm.defaultProps = {
  onSubmit: () => {},
};

LessonCreateForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LessonCreateForm;
