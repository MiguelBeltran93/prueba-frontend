import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Button, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useStyleItemList} from "../product-card-search-item-list/card-search-item-list.style";
import {useStyleItemDetail} from "./card-item-detail.style";

export const CardItemDetail = () => {
    const classes = useStyleItemDetail();
    const itemSearchDetail = useSelector(state => state.bundleListReducers.itemDetail);
    //todo aqui usar label e i18n centralizarlo
    const currency = '$';
    const productDetail = {
        id: 2,
        name: 'pc2',
        price: 800000,
        picture: 'https://http2.mlstatic.com/D_991401-MLA31351342525_072019-O.jpg',
        title: 'Pc Cpu Amd A6 7480 Radeon R5 Ssd 120gb 4gb Ddr3 P1',
        city: 'Bogota'
    };


    useEffect(() => {
        console.log('---', itemSearchDetail)


    }, [itemSearchDetail])

    return (
        <div className={classes.root}>
            <CardContent>
                <Grid container>
                    <div>

                        <CardMedia
                            className={classes.media}
                            image={productDetail.picture}
                            title={productDetail.title}
                        />
                    </div>
                    <div>

                        <Typography
                            className={classes.pos}>{`${currency} ${productDetail.price}`}
                        </Typography>
                        <CardActions>
                            <Button>{productDetail.title}</Button>
                        </CardActions>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                        {/*todo i18n en ciudad*/}
                        <Typography className={classes.posCountry} color="textSecondary" title={'Ciudad'}>
                            {productDetail.city}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h3" >
                            h3. Heading
                        </Typography>
                        <Typography className={classes.posCountry} variant="body1" >
                            blablablablablablablablablablablablablablablablablablabl
                            ablablablablablablablablablablabla
                        </Typography>
                    </div>
                </Grid>
            </CardContent>
        </div>
    )
}
