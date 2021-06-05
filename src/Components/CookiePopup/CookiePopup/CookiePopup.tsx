import { Button, CheckBox, Paper } from 'byh-components';
import React, { useEffect, useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';
import './CookiePopup.scss';

interface Cookies {
  authorization: boolean;
  settings: boolean;
  recomendations: boolean;
}

export const CookiePopup: React.FC = (): React.ReactElement => {
  const [cookiesSettingsVisible, setCookiesSettingsVisible] = useState(true);
  const [cookies, setCokies] = useState<Cookies>({
    authorization: false,
    settings: false,
    recomendations: false,
  });

  const editCookieSettings = () => {
    setCokies((prevState) => ({
      ...prevState,
      authorization: !prevState.authorization,
    }));
  };

  console.log(cookies);

  return (
    <Paper className="cookiePopup__wrapper">
      <FaCookieBite className="cookiePopup__icon" />
      <div className="cookiePopup__textContent">
        <div className="cookiePopup__description">
          <p>
            Пользователь, хотим обратить Ваше внимание на то, что наш сайт использует файлы
            <span className="cookiePopup__span"> Cookie </span>
            для того, чтобы:
          </p>
          <ul className="cookiePopup__list">
            <li>Автоматически авторизовывать на сайте</li>
            <li>Сохранять Ваши настройки</li>
            <li>Показывать Вам подходящие рекомендации</li>
          </ul>
        </div>
      </div>
      <div className="cookiePopup__buttonBlock">
        <div className="cookiePopup__declineButton">
          <p>Настроить</p>
        </div>
        <Button fontSize={24} variant="primary" width={165} height={107} label="Cогласен" />
      </div>
    </Paper>
  );
};
