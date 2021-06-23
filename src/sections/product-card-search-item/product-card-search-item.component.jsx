import React from 'react';
import CardSearchItemListComponent from './product-card-search-item-list/card-search-item-list.component';
import ProductCardSearch from '../product-card-input-search/product-card-input-search.component';
import {Helmet} from "react-helmet";

export const CardSearchItemComponent = () => {
  return (
    <React.Fragment>
        <Helmet>
            <title>Mercado Libre | Lista</title>
            <meta name='description' content={'Resultado de busqueda'} />
        </Helmet>
      <ProductCardSearch />
      <CardSearchItemListComponent />
    </React.Fragment>
  );
};
