import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {CardMedia, Grid} from '@material-ui/core';
import {useStylesSearch} from './product-card-input-search.style';
import {useTranslation} from 'react-i18next';

/**
 *
 * @returns {*}
 * @constructor
 */
export const ProductCardSearch = () => {
    const {t} = useTranslation();
    const classes = useStylesSearch();
    const history = useHistory();

    const [item, setItem] = useState('');
    const actionEnterKey = (event) => event.key === 'Enter' && callItem(event && event.target && event.target.value ? event.target.value : '');

    const callItem = (itemSearch) => {
        if(itemSearch!==''){
            history.push(`/items?search=${itemSearch}`);
            sessionStorage.setItem('itemSearch', itemSearch);
        }
    };

    return (
        <Card className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <a href={'/'}>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/logoSearch.png"
                            title={t('tituloLogo.label')}
                            onClick={()=>{sessionStorage.setItem('itemSearch', '')}}
                        />
                    </a>

                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.rootInput}>
                        <InputBase
                            className={classes.input}
                            placeholder={t('placheHolder.label')}
                            onChange={(event) => {
                                setItem(event.target.value)
                            }}
                            onKeyDown={(event) => {
                                actionEnterKey(event)
                            }}
                            defaultValue={sessionStorage.getItem('itemSearch') || ''}
                        />
                        <Divider className={classes.divider} orientation="vertical"/>
                        <IconButton onClick={() => callItem(item)} title={t('buscar.label')}>
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </Grid>

            </Grid>
        </Card>
    )
}