import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center gap-20">

            {/* Título */}
            {/* COLOCAR ESPAÇO ANTES DISTO; CENTRALIZAR */}
            <h1 className="text-4xl font-bold mb-40">Recrutas</h1>

            {/* Container das imagens */}
            <div className="flex w-full max-w-6xl justify-center gap-50">
                {/* Esquerda */}
                <Link href="/maria">
                    <div className="flex flex-col items-center">
                        <img
                            src="/stickfigure.jpg"
                            alt="Maria"
                            className="w-48 h-auto rounded-lg hover:opacity-80 transition"
                        />
                        <span className="mt-2 text-lg">Maria Cordeiro</span>
                    </div>
                </Link>

                {/* Direita */}
                <Link href='/leonor'>
                    <div className="flex flex-col items-center">
                        <img
                            src="/leonor.jpg"
                            alt="Leonor"
                            className="w-48 h-auto rounded-lg hover:opacity-80 transition"
                        />
                        <span className="mt-2 text-lg">Leonor Azevedo</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
