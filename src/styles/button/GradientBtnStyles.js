import { makeStyles } from '@mui/styles';

const gradientBtnStyle = ({ palette, shadows }) => ({
  root: ({ rounded }) => ({
    boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.8)',
    minWidth: 200,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      'linear-gradient(to right, #8E2DE2,#4A00E0)',
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 8px 20px -10.125px rgba(0,0,0,0.8)',
    },
    ...(rounded && {
      borderRadius: 50,
    }),
  }),
  label: {
    color: '#fff',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
  },
  contained: {
    minHeight: 30,
    boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.8)',
    '&:active': {
      boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
  },
});

export default makeStyles(gradientBtnStyle, { rounded: true });
