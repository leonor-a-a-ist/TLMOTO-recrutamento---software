import PersonalPage from '../components/about_us/PersonalPage';

const mariaContent = (
    <p>
        From they fine john he give of rich he. They age and draw mis like.
        Improving end distrusts may instantly was household applauded
        incommode. Why kept very ever home mrs. Considered sympathize ten
        uncommonly occasional assistance sufficient not.
    </p>
);

export default function Maria() {
    return (
        <PersonalPage
            name="Maria Cordeiro"
            content={mariaContent}
            active="maria"
        />
    );
}   