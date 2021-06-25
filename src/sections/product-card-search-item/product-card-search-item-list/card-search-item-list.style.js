import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyleItemList = makeStyles({
  rootContainer: {
    marginTop: '2%',
    margin: 'auto',
  },
  root: {
    minWidth: 230,
    margin: '0% 20% 0% 20%',
    backgroundColor: 'white',
    borderBottom: '#E3E4E5 1px solid',
  },
  rootSkeleton: {
    minWidth: 230,
    minHeight: 400,
    margin: '0% 20% 0% 20%',
  },
  posCategories: {
    minWidth: 190,
    margin: '0% 20% 0% 20%',
    paddingLeft: '1rem',
    marginTop: 12,
    marginBottom: 12,
    color: 'black',
    opacity: 0.5,
  },
  media: {
    minHeight: 140,
    minWidth: 140,
    marginRight: 10,
    cursor: 'pointer',
  },
  pos: {
    paddingLeft: '1rem',
    marginTop: 12,
    fontWeight: 'bolder',
    cursor: 'pointer',
    color: 'black',
  },
  iconSent: {
    color: green[500],
    marginLeft: 5,
    width: 15,
  },
  messageAlert: {
    paddingLeft: '1rem',
    marginTop: '5%',
    fontWeight: 'bolder',
    color: 'black',
    marginBottom:20
  },
});

export default useStyleItemList;
