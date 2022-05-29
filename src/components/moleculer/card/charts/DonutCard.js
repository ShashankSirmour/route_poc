import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { PieChart } from '@components/atomic';

const useStyles = makeStyles(() => ({
  root: {},
}));

function SpiderCard({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...rest}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
            Last 7 days
          </Button>
        }
        title="Latest SpiderCard"
      />
      <Divider />
      <CardContent>
        <Box height={400} position="relative">
          <PieChart />
        </Box>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
}

SpiderCard.defaultProps = {
  className: {},
};

SpiderCard.propTypes = {
  className: PropTypes.string,
};

export default SpiderCard;
