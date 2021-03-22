import React from "react";
import {Button, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {useStyleItemList} from "../card-search-item-list.style";
import {
    SAVE_SEARCH_ITEM_DETAIL,
    saveItemSearchAction
} from "../../../../store/sections/product-card-input-search/product-card-input-search-actions";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {ProductCardSearch} from "../../../product-card-input-search/product-card-input-search.component";

export const CardSearchItemListSection = (props) => {
    const classes = useStyleItemList();
    const products = props.products.items;
    const dispatch = useDispatch();

    const getDetailItem = (productId) => {
        dispatch(saveItemSearchAction(productId, SAVE_SEARCH_ITEM_DETAIL));
        sessionStorage.setItem('itemSearchDetail', productId);
    };

    return (
        <div>
            {products && products.map(element => {
                return (
                    <div className={classes.root}>
                        <CardContent>
                            <Grid container>
                                <div>
                                    <NavLink to={`/items/${element.id}`} style={{textDecoration: 'none'}}
                                             onClick={() => getDetailItem(element.id)}>
                                        <CardMedia
                                            className={classes.media}
                                            image={element.picture}
                                            title={element.title}
                                        />
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to={`/items/${element.id}`} style={{textDecoration: 'none'}}
                                             onClick={() => getDetailItem(element.id)}>
                                        <Typography
                                            className={classes.pos}>{`${element.price.currency} ${element.price.amount}`}
                                        </Typography>
                                        <CardActions>
                                            <Button>{element.title}</Button>
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