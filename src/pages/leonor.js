import PersonalPage from '../components/about_us/PersonalPage';

const leonorContent = (
    <div className="content">
        <p><strong>Nome:</strong> Leonor de Almeida e Azevedo</p>
        <p><strong>Curso:</strong> Licenciatura em Engenharia Informática e de Computadores</p>
        <p><strong>Hobbies/interesses:</strong> Trabalhos manuais, desporto, experimentar cafés e restaurantes novos</p>
        <p><strong>Fun fact:</strong> Já andei de camelo na Tunísia</p>
        <p><strong>Projetos:</strong> Projetos académicos, no contexto do curso, e alguns projetos para candidaturas, envolvendo frontend e backend</p>
        <p><strong>O que espero aprender:</strong> Desenvolvimento e gestão de websites (frontend e backend), gestão de dados, utilização de novas ferramentas, capacidades de pesquisa e pensamento crítico</p>
        <p><strong>Como espero contribuir:</strong> Ajudar na resolução de problemas, trazendo novas ideias, e mostrar vontade e disponibilidade para aprender e trabalhar nos projetos do departamento</p>
    </div>
);

export default function Leonor() {
    return (
        <PersonalPage
            name="Leonor Azevedo"
            content={leonorContent}
            active="leonor"
            src="/leonor.jpg"
        />
    );
}   