import Image from "next/image";
import TextType from "@/components/TextType";
import DottedButton from "@/components/DottedButton";
import { Bungee } from "next/font/google";

// Tipo de letra a usar para o título
const bungee = Bungee({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
    return (
        <div className="homepage">

            {/* Logo no canto superior direito */}
            <div className="logo">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                />
            </div>

            {/* Imagem de fundo escurecida - Apenas para mobile */}
            <div className="mobile-background">
                <Image
                    src="/homescreencut.jpg"
                    alt="background"
                    fill
                />
            </div>

            {/* Coluna esquerda: imagem - Apenas para desktop */}
            <div className="left-image">
                <Image
                    src="/homescreencut.jpg"
                    alt="home screen image"
                    fill
                />
            </div>

            {/* Coluna direita: conteúdo - Apenas para desktop */}
            <div className="right-content">

                <div className="text-container">

                    {/* Título */}
                    <TextType
                        text={["Recrutamento Software"]}
                        typingSpeed={75}
                        pauseDuration={5000}
                        showCursor={true}
                        cursorCharacter="|"
                        className={`${bungee.className} title`}
                    />

                    {/* Texto */}
                    <p className="subtitle">
                        Estás na Homepage. Vem conhecer as recrutas!
                    </p>
                </div>

                {/* Botão */}
                <div>
                    <DottedButton />
                </div>

            </div>
        </div>
    );
}