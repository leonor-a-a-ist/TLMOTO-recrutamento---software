import Menu from '@/components/about_us/Menu'; // Botão usado para navegação entre páginas

export default function PersonalPage({ name, content, src }) {

    return (
        <div className="personal-page">

            {/* Navegação entre páginas */}
            <Menu />

            {/* Conteúdo principal */}
            <div className="personal-page_content">
                {/* Nome */}
                <h1>
                    {name}
                </h1>

                <div className="personal-page_content_card">

                    {/* Imagem */}
                    <div>
                        <img
                            src={src}
                            alt={name}
                        />
                    </div>

                    {/* Informação pessoal */}
                    <div className="personal-page_content_card_text">
                        {content}
                    </div>

                </div>
            </div>

        </div>
    );
}
