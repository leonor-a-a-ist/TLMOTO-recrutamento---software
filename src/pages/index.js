import Image from "next/image";
import TextType from "@/components/TextType";
import DottedButton from "@/components/DottedButton";
import { Bungee } from "next/font/google";

const bungee = Bungee({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row relative">

            {/* Logo - Responsivo */}
            <div className="absolute top-4 right-4 z-20">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                />
            </div>

            {/* Imagem de fundo com blur - Apenas visível no mobile */}
            <div className="fixed inset-0 lg:hidden z-0">
                <Image
                    src="/homescreencut.jpg"
                    alt="background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className="blur-none brightness-50"
                />
                {/* Overlay escuro para melhor legibilidade */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Coluna esquerda: imagem - Apenas visível no desktop */}
            <div className="hidden lg:block w-1/2 h-screen relative">
                <Image
                    src="/homescreencut.jpg"
                    alt="home screen image"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className="brightness-90"
                />
            </div>

            {/* Coluna direita: conteúdo */}
            <div className="relative w-full lg:w-1/2 bg-transparent lg:bg-black flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 min-h-screen z-10">

                <div className="flex flex-col items-center justify-center text-center max-w-2xl w-full space-y-6 sm:space-y-8 lg:space-y-10">
                    
                    {/* Título com TypeWriter - Responsivo */}
                    <div className="w-full">
                        <TextType
                            text={["Recrutamento Software"]}
                            typingSpeed={75}
                            pauseDuration={5000}
                            showCursor={true}
                            cursorCharacter="|"
                            className={`${bungee.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight`}
                        />
                    </div>

                    {/* Subtítulo - Responsivo */}
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg">
                        Estás na Homepage. Vem conhecer as recrutas!
                    </p>

                    {/* Botão */}
                    <div className="pt-4 sm:pt-6">
                        <DottedButton />
                    </div>
                </div>

            </div>
        </div>
    );
}