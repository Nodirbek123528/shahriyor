import { CartPage, CategoriesPage, HomePage, NotFoundPage, OrdersPage, ProductPage } from "../pages";

export const routes = [
  {
    id: 1,
    component: <HomePage />,
    path: '/'
  },
  {
    id: 2,
    component: <CategoriesPage />,
    path: '/category/:id'
  },
  {
    id: 3,
    component: <NotFoundPage />,
    path: '*'
  },
  {
    id: 4,
    component: <ProductPage />,
    path: '/product/:slug'
  },
  {
    id: 5,
    component: <CartPage />,
    path: '/cart'
  },
  {
    id: 6,
    component: <OrdersPage />,
    path: '/orders'
  },

]