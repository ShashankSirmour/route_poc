import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { TitlePage } from '@components/atomic';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

//  TODO DESIDE it's Component

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function UserTable() {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <TitlePage className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </TitlePage>
  );
}

export default UserTable;
