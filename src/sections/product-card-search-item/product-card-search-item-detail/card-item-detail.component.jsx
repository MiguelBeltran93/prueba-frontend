import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import useStyleItemDetail from './card-item-detail.style';
import { getProductDetailAction } from '../../../store/sections/product-card-input-search/product-card-input-search-actions';
import ProductCardSearch from '../../product-card-input-search/product-card-input-search.component';
import { useTranslation } from 'react-i18next';
import { formatToMoney } from '../../utils';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {Helmet} from "react-helmet";

/**
 *
 * @returns {*}
 * @constructor
 */
const CardItemDetail = () => {
  const { t } = useTranslation();
  const classes = useStyleItemDetail();
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.productReducer.productDetail
  );
  const { id } = useParams();
  const productId = id;
  productDetail &&
    productDetail.item &&
    (window.document.title = productDetail.item.title);
  sessionStorage.setItem('itemSearch', '');

  useEffect(() => {
    dispatch(getProductDetailAction(productId));
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        {productDetail &&
        productDetail.item &&
        <title>{productDetail.item.title}</title>}
        <meta name='description' content={'Detalle de producto seleccionado'} />
      </Helmet>
      <ProductCardSearch />
      <Card className={classes.root}>
        {productDetail && productDetail.item && (
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
              <picture>
                <img
                  className={classes.img}
                  src={productDetail.item.picture || ''}
                  alt={''}
                />
              </picture>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardContent className={classes.cardPrice}>
                <Typography variant="caption" display="block" gutterBottom>
                  {`${t(productDetail.item.condition)} -  ${
                    productDetail.item.sold_quantity
                  } ${t('vendidos.label')} `}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {productDetail.item.title}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {`${productDetail.item.price.currency} ${formatToMoney(
                    productDetail.item.price.amount
                  )} `}
                  <span className={'decimal'}>
                    {productDetail.item.price.decimals || '00'}
                    {productDetail.item.free_shipping && (
                      <span
                        className={'icon-free-shipping'}
                        title={t('envio.label')}
                      >
                        <LocalShippingIcon
                          fontSize="small"
                          className={classes.iconSent}
                          title={'envio gratis'}
                        />
                      </span>
                    )}
                  </span>
                </Typography>

                <Button
                  variant="contained"
                  className={classes.buttonBuy}
                  color="primary"
                  disableElevation
                  href={'https://bit.ly/3slqwGe'}
                >
                  {t('comprar.label')}
                </Button>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={8}>
              <CardContent className={classes.cardDetail}>
                <Typography variant="h5" gutterBottom>
                  {t('descripcion.label')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {productDetail.item.description}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        )}
      </Card>
    </React.Fragment>
  );
};

export default CardItemDetail;
