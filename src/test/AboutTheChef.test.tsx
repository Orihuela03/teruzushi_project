import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import AboutTheChef from '../pages/AboutTheChef';

// Mock de los componentes hijos
vi.mock('../components/Header', () => ({
  default: ({ title1, title2 }: { title1: string; title2: string }) => (
    <header>
      <nav>
        <ul id="textSection">
          <li>
            <a href="/Ubication">{title1}</a>
          </li>
          <li>
            <a href="/AboutTheChef">{title2}</a>
          </li>
        </ul>
      </nav>
      <nav>
        <img id="logoImage" src="../../public/h_logo.svg" alt="Teruzushi Logo" />
      </nav>
    </header>
  ),
}));

vi.mock('../components/ChefInformation', () => ({
  default: ({ title, subtitle }: { title: string; subtitle: string }) => (
    <section id="containerChefInforamtion">
      <div id="informationAboutTheChef">
        <div id="greySquare">
          <div id="containerText">
            <h1>{title}</h1>
            <a>{subtitle}</a>
          </div>
        </div>
        <div id="imageSquare">
          <img src="../../public/happy_chef.svg" alt="Chef image" />
          <img src="../../public/chef_photo.svg" alt="Chef image" />
        </div>
      </div>
    </section>
  ),
}));

vi.mock('../components/HighlightsChef', () => ({
  default: (props: any) => (
    <section id="highlightsChefContainer">
      <div id="year2024">
        <h1 className="Year">2024</h1>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{props.January}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/japan_flag.svg" alt="Japan Flag" />
          </div>
          <div className="HighlightsText">
            <a>{props.Highlight1}</a>
          </div>
        </div>
      </div>
    </section>
  ),
}));

vi.mock('../components/Footer', () => ({
  default: () => <footer>Mock Footer</footer>,
}));

describe('AboutTheChef Component', () => {
  const mockProps = {
    title: 'About the Chef',
    subtitle: 'Highlights',
  };

  test('renderiza correctamente el componente AboutTheChef y sus hijos', () => {
    render(<AboutTheChef {...mockProps} />);

    // Verifica que el componente padre se renderice correctamente
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();

    // Verifica que los componentes hijos se rendericen correctamente
    expect(screen.getByText('Ubication')).toBeInTheDocument(); // Header
    expect(screen.getByText('About the chef')).toBeInTheDocument(); // Header
    expect(screen.getByText('Takayoshi Watanabe')).toBeInTheDocument(); // ChefInformation
    expect(screen.getByText(/Kindai University featured/i)).toBeInTheDocument(); // HighlightsChef
    expect(screen.getByText('Mock Footer')).toBeInTheDocument(); // Footer
  });

  test('pasa las props correctas a los componentes hijos', () => {
    render(<AboutTheChef {...mockProps} />);

    // Verifica que las props se pasen correctamente a los componentes hijos
    expect(screen.getByText('Ubication')).toBeInTheDocument(); // Header
    expect(screen.getByText('About the chef')).toBeInTheDocument(); // Header
    expect(screen.getByText('Takayoshi Watanabe')).toBeInTheDocument(); // ChefInformation
    expect(screen.getByText(/Kindai University featured/i)).toBeInTheDocument(); // HighlightsChef
  });
});