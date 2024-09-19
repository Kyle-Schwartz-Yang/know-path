```pug


mixin title234(value='default title')
  h1 #{value}
  if block 
    block
//- Использования: 
  +title234()
    p Содержимое вложенное в миксин
    p Можно очень много вложить
```