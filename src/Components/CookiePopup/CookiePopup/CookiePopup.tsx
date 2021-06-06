import { Button, CheckBox, Paper } from 'byh-components';
import React from 'react';
import { FaCookieBite } from 'react-icons/fa';
import './CookiePopup.scss';

interface Cookies {
  authorization: boolean;
  settings: boolean;
  recomendations: boolean;
}

export const CookiePopup: React.FC = (): React.ReactElement => {
  const [cookiesSettingsVisible, setCookiesSettingsVisible] = React.useState(true);
  const [cookies, setCokies] = React.useState<Cookies>({
    authorization: false,
    settings: false,
    recomendations: false,
  });

  const editAuthCookieSettings = () => {
    setCokies((prevState) => ({
      ...prevState,
      authorization: !prevState.authorization,
    }));
  };

  const editRecCookieSettings = () => {
    setCokies((prevState) => ({
      ...prevState,
      recomendations: !prevState.recomendations,
    }));
  };

  const editSettingsCookieSettings = () => {
    setCokies((prevState) => ({
      ...prevState,
      settings: !prevState.settings,
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
            <li>
              {cookiesSettingsVisible && (
                <CheckBox
                  className="cookiePopup__checkbox"
                  checked={cookies.authorization}
                  onChangeHandler={editAuthCookieSettings}
                />
              )}
              Автоматически авторизовывать на сайте
            </li>
            <li>
              {cookiesSettingsVisible && (
                <CheckBox
                  className="cookiePopup__checkbox"
                  checked={cookies.settings}
                  onChangeHandler={editSettingsCookieSettings}
                />
              )}
              Сохранять Ваши настройки
            </li>
            <li>
              {cookiesSettingsVisible && (
                <CheckBox
                  className="cookiePopup__checkbox"
                  checked={cookies.recomendations}
                  onChangeHandler={editRecCookieSettings}
                />
              )}
              Показывать Вам подходящие рекомендации
            </li>
          </ul>
        </div>
      </div>
      <div className="cookiePopup__buttonBlock">
        <div
          className="cookiePopup__declineButton"
          onClick={() => setCookiesSettingsVisible(!cookiesSettingsVisible)}>
          <p>{cookiesSettingsVisible ? 'Скрыть' : 'Настроить'}</p>
        </div>
        <Button fontSize={24} variant="primary" width={165} height={107} label="Принять" />
      </div>
    </Paper>
  );
};
