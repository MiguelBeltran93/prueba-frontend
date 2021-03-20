import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {CardMedia, Grid, Link} from "@material-ui/core";
import {useStylesSearch} from "./product-card-input-search.style";
import {saveItemSearchAction} from "../../store/sections/product-card-input-search/product-card-input-search-actions";
import {useDispatch, useSelector} from "react-redux";


export const ProductCardSearch = () => {
    const classes = useStylesSearch();
    const dispatch = useDispatch();
    const [item, setItem] = useState('');
    const itemSearch = useSelector(state => state.bundleListReducers.itemSearch);

    const actionEnterKey =  (event) => event.key === 'Enter' && callItem(event.target.value);

    const callItem = (itemSearch) => {
        //todo aqui se agrega el action q llama el api q trae los resultados
        dispatch(saveItemSearchAction(itemSearch))
        window.history.pushState({item: itemSearch}, '', `/items?search=${itemSearch}`)
        window.location.replace(`/items?search=${itemSearch}`)
        localStorage.setItem('itemSearch', itemSearch);
    }

    useEffect(()=>{
        return () =>{
            localStorage.clear();
        }
    },[itemSearch])
    return (
        <Card className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/descarga.png"
                            title="Logo Mercado Libre"
                        />
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.rootInput}>
                        {/*todo agregar i18n*/}
                        <InputBase
                            className={classes.input}
                            placeholder="Nunca dejes de buscar"
                            onChange={(event)=>{setItem(event.target.value)}}
                            onKeyDown={(event)=>{actionEnterKey(event)}}
                            defaultValue={localStorage.getItem('itemSearch') || ''}
                        />
                        <Divider className={classes.divider} orientation="vertical"/>
                        <IconButton onClick={() => callItem(item)} title="Buscar..." >
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </Grid>

            </Grid>
        </Card>
    )
}