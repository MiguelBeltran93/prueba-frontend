import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyleItemDetail = makeStyles({
  rootContainer: {
    float: 'auto',
  },
  root: {
    marginTop: '2%',
    minWidth: 250,
    maxWidth: 1000,
    margin: 'auto',
    backgroundColor: 'white',
    borderBottom: '#E3E4E5 1px solid',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    paddingLeft: '1rem',
    marginTop: 12,
    fontWeight: 'bolder',
    cursor: 'pointer',
    color: 'black',
  },
  posCountry: {
    paddingLeft: '1rem',
    marginTop: 50,
    fontWeight: 500,
  },
  media: {
    height: 0,
    paddingTop: '120%',
  },
  img: {
    maxWidth: '70%',
    maxHeight: '100%',
    marginLeft: '10%',
    margin: 'auto',
    marginTop: '5%',
  },
  mediaContainer: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  buttonBuy: {
    backgroundColor: '#3483fa',
    marginTop: '10%',
    width: '80%',
  },
  cardDetail: {
    marginLeft: '3%',
  },
  cardPrice: {
    marginTop: '5%',
  },
  iconSent: {
    color: green[500],
    marginLeft: 5,
    width: 15,
    cursor: 'pointer',
  },
});

export default useStyleItemDetail;
