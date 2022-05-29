import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function HospitalInitCreateForm({ onSubmit, submitText }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <DevTool control={control} />

      <form id="hospitalCreateForm" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Enter Hospital Name
        </Typography>
        <TextField
          fullWidth
          {...register('fullName')}
          placeholder="Enter Hospital Full Name"
        />
        <Typography variant="subtitle2" sx={{ mb: 1, mt: 4 }}>
          Enter Short Name
        </Typography>
        <TextField
          error={errors?.shortName !== undefined}
          fullWidth
          {...register('shortName', { required: true, maxLength: 10 })}
          placeholder="Enter short name"
          helperText="Immutable Field"
        />

        <Button sx={{ mt: 4 }} size="large" variant="contained" type="submit">
          {submitText}
        </Button>
      </form>
    </>
  );
}

HospitalInitCreateForm.propTypes = {
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
};
HospitalInitCreateForm.defaultProps = {
  onSubmit: () => {},
  submitText: 'Next',
};

export default HospitalInitCreateForm;
