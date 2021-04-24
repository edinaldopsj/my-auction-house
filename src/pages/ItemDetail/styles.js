const itemDetail = theme => ({
  grid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  titleGrid: {
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
  image: {
    borderRadius: '50%',
    border: '1px solid white',
  },
  imageGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gridBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bidGrid: {
    paddingTop: theme.spacing(5),
  },
  bidButton: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
});

export default itemDetail;
