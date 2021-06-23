import React from 'react';
import ProductCardSearch from '../product-card-input-search/product-card-input-search.component';
import {Helmet} from 'react-helmet';


export const ProductLanding = () => {
  return (
    <React.Fragment>
        <Helmet>
            <title>Mercado Libre | Busqueda</title>
            <meta name='description' content={'Mercado Libre: cuando nos necesites, vamos a seguir llegando'} />
        </Helmet>
      <ProductCardSearch />
    </React.Fragment>
  );
};
