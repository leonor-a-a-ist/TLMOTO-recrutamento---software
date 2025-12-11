import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to TLMOTO</h1>

      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={100}
        priority
      />

      <p className="mt-6 text-center max-w-md">
        This is the homepage. Use the navbar above to navigate to About Us.
      </p>
    </div>
  );
}
