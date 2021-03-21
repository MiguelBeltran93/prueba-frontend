import {Productcomponent} from "../sections/Products.Component";
import {ProductItems} from "../sections/product-item/products-items.component";
import {CardSearchItemComponent} from "../sections/product-card-search-item/product-card-search-item.component";


const pathRoutes = () => ({
    [`/`]: {component: Productcomponent},
    [`/items`]: {component: CardSearchItemComponent},
    [`/items/:id`]: {component: Productcomponent},
});
export {
    pathRoutes as routes,
}