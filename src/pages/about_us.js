import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="about_us">

            {/* Título */}
            <h1>
                Recrutas
            </h1>

            {/* Conjunto das imagens */}
            <div className="about_us_container">

                <Link href="/maria">
                    <img
                        src="/maria.jpg"
                        alt="Maria"
                    />
                    <span>Maria Cordeiro</span>
                </Link>

                <Link href='/leonor'>
                    <img
                        src="/leonor.jpg"
                        alt="Leonor"
                    />
                    <span>Leonor Azevedo</span>
                </Link>

            </div>
        </div>
    );
}
