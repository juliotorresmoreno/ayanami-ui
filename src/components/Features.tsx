const features = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    description: "Uncover hidden patterns with advanced AI.",
    icon: "📊",
  },
  {
    id: "semantic-search",
    title: "Semantic Search",
    description: "Optimize information retrieval with vector-based search.",
    icon: "🔍",
  },
  {
    id: "security-scalability",
    title: "Security & Scalability",
    description: "Reliable infrastructure for enterprise needs.",
    icon: "🛡️",
  },
  {
    id: "real-time-analytics",
    title: "Real-Time Analytics",
    description: "Process and analyze streaming data in real-time for instant insights.",
    icon: "⏱️",
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    description: "Leverage AI to understand and process human language.",
    icon: "💬",
  },
  {
    id: "customizable-workflows",
    title: "Customizable Workflows",
    description: "Tailor Petra to fit your unique business processes.",
    icon: "⚙️",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center animate-fade-in-up">
          Features
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up animation-delay-200">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl text-blue-600 mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>

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