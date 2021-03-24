import React from 'react';
import {CardSearchItemListComponent} from './product-card-search-item-list/card-search-item-list.component';
import {ProductCardSearch} from '../product-card-input-search/product-card-input-search.component';


export const CardSearchItemComponent = () => {

    return (
        <React.Fragment>
            <ProductCardSearch/>
            <CardSearchItemListComponent/>
        </React.Fragment>
    )
};