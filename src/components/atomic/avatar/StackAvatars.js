import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@mui/styles';
import { Tooltip, Avatar } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: 20,
  },
  avatar: {
    border: `3px solid ${theme.palette.white}`,
    marginLeft: -20,
    '&:hover': {
      zIndex: 2,
    },
  },
  more: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function StackAvatars(props) {
  const { avatars, limit, ...rest } = props;

  const classes = useStyles();

  const avatarNodes = avatars.slice(0, limit).map((item) => (
    <Tooltip title="View">
      <Avatar className={classes.avatar} src={item} />
    </Tooltip>
  ));

  if (avatars.length > limit) {
    avatarNodes.push(
      <Tooltip title="View">
        <Avatar className={clsx(classes.avatar, classes.more)}>
          +{avatars.length - limit}
        </Avatar>
      </Tooltip>,
    );
  }

  return (
    <div {...rest} className={clsx(classes.root)}>
      {avatarNodes}
    </div>
  );
}

StackAvatars.propTypes = {
  avatars: PropTypes.array.isRequired,
  limit: PropTypes.number,
};

StackAvatars.defaultProps = {
  limit: 3,
};

export default memo(StackAvatars);
