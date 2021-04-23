const itemDetail = theme => ({
  grid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  bidGrid: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
  },
  title: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    paddingBottom: theme.spacing(5),
  },
});

export default itemDetail;
