import {CardItemDetail} from '../sections/product-card-search-item/product-card-search-item-detail/card-item-detail.component';
import {CardSearchItemComponent} from '../sections/product-card-search-item/product-card-search-item.component';
import {ProductLanding} from '../sections/product-card-landing/product-landing.Component';


const pathRoutes = () => ({
    [`/`]: {component: ProductLanding},
    [`/items`]: {component: CardSearchItemComponent},
    [`/items/:id`]: {component: CardItemDetail},
});
export {
    pathRoutes as routes,
}