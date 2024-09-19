
```pug




//- -------------------------------------------------------------
//- Использование: +Header()( class='new-class', id='unique' )
mixin Header()
  header.header&attributes(attributes)
    .header__container
    //--continue...
//- -------------------------------------------------------------



//- -------------------------------------------------------------
//- Использование: +Header( { class:'new-class', id: 'unique' } )
mixin Header(attrs)
  header.header&attributes(attrs)
    .header__container
    //--continue...
//- -------------------------------------------------------------

```