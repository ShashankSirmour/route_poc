import React from 'react';
import {
  TextField,
  Button,
  colors,
  CardHeader,
  Divider,
  CardContent,
  Grid,
  CardActions,
  Switch,
  Typography,
  Card,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  useFilledHelperTextStyles,
  useFilledInputStyles,
} from '@styles/input/filledTextField';
import { DevTool } from '@hookform/devtools';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  form: {
    marginTop: theme.spacing(1),
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

function GeneralSettingForm({ onSubmit }) {
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
      <Card className={classes.root}>
        <form
          id="lesson-create-form"
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <CardHeader title="Profile" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  // onChange={handleChange}
                  required
                  // value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  // onChange={handleChange}
                  required
                  // value={values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  // onChange={handleChange}
                  required
                  // value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  // onChange={handleChange}
                  type="text"
                  // value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  // onChange={handleChange}
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  // value={values.state}
                  variant="outlined"
                >
                  {/* {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))} */}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  // onChange={handleChange}
                  required
                  // value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6">Make Contact Info Public</Typography>
                <Typography variant="body2">
                  Means that anyone viewing your profile will be able to see
                  your contacts details
                </Typography>
                <Switch
                  // checked={values.isPublic}
                  color="secondary"
                  edge="start"
                  name="isPublic"
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6">Available to hire</Typography>
                <Typography variant="body2">
                  Toggling this will let your teamates know that you are
                  available for acquireing new projects
                </Typography>
                <Switch
                  // checked={values.canHire}
                  color="secondary"
                  edge="start"
                  name="canHire"
                  // onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className={classes.saveButton}
              type="submit"
              variant="contained"
            >
              Save Changes
            </Button>
          </CardActions>
          {/* <TextField
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
          label="Lesson Name"
          placeholder="Enter lesson name"
          name="name"
          error={errors.name}
          helperText={errors.name && '⚠ Lesson name is required'}
          autoFocus
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
          label="Lesson Number"
          placeholder="Enter lesson number"
          type="number"
          name="number"
          error={errors.number}
          helperText={errors.number && '⚠ Lesson number is required'}
        /> */}
        </form>
      </Card>
    </>
  );
}
GeneralSettingForm.defaultProps = {
  onSubmit: () => {},
};

GeneralSettingForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default GeneralSettingForm;
