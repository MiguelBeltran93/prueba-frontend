import React, {useState} from "react";
import {Button, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {useStyleItemList} from "../card-search-item-list.style";

export const CardSearchItemListSection = (props) => {
    const classes = useStyleItemList();
    const products = props.products;
    //todo aqui usar label e i18n
    const currency = '$';

    //todo unificar en un solo action los redirects
    const getDetalItem = (productId) => {
        window.history.pushState({item: productId}, '', `/items/${productId}`)
        window.location.replace(`/items/${productId}`)
        localStorage.setItem('itemSearchDetail', productId);
    }

    return (
        <div>
            {products.map(element => {
                return (
                    <div className={classes.root}>
                        <CardContent>
                            <Grid container>
                                <div>
                                    <CardMedia
                                        className={classes.media}
                                        image={element.picture}
                                        title={element.title}
                                        onClick={() => {
                                            getDetalItem(element.id)
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography className={classes.pos} onClick={() => {
                                        getDetalItem(element.id)
                                    }}>
                                        {`${currency} ${element.price}`}
                                    </Typography>

                                    <CardActions>
                                        <Button onClick={() => {
                                            getDetalItem(element.id)
                                        }}>{element.title}</Button>
                                    </CardActions>
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

}