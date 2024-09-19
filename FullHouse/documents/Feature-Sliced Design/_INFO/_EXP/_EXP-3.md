1. *app/:*

App.js: Корневой компонент приложения
styles/: Глобальные стили
providers/: Провайдеры для Redux, React Router, темы и т.д.
config/: Глобальные конфигурации приложения
types/: Глобальные типы TypeScript


2. *processes/:*

  auth/: Процесс аутентификации
  checkout/: Процесс оформления заказа
  onboarding/: Процесс ознакомления нового пользователя
  dataSync/: Процесс синхронизации данных

3. *pages/:*
  HomePage/
  ProfilePage/
  ProductListPage/
  ProductDetailPage/
  CartPage/
  CheckoutPage/
  NotFoundPage/
4. *widgets/:*
  Header/
  Footer/
  Sidebar/
  Navigation/
  SearchBar/
  Carousel/
  ProductCard/
  UserMenu/
  NotificationCenter/


5. *features/:*
  auth/
  ui/: LoginForm, RegisterForm, ForgotPasswordForm
  model/: authSlice, authSelectors
  api/: authApi

  productFilter/
  ui/: FilterForm, PriceRangeSlider
  model/: filterSlice

  cart/
  ui/: AddToCartButton, CartSummary
  model/: cartSlice

  reviews/
  ui/: ReviewForm, ReviewList
  api/: reviewsApi

  wishlist/
  ui/: AddToWishlistButton, WishlistCounter

  search/
  ui/: SearchInput, SearchResults
  api/: searchApi


6. *entities/:*

user/

ui/: UserAvatar, UserInfo
model/: userSlice, userSelectors
lib/: formatUserName


product/

ui/: ProductImage, ProductPrice
model/: productSlice
lib/: calculateDiscount


order/

ui/: OrderStatus
model/: orderSlice


category/

ui/: CategoryIcon
model/: categorySlice




7. *shared/:*

ui/

Button/
Input/
Modal/
Dropdown/
Loader/
ErrorBoundary/


api/

baseApi.js: Базовая настройка axios или fetch
endpoints.js: Константы с URL эндпоинтов


lib/

hooks/: useDebounce, useLocalStorage
helpers/: formatDate, formatCurrency


config/

constants.js
environment.js


assets/

icons/
images/