import { useRouter } from 'next/router';
import Menu from '@/components/about_us/Menu'; // caminho relativo para o ficheiro

export default function PersonalPage({ name, content, active, src }) {
    const router = useRouter();

    return (
        <div className="personal-page bg-neutral-900">
        {/* <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center gap-20 pt-40"> */}

            {/* Navegação entre páginas */}
            <Menu className=" flex-1 mt-20" />

            {/* Conteúdo principal */}
            <div className="flex flex-col items-center gap-4">
                {/* Nome */}
                <div className="pt-12 pb-12 px-8">
                    <h1 className="text-4xl font-bold">
                    {/* <h1> */}
                        {name}
                    </h1>
                </div>

                <div className="bg-[#222] rounded-2xl shadow-lg p-10 w-[900px]">
                    <div className="flex items-center gap-16">

                        {/* Imagem */}
                        <div className="flex-shrink-0">
                            <img
                                src={src}
                                alt={name}
                                className="w-64 h-auto rounded-xl bg-white p-6"
                            />
                        </div>

                        {/* Informação pessoal */}
                        <div className>
                            {content}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
