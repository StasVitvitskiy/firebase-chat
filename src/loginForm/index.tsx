import React, { PureComponent } from "react";

// 1) сделать UI
// 2) приконнектить к стору
// 3) в сторе должны храниться данные формы (при изменении данных в инпуте диспатчится экшен)
// 4) при нажатии на сабмит диспатчится асинхронный экшен в котором создается пользователь в базе данных
export class LoginForm extends PureComponent {
  render() {
    return <div>LOGIN FORM</div>;
  }
}
