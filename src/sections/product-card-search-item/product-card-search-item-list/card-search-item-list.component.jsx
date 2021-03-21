import React, {useState} from "react";
import {useStyleItemList} from "./card-search-item-list.style";
import {CardSearchItemListSection} from "./product-card-search-item-list-section/card-search-item-list-section.component";


export const CardSearchItemListComponent = () => {
    const classes = useStyleItemList();
    const productsList = [{
        id: 1,
        name: 'pc1',
        price: 50000,
        picture: 'https://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg',
        title: 'Pc Armada Cpu Amd Full Gamer A10-9700 16gb Ddr4 2400mhz 1080p Hdmi',
        city: 'Bogota'
    },
        {
            id: 2,
            name: 'pc2',
            price: 800000,
            picture: 'https://http2.mlstatic.com/D_856328-MLA42504174757_072020-I.jpg',
            title: 'Pc Cpu Amd A6 7480 Radeon R5 Ssd 120gb 4gb Ddr3 P1',
            city: 'Bogota'
        },
        {
            id: 3,
            name: 'pc3',
            price: 781511111,
            picture: 'https://http2.mlstatic.com/D_833151-MLA44217226837_122020-I.jpg',
            title: 'Pc Gamer Armada Ryzen 5 3400g 8 Gb Video Vega 11 1tb Disco',
            city: 'Bogota'
        },
        {
            id: 4,
            name: 'pc3',
            price: 781511111,
            picture: 'https://http2.mlstatic.com/D_835069-MLA44010979681_112020-I.jpg',
            title: 'Pc Gamer Armada Ryzen 5 3400g 8 Gb Video Vega 11 1tb Disco',
            city: 'Bogota'
        }]

    return (
        <div className={classes.rootContainer}>
            <CardSearchItemListSection products = {productsList}/>
        </div>
    )
}