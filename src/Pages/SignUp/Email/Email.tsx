import React from 'react';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import { MdEmail } from 'react-icons/md';
import { Button, Title } from 'byh-components';
import './Email.scss';
import { Trans, useTranslation } from 'react-i18next';

export const Email: React.FC = (): React.ReactElement => {
  const [mayResend, setMayResend] = React.useState(false);
  const [timer, setTimer] = React.useState(60);
  const { t } = useTranslation();

  React.useEffect(() => {
    const emailTimer = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer <= 0) {
      setMayResend(true);
      clearTimeout(emailTimer);
    }
  }, [timer]);

  const resendEmail = () => {
    setMayResend(false);
    setTimer(60);
    console.log('Resended');
  };

  return (
    <AuthTemplate>
      <div className="emailValid__wrapper">
        <div className="emailValid__content">
          <MdEmail className="emailValid__icon" />
          <Title className="emailValid__title" variant="primary" type="medium">
            {t('signUp:emailValid.text')}
          </Title>
          <p className="emailValid__email">
            <i>te*******st@gmail.com</i>
          </p>
          <div className="emailValid__resendWrapper">
            {mayResend ? (
              <Button onClick={resendEmail} variant="primary" width={200} height={40}>
                {t('signUp:emailValid.resend.button')}
              </Button>
            ) : (
              <>
                <p className="emailValid__resend__text">
                  {t('signUp:emailValid.resend.doNotGetEmail')}
                </p>
                <Trans i18nKey="signUp:emailValid.resend.wait">
                  <p className="try">Подождите {{ timer }} сек.</p>
                </Trans>
              </>
            )}
          </div>
        </div>
      </div>
    </AuthTemplate>
  );
};
