import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CookiePopup } from './CookiePopup';

describe('Cookie PopUp', () => {
  const renderCookiePopup = (args?: any) => render(<CookiePopup {...args} />);

  it('Cookie Popup should be in the Document', () => {
    const { getByText } = renderCookiePopup();
    expect(getByText('Cookie')).toBeInTheDocument();
  });

  it('Cookie Popup should display checkboxes after clicking on mange button', () => {
    const { getByTestId } = renderCookiePopup();
    userEvent.click(getByTestId('manage'));
    expect(getByTestId('checkbox-auth')).toBeInTheDocument();
  });

  it('Cookie Popup should check checkboxes', () => {
    const { getByTestId } = renderCookiePopup();
    userEvent.click(getByTestId('manage'));
    userEvent.click(getByTestId('checkbox-auth'));
    userEvent.click(getByTestId('checkbox-settings'));
    userEvent.click(getByTestId('checkbox-rec'));
  });
});
