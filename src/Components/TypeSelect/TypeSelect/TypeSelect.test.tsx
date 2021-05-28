import { render } from '@testing-library/react';
import { TypeSelect } from './TypeSelect';

describe('TypeSelect', () => {
  const getButtons = () => {
    return render(<TypeSelect />);
  };
  it('TypeSelect should be rendered in the document', () => {
    const { getByTestId } = getButtons();
    expect(getByTestId('type-selector')).toBeInTheDocument();
  });
  it('Button should be rendered in the document', () => {
    const { getAllByTestId } = getButtons();
    const button = getAllByTestId('labelTest');
    expect(button[0]).toBeInTheDocument();
  });
});
