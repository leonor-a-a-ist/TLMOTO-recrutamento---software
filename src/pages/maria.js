import PersonalPage from '../components/about_us/PersonalPage';

const mariaContent = (
        <div class="text-left text-gray-200 space-y-4">
  <ul class="list-disc list-inside space-y-2">
    <li>
      <span class="font-semibold">Nome:</span> Maria Pimentel Cordeiro
    </li>
    <li>
      <span class="font-semibold">Curso:</span> Licenciatura em Engenharia Informática e de Computadores
    </li>
    <li>
      <span class="font-semibold">Hobbies/interesses:</span> Música, Filmes, experimentar coisas novas
    </li>
    <li>
      <span class="font-semibold">Projetos:</span> Projetos académicos no contexto do curso e alguns projetos desenvolvidos para estágios
    </li>
    <li>
      <span class="font-semibold">O que espero aprender:</span> Desenvolver projetos em contexto real, melhorar competências técnicas e comunicação
    </li>
    <li>
      <span class="font-semibold">Como espero contribuir:</span> Responsabilidade, espírito de equipa e vontade constante de aprender
    </li>
  </ul>
</div>

);

export default function Maria() {
    return (
        <PersonalPage
            name="Maria Cordeiro"
            content={mariaContent}
            active="maria"
            src = "/maria.jpg"
        />
    );
}   