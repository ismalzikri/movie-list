import { render, screen } from '@testing-library/react';
import Card from '@components/Card';

describe('Card', () => {
  const mockProps = {
    imgUrl: '/http://image.tmdb.org/t/p', // Update the imgUrl to a valid relative path
    title: 'Test Title',
    subtitle: 'Test Subtitle',
  };

  it('renders the title and subtitle correctly', () => {
    render(<Card {...mockProps} />);

    const titleElement = screen.getByText(mockProps.title);
    const subtitleElement = screen.getByText(mockProps.subtitle);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders only the title if subtitle is not provided', () => {
    const propsWithoutSubtitle = { ...mockProps, subtitle: undefined };
    render(<Card {...propsWithoutSubtitle} />);

    const titleElement = screen.getByText(mockProps.title);
    const subtitleElement = screen.queryByText(mockProps.subtitle);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeNull();
  });
});
