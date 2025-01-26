import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renderiza correctamente todos los logos de redes sociales', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Verifica que los logos de redes sociales estén presentes
    expect(screen.getByAltText('Facebook Logo')).toBeInTheDocument();
    expect(screen.getByAltText('X Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Tiktok Logo')).toBeInTheDocument();
  });

  test('los enlaces de redes sociales tienen las URLs correctas', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Verifica que los enlaces tengan las URLs correctas
    const facebookLink = screen.getByRole('link', { name: /facebook logo/i });
    const xLink = screen.getByRole('link', { name: /x logo/i });
    const instagramLink = screen.getByRole('link', { name: /instagram logo/i });
    const tiktokLink = screen.getByRole('link', { name: /tiktok logo/i });

    expect(facebookLink).toHaveAttribute(
      'href',
      'https://www.facebook.com/p/Teruzushi-61559864859770/'
    );
    expect(xLink).toHaveAttribute('href', 'https://x.com/Teruzushi_');
    expect(instagramLink).toHaveAttribute(
      'href',
      'https://www.instagram.com/teruzushi/'
    );
    expect(tiktokLink).toHaveAttribute(
      'href',
      'https://www.tiktok.com/@terusushi'
    );
  });

  test('las imágenes de los logos tienen los atributos src correctos', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Verifica que las imágenes tengan los atributos src correctos
    const facebookLogo = screen.getByAltText('Facebook Logo');
    const xLogo = screen.getByAltText('X Logo');
    const instagramLogo = screen.getByAltText('Instagram Logo');
    const tiktokLogo = screen.getByAltText('Tiktok Logo');

    expect(facebookLogo).toHaveAttribute('src', '../../public/facebook_logo.svg');
    expect(xLogo).toHaveAttribute('src', '../../public/x_logo.svg');
    expect(instagramLogo).toHaveAttribute('src', '../../public/instagram_logo.svg');
    expect(tiktokLogo).toHaveAttribute('src', '../../public/tiktok_logo.svg');
  });
});