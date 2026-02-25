export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-gray-900 font-sans">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center py-20 px-6">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Climon</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Welcome to Climon — New Developers Ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#features"
            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Learn More
          </a>
          <a
            href="#get-started"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Get Started
          </a>
        </div>
      </main>
    </div>
  );
}
