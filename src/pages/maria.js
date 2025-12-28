import PersonalPage from '../components/about_us/PersonalPage';

const mariaContent = (
    <div class="text-left text-gray-200 space-y-4">
        <p><strong>Nome:</strong> Maria Pimentel Cordeiro</p>
        <p><strong>Curso:</strong> Licenciatura em Engenharia Informática e de Computadores</p>
        <p><strong>Hobbies/interesses:</strong> Música, Filmes, experimentar coisas novas</p>
        <p><strong>Projetos:</strong> Projetos académicos no contexto do curso e alguns projetos desenvolvidos em estágios</p>
        <p><strong>O que espero aprender:</strong> Desenvolver projetos em contexto real, melhorar competências técnicas e comunicação</p>
        <p><strong>Como espero contribuir:</strong> Responsabilidade, espírito de equipa e vontade constante de aprender
        </p>
    </div>

);

export default function Maria() {
    return (
        <PersonalPage
            name="Maria Cordeiro"
            content={mariaContent}
            src="/maria.jpg"
        />
    );
}   
