import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center gap-20">

            {/* Título */}
            <h1 className="about_us">
                Recrutas
            </h1>

            {/* Container das imagens */}
            <div className="flex w-full max-w-6xl justify-center gap-50">
                {/* Esquerda */}
                <Link href="/maria" className="flex flex-col items-center">
                        <img
                            src="/maria.jpg"
                            alt="Maria"
                            className="w-48 h-auto rounded-lg hover:opacity-80 transition"
                        />
                        <span className="mt-2 text-lg">Maria Cordeiro</span>
                </Link>

                {/* Direita */}
                <Link href='/leonor' className="flex flex-col items-center">
                        <img
                            src="/leonor.jpg"
                            alt="Leonor"
                            className="w-48 h-auto rounded-lg hover:opacity-80 transition"
                        />
                        <span className="mt-2 text-lg">Leonor Azevedo</span>
                </Link>
            </div>
        </div>
    );
}
