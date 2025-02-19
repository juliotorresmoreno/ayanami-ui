export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-24 h-24 bg-white rounded-full opacity-10 animate-blob animation-delay-2000 top-1/4 left-1/4"></div>
        <div className="absolute w-32 h-32 bg-white rounded-full opacity-10 animate-blob animation-delay-4000 top-1/2 right-1/4"></div>
        <div className="absolute w-20 h-20 bg-white rounded-full opacity-10 animate-blob animation-delay-6000 bottom-1/4 left-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Welcome to Petra
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          AI-powered vector databases to transform data into knowledge.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8 animate-fade-in-up animation-delay-400">
          <a
            href="#features"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}