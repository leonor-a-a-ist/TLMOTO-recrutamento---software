import PersonalPage from '../components/about_us/PersonalPage';

const leonorContent = (
    <p>
        Nome: Leonor de Almeida e Azevedo <br />
        Curso: Licenciatura em Engenharia Informática e de Computadores <br />
        Hobbies/interesses: Trabalhos manuais, desporto, experimentar cafés e restaurantes novos <br />
        Fun fact: Já andei de camelo na Tunísia <br />
        Projetos: <br />
        O que espero aprender: Projetos académicos, feitos no contexto do curso, e alguns projetos desenvolvidos para candidaturas, envolvendo frontend e backend<br />
        Como espero contribuir: Espero  <br />

    </p>
);

export default function Leonor() {
    return (
        <PersonalPage
            name="Leonor Azevedo"
            content={leonorContent}
            active="leonor"
            src = "/leonor.jpg"
        />
    );
}   