import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Button, Grid } from '@mui/material';

function AdminInviteForm({ onSubmit, onSkip, enableSkip, skipText }) {
  return (
    <Box>
      <form onSubmit={onSubmit}>
        invite form
        <Grid container>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent="space-between"
              width={1}
              margin="0 auto"
            >
              <Button
                size="large"
                variant="contained"
                // type="submit"
                onClick={onSubmit}
              >
                Save
              </Button>

              {enableSkip && (
                <Button size="large" variant="contained" onClick={onSkip}>
                  {skipText}
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

AdminInviteForm.propTypes = {
  onSubmit: PropTypes.func,
  onSkip: PropTypes.func,
  enableSkip: PropTypes.bool,
  skipText: PropTypes.string,
};
AdminInviteForm.defaultProps = {
  onSubmit: () => {},
  onSkip: () => {},
  enableSkip: false,
  skipText: 'Skip',
};

export default AdminInviteForm;
