import React from "react";
import {makeStyles} from '@material-ui/core/styles';


export const useStylesSearch = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ffe600',
        padding: '10px 10px 20px 10px',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    rootCard: {
        backgroundColor: '#ffe600'
    },
    rootInput: {
        padding: '2px 4px',
        marginTop: 10,
        display: 'flex',
        maxWidth: 800,
        height: 40,
        minWidth: 100
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        float: 'right',
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 40,
        margin: 0,

    },
    media: {
        width: 90,
        height: 55,
        float: 'right',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    paperIcon: {
        backgroundColor: '#ffe600',
    },
}));

