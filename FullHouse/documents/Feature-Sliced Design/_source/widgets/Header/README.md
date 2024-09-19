


<!-- Пример Использования в Главных файлах -->

```pug
include widgets/Header/index
```

```scss
`@import 'widgets/Header/index';`
```

```js
import { initHeader, initHeaderMenu } from './widgets/Header';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeaderMenu();
});
```