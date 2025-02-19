import imgSrc from '@/assets/vectors.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center animate-fade-in-up">
          What is Petra?
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up animation-delay-200">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Petra is an AI-powered platform that leverages vector databases to optimize large-scale data search and analysis. Our cutting-edge technology transforms raw data into actionable insights, enabling businesses to make smarter decisions faster.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With Petra, you can unlock the full potential of your data, whether it&rsquo;s for machine learning, natural language processing, or real-time analytics. Our platform is designed to scale with your needs, ensuring high performance and reliability.
            </p>
            <div className="mt-6">
              <a
                href="#features"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src={imgSrc}
              alt="About Petra"
              className="w-full max-w-md rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}