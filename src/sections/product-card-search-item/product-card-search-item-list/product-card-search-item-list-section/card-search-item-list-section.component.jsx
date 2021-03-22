import React, {useState} from "react";
import {Button, CardActions, CardContent, CardMedia, Grid, Link, Typography} from "@material-ui/core";
import {useStyleItemList} from "../card-search-item-list.style";
import {
    SAVE_SEARCH_ITEM,
    SAVE_SEARCH_ITEM_DETAIL,
    saveItemSearchAction
} from "../../../../store/sections/product-card-input-search/product-card-input-search-actions";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

export const CardSearchItemListSection = (props) => {
    const classes = useStyleItemList();
    const products = props.products;
    //todo aqui usar label e i18n
    const currency = '$';
    const dispatch = useDispatch();

    //todo unificar en un solo action los redirects
    const getDetalItem = (productId) => {
        dispatch(saveItemSearchAction(productId, SAVE_SEARCH_ITEM_DETAIL));
        sessionStorage.setItem('itemSearchDetail', productId);
    };

    return (
        <div>
            {products.map(element => {
                return (
                    <div className={classes.root}>
                        <CardContent>
                            <Grid container>
                                <div>
                                    <NavLink to={`/items/${element.id}`} style={{textDecoration: 'none'}}
                                             onClick={() => getDetalItem(element.id)}>
                                        <CardMedia
                                            className={classes.media}
                                            image={element.picture}
                                            title={element.title}
                                        />
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to={`/items/${element.id}`} style={{textDecoration: 'none'}}
                                             onClick={() => getDetalItem(element.id)}>
                                        <Typography
                                            className={classes.pos}>{`${currency} ${element.price}`}
                                        </Typography>
                                        <CardActions>
                                            <Button >{element.title}</Button>
                                        </CardActions>
                                    </NavLink>
                                    {/*todo i18n en ciudad*/}
                                    <Typography className={classes.posCountry} color="textSecondary" title={'Ciudad'}>
                                        {element.city}
                                    </Typography>
                                </div>
                            </Grid>
                        </CardContent>
                    </div>
                )
            })}
        </div>
    )

};