import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import UbicationPage from '../pages/UbicationPage';

// Mock de los componentes hijos
vi.mock('../components/Header', () => ({
  default: () => <div>Mock Header</div>,
}));

vi.mock('../components/Footer', () => ({
  default: () => <div>Mock Footer</div>,
}));

vi.mock('../components/UbicationRestaurant', () => ({
  default: () => <div>Mock UbicationRestaurant</div>,
}));

describe('UbicationPage Component', () => {
  const mockProps = {
    title: 'Ubicación de nuestros restaurantes',
  };

  test('renderiza correctamente el componente con todos los props', () => {
    render(<UbicationPage {...mockProps} />);

    // Verifica que el título se renderice correctamente
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Verifica que los componentes hijos se rendericen
    expect(screen.getByText('Mock Header')).toBeInTheDocument();
    expect(screen.getByText('Mock UbicationRestaurant')).toBeInTheDocument();
    expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  });

  test('no renderiza el título si no se proporciona', () => {
    const { queryByText } = render(<UbicationPage title="" />);

    // Verifica que el título no se renderice si está vacío
    expect(queryByText(mockProps.title)).not.toBeInTheDocument();
  });
});