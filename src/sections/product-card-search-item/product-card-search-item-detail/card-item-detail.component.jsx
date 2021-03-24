import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {Button, Card, CardContent, Grid, Typography} from '@material-ui/core';
import {useStyleItemDetail} from './card-item-detail.style';
import {getProductDetailAction} from '../../../store/sections/product-card-input-search/product-card-input-search-actions';
import {ProductCardSearch} from '../../product-card-input-search/product-card-input-search.component';

/**
 *
 * @returns {*}
 * @constructor
 */
export const CardItemDetail = () => {

    const classes = useStyleItemDetail();
    const dispatch = useDispatch();
    const productDetail = useSelector(state => state.productReducer.productDetail);
    const {id} = useParams();
    const productId = id;
    productDetail && productDetail.item && (window.document.title = productDetail.item.title);
    sessionStorage.setItem('itemSearch', '');

    useEffect(() => {
        dispatch(getProductDetailAction(productId));
    }, []);

    return (
        <React.Fragment>
            <ProductCardSearch/>
            <Card className={classes.root}>
                {productDetail && productDetail.item && <Grid container spacing={1}>
                    <Grid item xs={12} sm={8}>
                        <picture>
                            <img className={classes.img}
                                 src={productDetail.item.picture || ''} alt={''}/>
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
                            <Button variant="contained" className={classes.buttonBuy} color="primary" disableElevation href={'https://bit.ly/3slqwGe'}>
                                Comprar
                            </Button>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CardContent className={classes.cardDetail}>
                            {/*todo aqui i18n*/}
                            <Typography variant="h5" gutterBottom>
                                Descripcion del producto
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {productDetail.item.description}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>}
            </Card>
        </React.Fragment>
    )
};
