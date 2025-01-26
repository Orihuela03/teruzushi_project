import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header Component", () => {
  it("Los titulos se renderizan correctamente.", () => {
    const title1 = "Ubication";
    const title2 = "About the chef";

    render(
      <BrowserRouter>
        <Header title1={title1} title2={title2} />
      </BrowserRouter>
    );

    // Verifica que los títulos se renderizan correctamente
    expect(screen.getByText(title1)).toBeInTheDocument();
    expect(screen.getByText(title2)).toBeInTheDocument();
  });

  it("Los titulos contienen los enlaces correctos.", () => {
    const title1 = "Ubication";
    const title2 = "About the chef";

    render(
      <BrowserRouter>
        <Header title1={title1} title2={title2} />
      </BrowserRouter>
    );

    // Verifica que los enlaces tienen los atributos `href` correctos
    const link1 = screen.getByText(title1).closest("a");
    const link2 = screen.getByText(title2).closest("a");

    expect(link1).toHaveAttribute("href", "/Ubication");
    expect(link2).toHaveAttribute("href", "/AboutTheChef");
  });

  it("El logo contiene el enlace correcto.", () => {
    const title1 = "Ubication";
    const title2 = "About the chef";

    render(
      <BrowserRouter>
        <Header title1={title1} title2={title2} />
      </BrowserRouter>
    );

    // Verifica que el logo está presente y tiene el enlace correcto
    const logoLink = screen.getByAltText("Teruzushi Logo").closest("a");
    expect(logoLink).toHaveAttribute("href", "/");
  });
});