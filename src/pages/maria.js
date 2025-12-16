import PersonalPage from '../components/about_us/PersonalPage';

const mariaContent = (
    <p>
        From they fine john he give of rich he. <br />
        They age and draw mis like. <br />
        Improving end distrusts may instantly was household applauded incommode. <br />
        Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. <br />
    </p>
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