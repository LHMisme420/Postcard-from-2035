import SubmitForm from './SubmitForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold">Postcard From 2035</h1>
        <p className="text-2xl">Write a letter today.<br />We mail it to you on January 1, 2035.</p>
        
        <div className="text-6xl font-bold my-10">
          10,000 free left
        </div>

        <SubmitForm />
        
        <p className="text-sm opacity-70 mt-10">
          First 10,000 are 100% free + physical mail in 2035<br />
          #PostcardFrom2035
        </p>
      </div>
    </main>
  );
}

