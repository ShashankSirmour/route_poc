import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  List,
  Button,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  colors,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

import { GenericMoreButton, StackAvatars } from '@components/atomic';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 400,
  },
  actions: {
    justifyContent: 'flex-end',
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const useTaskItemStyles = makeStyles((theme) => ({
  root: {},
  critical: {
    '& $indicator': {
      borderColor: colors.red[600],
    },
  },
  indicator: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.grey[100],
    borderRadius: '50%',
  },
  viewButton: {
    marginLeft: theme.spacing(2),
  },
}));

function TaskItem(props) {
  // const { task, ...rest } = props;

  const classes = useTaskItemStyles();

  const deadline = 'N/A';
  const critical = false;
  const task = {};

  // if (task.deadline) {
  //   const now = moment();
  //   const deadlineMoment = moment(task.deadline);

  //   if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
  //     deadline = `${deadlineMoment.diff(now, 'day')} days remaining`;
  //     critical = true;
  //   }
  // }

  return (
    <ListItem
      {...props}
      className={clsx(classes.root, { [classes.critical]: critical })}
    >
      <ListItemIcon>
        <span className={classes.indicator} />
      </ListItemIcon>
      <ListItemText
        className={classes.listItemText}
        primary={task.title}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
        secondary={deadline}
      />
      <StackAvatars avatars={task.members} limit={3} />
      <Tooltip title="View task">
        <IconButton className={classes.viewButton} edge="end" size="small">
          <OpenInNewIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

function TeamTasksCard(props) {
  const { ...rest } = props;
  const classes = useStyles();
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Update the API for the project',
      deadline: moment().add(1, 'days').add(1, 'hour'),
      members: [
        '/images/avatars/avatar_2.png',
        '/images/avatars/avatar_3.png',
        '/images/avatars/avatar_4.png',
        '/images/avatars/avatar_5.png',
        '/images/avatars/avatar_6.png',
        '/images/avatars/avatar_7.png',
      ],
    },
    {
      id: uuid(),
      title: 'Redesign the landing page',
      deadline: moment().add(2, 'day').add(1, 'hour'),
      members: [
        '/images/avatars/avatar_8.png',
        '/images/avatars/avatar_10.png',
        '/images/avatars/avatar_12.png',
      ],
    },
    {
      id: uuid(),
      title: 'Solve the bug for the showState',
      deadline: moment(),
      members: ['/images/avatars/avatar_7.png'],
    },
    {
      id: uuid(),
      title: 'Release v1.0 Beta',
      deadline: null,
      members: [
        '/images/avatars/avatar_2.png',
        '/images/avatars/avatar_10.png',
      ],
    },
    {
      id: uuid(),
      title: 'GDPR Compliance',
      deadline: null,
      members: [
        '/images/avatars/avatar_5.png',
        '/images/avatars/avatar_2.png',
        '/images/avatars/avatar_6.png',
      ],
    },
    {
      id: uuid(),
      title: 'Redesign Landing Page',
      deadline: null,
      members: ['/images/avatars/avatar_8.png'],
    },
  ]);

  // useEffect(() => {
  //   let mounted = true;

  //   const fetchTasks = () => {
  //     axios.get('/api/tasks').then((response) => {
  //       if (mounted) {
  //         setTasks(response.data.tasks);
  //       }
  //     });
  //   };

  //   fetchTasks();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  return (
    <Card {...rest} className={classes.root}>
      <CardHeader action={<GenericMoreButton />} title="Team Tasks" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <List>
              {tasks.map((task, i) => (
                <TaskItem
                  divider={i < tasks.length - 1}
                  key={task.id}
                  task={task}
                />
              ))}
            </List>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to="/kanban-board"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default TeamTasksCard;
