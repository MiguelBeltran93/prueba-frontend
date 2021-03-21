import {Productcomponent} from "../sections/Products.Component";
import {CardItemDetail} from "../sections/product-card-search-item/product-card-search-item-detail/card-item-detail.component";
import {CardSearchItemComponent} from "../sections/product-card-search-item/product-card-search-item.component";


const pathRoutes = () => ({
    [`/`]: {component: Productcomponent},
    [`/items`]: {component: CardSearchItemComponent},
    [`/items/:id`]: {component: CardItemDetail},
});
export {
    pathRoutes as routes,
}