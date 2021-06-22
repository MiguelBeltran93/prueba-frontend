import React, { useEffect } from 'react';
import useStyleItemList from './card-search-item-list.style';
import CardSearchItemListSection from './product-card-search-item-list-section/card-search-item-list-section.component';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListAction } from '../../../store/sections/product-card-input-search/product-card-input-search-actions';

const CardSearchItemListComponent = () => {
  const classes = useStyleItemList();
  const dispatch = useDispatch();
  const productsListData = useSelector(
    (state) => state.productReducer.productsList
  );
  const search = window.location.search;
  const getParam = new URLSearchParams(search).get('search');
  const productType = getParam || sessionStorage.getItem('itemSearch');

  useEffect(() => {
    dispatch(getProductListAction(productType));
  }, [getParam]);

  return (
    <div className={classes.rootContainer}>
      {productsListData && productsListData.items && (
        <CardSearchItemListSection products={productsListData} />
      )}
    </div>
  );
};

export default CardSearchItemListComponent;
