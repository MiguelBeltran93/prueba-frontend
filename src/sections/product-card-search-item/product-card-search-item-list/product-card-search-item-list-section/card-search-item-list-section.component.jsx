import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import useStyleItemList from '../card-search-item-list.style';
import {
  SAVE_SEARCH_ITEM_DETAIL,
  saveItemSearchAction,
} from '../../../../store/sections/product-card-input-search/product-card-input-search-actions';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {formatToMoney, formatCategories} from '../../../utils';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {useTranslation} from 'react-i18next';
import PropTypes from "prop-types";

const CardSearchItemListSection = (props) => {
  const classes = useStyleItemList();
  const products = props.products.items;
  const categories = props.products.categories;
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const getDetailItem = (productId) => {
    dispatch(saveItemSearchAction(productId, SAVE_SEARCH_ITEM_DETAIL));
    sessionStorage.setItem('itemSearchDetail', productId);
  };

  return (
    <div>
      {categories && categories.length > 0 && (
        <Typography
          className={classes.posCategories}
          color="textSecondary"
          title={t('categorias.label')}
        >
          {formatCategories(categories.toString())}
        </Typography>
      )}
      {products &&
        products.map((element) => {
          return (
            <div className={classes.root}>
              <CardContent>
                <Grid container>
                  <div>
                    <NavLink
                      to={`/items/${element.id}`}
                      style={{textDecoration: 'none'}}
                      onClick={() => getDetailItem(element.id)}
                    >
                      <CardMedia
                        className={classes.media}
                        image={element.picture}
                        title={element.title}
                      />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to={`/items/${element.id}`}
                      style={{textDecoration: 'none'}}
                      onClick={() => getDetailItem(element.id)}
                    >
                      <Typography className={classes.pos}>
                        {`${element.price.currency} ${formatToMoney(
                          element.price.amount
                        )}`}
                        {element.free_shipping && (
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
                      </Typography>
                      <CardActions>
                        <Button>{element.title}</Button>
                      </CardActions>
                    </NavLink>
                    <Typography
                      className={classes.pos}
                      color="textSecondary"
                      title={'Ciudad'}
                    >
                      {element.city}
                    </Typography>
                  </div>
                </Grid>
              </CardContent>
            </div>
          );
        })}
    </div>
  );
};

CardSearchItemListSection.propTypes = {
  products: PropTypes.array
};

export default CardSearchItemListSection;
