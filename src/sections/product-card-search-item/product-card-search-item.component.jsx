import React, {useEffect} from "react";
import {CardSearchItemListComponent} from "./product-card-search-item-list/card-search-item-list.component";
import {useDispatch, useSelector} from "react-redux";
import {bundleListReducers} from "../../store/sections/product-card-input-search/product-card-input-search-reducers";
import {getProductListAction} from "../../store/sections/product-card-input-search/product-card-input-search-actions";


export const CardSearchItemComponent = ()=> {

    return (
        <div className={''}>
            <CardSearchItemListComponent/>
        </div>
    )
}