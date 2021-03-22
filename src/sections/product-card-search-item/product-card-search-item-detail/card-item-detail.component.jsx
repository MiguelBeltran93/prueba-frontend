import React, {useEffect} from "react";
import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core";
import {useStyleItemDetail} from "./card-item-detail.style";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetailAction} from "../../../store/sections/product-card-input-search/product-card-input-search-actions";


export const CardItemDetail = ( {match}) => {
    const classes = useStyleItemDetail();
    //todo hacer q cambie el titulo segun el producto
    window.document.title ='Mercado Libre';
    const urlProductId = window.location.toString().split('/');

    const detailAux = {
        author: {
            name: 'mike',
            lastname: 'Belt'
        }, item: {
            id: '555',
            title: ' Deco - revert Sombrero Oxford',
            price: {
                currency: 'COP',
                amount: 50000,
                decimals: 55,
            }, picture: 'https://http2.mlstatic.com/D_765294-MLA31117482682_062019-O.jpg',
            condition: 'Nuevo',
            free_shipping: true,
            sold_quantity: 20,
            description: ' This impressive paella is a perfect party dish and a ' +
                'fun meal to cook together with your  guests. Add 1 cup of frozen ' +
                'peas along with the mussels, if you like.This impressive paella'
        }
    };


    const dispatch = useDispatch();
    const productDetail = detailAux;
    const productDetailReductor = useSelector(state => state.bundleListReducers.productDetail);
    const productId = urlProductId[urlProductId.length-1] || sessionStorage.getItem('itemSearchDetail');

    useEffect(() => {
        dispatch(getProductDetailAction(productId));
        // todo revisar
        // productDetailReductor && (window.document.title =productDetailReductor.productDetail.item.title)
    }, [productDetailReductor]);

    return (
        <Card className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                    <picture>
                        <source srcSet={''} media={'(min-width: 100px)'}/>
                        <img className={classes.img}
                             src={productDetail.item.picture || 'poner una imagen de error'} alt={''}/>
                    </picture>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardContent className={classes.cardPrice}>
                        <Typography variant="caption" display="block" gutterBottom>
                            {`${productDetail.item.condition} -  ${productDetail.item.sold_quantity}  Vendidos`}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {productDetail.item.title}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {`${productDetail.item.price.currency} ${productDetail.item.price.amount} `}
                            <span className={'decimal'}>{productDetail.item.price.decimals}</span>
                        </Typography>
                        {/*todo revisar lo q puede ir en i18n*/}
                        <Button variant="contained" className={classes.buttonBuy} color="primary" disableElevation>
                            Comprar
                        </Button>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <CardContent className={classes.cardDetail}>
                        {/*aqui i18n*/}
                        <Typography variant="h5" gutterBottom>
                            Descripcion del producto
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {productDetail.item.description}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}
