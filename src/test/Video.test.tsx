import { render, screen } from "@testing-library/react";
import Video from "../components/Video";

describe("Video Component", () => {
  it("El video se renderiza correctamente y contiene todas los atributos esperados.", () => {
    render(<Video />);

    // Verifica que el video está presente
    const videoElement = screen.getByTestId("video-element");
    expect(videoElement).toBeInTheDocument();

    // Verifica que el video tiene la propiedad `autoPlay`
    expect(videoElement).toHaveAttribute("autoPlay");

    // Verifica que el video tiene la propiedad `loop`
    expect(videoElement).toHaveAttribute("loop");

    // Verifica que el video tiene el atributo `src` correcto
    expect(videoElement).toHaveAttribute("src", "../../public/TERUZUSHI.mp4");
  });

  it("La imagen se renderiza correctamente", () => {
    render(<Video />);

    // Verifica que la imagen está presente
    const imageElement = screen.getByAltText("Teruzushi Logo");
    expect(imageElement).toBeInTheDocument();

    // Verifica que la imagen tiene el atributo `src` correcto
    expect(imageElement).toHaveAttribute("src", "../../public/logo-main.svg");
  });
});