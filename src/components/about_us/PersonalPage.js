import { useRouter } from 'next/router';
import Menu from '@/components/about_us/Menu'; // caminho relativo para o ficheiro

export default function PersonalPage({ name, content, active, src }) {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center gap-30 pt-40">

            {/* TO DO: botão selecionado tem cor diferente */}
{/*             <div className="mt-32 flex w-full justify-center gap-12">

                <div className="flex flex-col items-center">
                    <button onClick={() => router.push('/maria')}
                        className={`btn ${active === 'maria' ? 'btn-active' : 'btn-inactive'}`}>
                        Maria Cordeiro
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <button onClick={() => router.push('/leonor')}
                        className={`btn ${active === 'leonor' ? 'btn-active' : 'btn-inactive'}`}>
                        Leonor Azevedo
                    </button>
                </div>
            </div> */}

            <Menu />



            {/* Conteúdo principal */}
            <div className="flex flex-col  items-center gap-4">
                {/* Nome */}
                <div className="pt-12 pb-12 px-8">
                    <h1 className="text-4xl font-bold">
                        {name}
                    </h1>
                </div>

                <div className="bg-neutral-800 rounded-2xl shadow-lg p-10 w-[900px]">
                    <div className="flex items-center gap-16">

                        {/* Imagem */}
                        <div className="flex-shrink-0">
                            <img
                                src={ src }
                                alt={name}
                                className="w-64 h-auto rounded-xl bg-white p-6"
                            />
                        </div>

                        {/* Informação pessoal */}
                        <div className="text-gray-300 leading-relaxed">
                            {content}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
