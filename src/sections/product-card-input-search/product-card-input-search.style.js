import { makeStyles } from '@material-ui/core/styles';

const useStylesSearch = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff159',
    padding: '10px 10px 50px 10px',
    textAlign: 'center',
  },
  media: {
    backgroundRepeat: 'no-repeat',
    float: 'right',
    cursor: 'pointer',
    height: 34,
    width: 134,
    marginTop: 11,
    marginRight: '1%',
  },
  rootInput: {
    padding: '2px 4px',
    marginTop: 10,
    display: 'flex',
    height: 40,
    minWidth: 235,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 40,
    margin: 0,
  },
}));

export default useStylesSearch;
