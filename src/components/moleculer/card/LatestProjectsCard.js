import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  colors,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { GenericMoreButton, Label } from '@components/atomic';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

// import axios from 'utils/axios';
// import getInitials from 'utils/getInitials';
// import { Label, GenericMoreButton } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 900,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  tags: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  actions: {
    justifyContent: 'flex-end',
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function LatestProjectsCard(props) {
  const { ...rest } = props;

  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: uuid(),
      title: 'Mella Full Screen Slider',
      price: '12,500',
      currency: '$',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png',
      },
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600],
        },
      ],
    },
    {
      id: uuid(),
      title: 'Dashboard Design',
      price: '15,750',
      currency: '$',
      author: {
        name: 'Emilee Simchenko',
        avatar: '/images/avatars/avatar_9.png',
      },
      tags: [
        {
          text: 'HTML & CSS',
          color: colors.grey[600],
        },
      ],
    },
    {
      id: uuid(),
      title: 'Ten80 Web Design',
      price: '15,750',
      currency: '$',
      author: {
        name: 'Kwak Seong-Min',
        avatar: '/images/avatars/avatar_10.png',
      },
      tags: [
        {
          text: 'React JS',
          color: colors.indigo[600],
        },
      ],
    },
    {
      id: uuid(),
      title: 'Neura e-commerce UI Kit',
      price: '12,500',
      currency: '$',
      author: {
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png',
      },
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600],
        },
      ],
    },
    {
      id: uuid(),
      title: 'Administrator Dashboard',
      price: '15,750',
      currency: '$',
      author: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png',
      },
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600],
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   let mounted = true;

  //   const fetchProjects = () => {
  //     axios.get('/api/dashboard/latest-projects').then((response) => {
  //       if (mounted) {
  //         setProjects(response.data.projects);
  //       }
  //     });
  //   };

  //   fetchProjects();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  return (
    <Card {...rest} className={classes.root}>
      <CardHeader action={<GenericMoreButton />} title="Latest projects" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection="desc">
                    <Tooltip enterDelay={300} title="Sort">
                      <TableSortLabel active direction="desc">
                        Name
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Tags</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((project) => (
                  <TableRow hover key={project.id}>
                    <TableCell>{project.title}</TableCell>
                    <TableCell>
                      <div className={classes.author}>
                        <Avatar
                          alt="Author"
                          className={classes.avatar}
                          src={project.author.avatar}
                        >
                          {/* {getInitials(project.author.name)} */}name
                        </Avatar>
                        {project.author.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      {project.currency}
                      {project.price}
                    </TableCell>
                    <TableCell>
                      <div className={classes.tags}>
                        {project.tags.map((tag) => (
                          <Label color={tag.color} key={tag.text}>
                            `${tag.text}`
                          </Label>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="primary"
                        component={RouterLink}
                        size="small"
                        to="/projects/1/overview"
                        variant="outlined"
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to="/management/projects"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default LatestProjectsCard;
