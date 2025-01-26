import { render, screen } from '@testing-library/react';
import Reserve from '../components/Reserve';

describe('Reserve Component', () => {
  const mockProps = {
    title: 'Reserva tu experiencia',
    subtitle: 'Disfruta de la auténtica cocina japonesa',
    buttonContent: 'Reservar ahora',
  };

  test('renderiza correctamente el componente con todas las props', () => {
    render(<Reserve {...mockProps} />);

    // Verifica que el título, subtítulo y botón se rendericen correctamente
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(mockProps.buttonContent)).toBeInTheDocument();
  });

  test('renderiza el logo correctamente', () => {
    render(<Reserve {...mockProps} />);

    // Verifica que la imagen del logo esté presente
    const logo = screen.getByAltText('Teruzushi logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '../../public/logo.svg');
  });

  test('el botón tiene el enlace correcto', () => {
    render(<Reserve {...mockProps} />);

    // Verifica que el botón tenga el enlace correcto
    const buttonLink = screen.getByRole('link', { name: mockProps.buttonContent });
    expect(buttonLink).toHaveAttribute('href', '/Reserve');
  });

  test('no renderiza el título si no se proporciona', () => {
    const { queryByText } = render(<Reserve {...mockProps} title="" />);

    // Verifica que el título no se renderice si está vacío
    expect(queryByText(mockProps.title)).not.toBeInTheDocument();
  });

  test('no renderiza el subtítulo si no se proporciona', () => {
    const { queryByText } = render(<Reserve {...mockProps} subtitle="" />);

    // Verifica que el subtítulo no se renderice si está vacío
    expect(queryByText(mockProps.subtitle)).not.toBeInTheDocument();
  });

  test('no renderiza el botón si no se proporciona contenido', () => {
    const { queryByText } = render(<Reserve {...mockProps} buttonContent="" />);

    // Verifica que el botón no se renderice si está vacío
    expect(queryByText(mockProps.buttonContent)).not.toBeInTheDocument();
  });
});