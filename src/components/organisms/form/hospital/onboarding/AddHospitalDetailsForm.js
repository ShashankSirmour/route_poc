import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const useStyle = makeStyles({
  title: {
    color: 'back',
    fontWeight: 500,
  },
});

function AddHospitalDetailsForm({ onSubmit }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyle();

  return (
    <>
      <DevTool control={control} />
      <form id="hospitalDetailForm" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              className={classes.title}
              sx={{ mb: 2 }}
            >
              Add Hospital Details
            </Typography>
            <TextField
              {...register('detail')}
              label="Details"
              variant="outlined"
              name="detail"
              multiline
              rows={5}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle2"
              className={classes.title}
              sx={{ mb: 2 }}
            >
              Location longitude
            </Typography>
            <TextField
              {...register('location.coordinates.0')}
              type="number"
              label="longitude"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle2"
              className={classes.title}
              sx={{ mb: 2 }}
            >
              Location latitude
            </Typography>
            <TextField
              {...register('location.coordinates.1')}
              type="number"
              label="latitude"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              className={classes.title}
              sx={{ mb: 2 }}
            >
              Enter your pincode
            </Typography>
            <TextField
              {...register('pincode', { maxLength: 6, minLength: 6 })}
              error={errors.pincode}
              helperText={errors.pincode && 'Enter 6 digit pincode'}
              label="Pincode"
              type="number"
              variant="outlined"
              name="pincode"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              className={classes.title}
              sx={{ mb: 2 }}
            >
              Enter your Address
            </Typography>
            <TextField
              {...register('address')}
              label="Address "
              variant="outlined"
              name="address"
              fullWidth
            />
          </Grid>
          <Grid item container xs={12}>
            <Box>
              <Button size="large" variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

AddHospitalDetailsForm.propTypes = {
  onSubmit: PropTypes.func,
};
AddHospitalDetailsForm.defaultProps = {
  onSubmit: () => {},
};

export default AddHospitalDetailsForm;
