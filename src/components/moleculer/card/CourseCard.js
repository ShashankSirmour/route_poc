import React, { useCallback } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid, ButtonBase } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import LinesEllipsis from 'react-lines-ellipsis';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  wrapperBtn: {
    borderRadius: '1.5rem',
  },
  card: {
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1rem',
      },
      '& $shadow2': {
        bottom: '-2rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    textAlign: 'start',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },
  avatar: {
    width: 48,
    height: 48,
  },

  tag: {
    display: 'inline-block',
    fontFamily: "'Sen', sans-serif",
    backgroundColor: '#ff5dac',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#fff',
  },
  author: {
    zIndex: 1,
    position: 'relative',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
    margin: 0,
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
  authorText: {
    marginLeft: 5,
    whiteSpace: 'pre-wrap',
    textAlign: 'start',
  },
  shadow: {
    transition: '0.2s',
    position: 'absolute',
    zIndex: 0,
    width: '88%',
    height: '100%',
    bottom: 0,
    borderRadius: '1.5rem',
    backgroundColor: 'rgba(0,0,0,0.06)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  shadow2: {
    bottom: 0,
    width: '72%',
    backgroundColor: 'rgba(0,0,0,0.04)',
  },

  cardMedia: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    backgroundPosition: 'center',
  },
}));

const CourseCard = React.memo((props) => {
  const classes = useStyles();
  const history = useHistory();
  const { course } = props;

  const onCardClick = useCallback(() => {
    const { pathname } = history.location;
    if (course.id) history.push(`${pathname}/${course.id}`);
  }, []);

  return (
    <ButtonBase className={classes.wrapperBtn} onClick={onCardClick}>
      <Card className={classes.card}>
        <Box className={classes.main} minHeight={300} position="relative">
          <CardMedia
            classes={{ root: classes.cardMedia }}
            image="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          />

          <div className={classes.content}>
            <div className={classes.tag}>Core</div>
            <LinesEllipsis
              className={classes.title}
              style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}
              text={course.name}
              maxLine="3"
              ellipsis="..."
            />
          </div>
        </Box>
        <Grid
          container
          className={classes.author}
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Avatar
              className={classes.avatar}
              src="https://i.pravatar.cc/300?img=13"
            />
          </Grid>

          <Grid item style={{ flexGrow: '1' }}>
            <LinesEllipsis
              className={classes.authorText}
              text={course.description}
              maxLine="2"
              trimRight
              ellipsis="..."
            />
          </Grid>
        </Grid>
        <div className={classes.shadow} />
        <div className={`${classes.shadow} ${classes.shadow2}`} />
      </Card>
    </ButtonBase>
  );
});

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;
