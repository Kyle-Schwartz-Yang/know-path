`- Размещение табов`

features/
  gameCatalog/
    ui/
      TabbedGameSystem/
        TabbedGameSystem.pug (или .jsx/.tsx)
        TabbedGameSystem.scss
    model/
      gameDataSlice.js
    api/
      gameApi.js


<!-- --------------------------------------------- -->

Примеры : 

features/
  auth/
    ui/
      LoginForm/
      RegisterForm/
      ForgotPasswordForm/
    model/
      authSlice.js
      authSelectors.js
    api/
      authApi.js
    lib/
      validatePassword.js
    config/
      authConstants.js


<!-- --------------------------------------------- -->

`- Модальное окно `
    app/
    processes/
    pages/
      HomePage/
    widgets/
      Header/
      Footer/
      ModalGroup/
    features/
      auth/
        ui/
          ModalSignIn/
      info/
        ui/
          ModalInfo/
    entities/
    shared/
      SuccessModal/
      ErrorModal/

