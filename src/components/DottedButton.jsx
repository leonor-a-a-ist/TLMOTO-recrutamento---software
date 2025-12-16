import Link from 'next/link';

const DottedButton = () => {
    return (
        <Link
            href="/about_us"
            className="inline-block rounded-2xl border-2 text-2xl border-dashed border-white
                       bg-black px-[15rem] py-[1.5rem] font-semibold uppercase text-white
                       transition-all duration-300
                       hover:translate-x-[-4px] hover:translate-y-[-4px]
                       hover:rounded-md hover:shadow-[4px_4px_0px_black]
                       active:translate-x-[0px] active:translate-y-[0px]
                       active:rounded-2xl active:shadow-none mt-4"
        >
            About Us
        </Link>
    );
};

export default DottedButton;
