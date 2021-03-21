import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';

export const useStyleItemList = makeStyles({
    rootContainer: {
        marginTop:'2%',
        float:'auto'
    },
    root: {
        minWidth: 200,
        maxWidth: 1000,
        maxHeight: 1000,
        minHeight: 200,
        margin: '0% 20% 0% 26%',
        backgroundColor: 'white',
        borderBottom: '#E3E4E5 1px solid'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        paddingLeft: '1rem',
        marginTop: 12,
        fontWeight: 500,
        cursor:'pointer'
    },
    posCountry: {
        paddingLeft: '1rem',
        marginTop: 50,
        fontWeight: 500,
    },
    media: {
        height: 140,
        width: 140,
        marginRight: 10,
        cursor:'pointer'
    },
});
