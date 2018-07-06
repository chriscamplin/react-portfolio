export default {
  // Some global styles
  '@global': {
    html: {
      fontSize: '16px',
      boxSizing: 'border-box',
    },

    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },

    body: {
      backgroundColor: '#ddd',
      color: '#333',
      fontWeight: 'normal',
      fontSize: '1rem',
      lineHeight: '1.5',
      margin: '0',
    },

    a: {
      color: '#568db2',
      textDecoration: 'none',
    },

    'a:hover': {
      color: '#466d87',
    },
  },

  appWrapper: {
    textAlign: 'center',
  },

  textModal: {
    textAlign: 'left',
    margin: '0.8rem',
    padding: '7.8rem',
    background: '#ccc',

    '& h2': {
      marginTop: 0,
    },

    '& p': {
      marginBottom: 0,
    },
  },

  imageModal: {
    padding: '0.4rem',

    '& img': {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
};
