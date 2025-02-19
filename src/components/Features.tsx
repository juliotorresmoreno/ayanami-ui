const features = [
  {
    title: "Data Analysis",
    description: "Uncover hidden patterns with advanced AI.",
    icon: "📊", // Replace with an icon or SVG
  },
  {
    title: "Semantic Search",
    description: "Optimize information retrieval with vector-based search.",
    icon: "🔍", // Replace with an icon or SVG
  },
  {
    title: "Security & Scalability",
    description: "Reliable infrastructure for enterprise needs.",
    icon: "🛡️", // Replace with an icon or SVG
  },
  {
    title: "Real-Time Analytics",
    description: "Process and analyze streaming data in real-time for instant insights.",
    icon: "⏱️", // Replace with an icon or SVG
  },
  {
    title: "Natural Language Processing",
    description: "Leverage AI to understand and process human language.",
    icon: "💬", // Replace with an icon or SVG
  },
  {
    title: "Customizable Workflows",
    description: "Tailor Petra to fit your unique business processes.",
    icon: "⚙️", // Replace with an icon or SVG
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center animate-fade-in-up">
          Features
        </h2>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up animation-delay-200">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              {/* Feature Icon */}
              <div className="text-5xl text-blue-600 mb-6">{feature.icon}</div>

              {/* Feature Title */}
              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}