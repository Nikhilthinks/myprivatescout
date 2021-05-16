import React from "react"
import ReactDOM from "react-dom"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchBox: {
      width: '40ch',
      position: 'absolute',
    },
    searchDiv: {
        width: 'auto',
        height:'0ch',
        paddingLeft: '300px',
        paddingTop: '1.2ch',
        alignSelf: 'center',
        marginLeft: '50px',
        alignItems: 'center',
        marginTop: '0',
      },
  },
);

function Search(){

    const classes = useStyles();

return(
    <form  /*className = "searchBox"*/ action="">
    <div className = {classes.searchDiv}>
    <TextField className = {classes.searchBox} label="Search" type="search" variant="outlined" size= "small" />
    </div>
  </form>
)
}
export default Search;