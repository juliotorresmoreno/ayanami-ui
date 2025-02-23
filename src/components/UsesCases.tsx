const useCases = [
  {
    id: "semantic-search",
    title: "Semantic Search",
    description:
      "Petra enables advanced search capabilities across large datasets, understanding context and intent behind queries. Perfect for enterprise search engines or knowledge platforms.",
    icon: "🔍",
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    description:
      "Uncover hidden patterns and insights in your data with Petra's AI-powered analytics. Ideal for business intelligence and decision-making.",
    icon: "📊",
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    description:
      "Leverage Petra's NLP capabilities to process and analyze text data, enabling sentiment analysis, chatbots, and more.",
    icon: "💬",
  },
  {
    id: "real-time-analytics",
    title: "Real-Time Analytics",
    description:
      "Process and analyze streaming data in real-time with Petra, ensuring up-to-date insights for dynamic environments.",
    icon: "⏱️",
  },
  {
    id: "recommendation-systems",
    title: "Recommendation Systems",
    description:
      "Build personalized recommendation engines using Petra's vector-based similarity search for e-commerce, media, and more.",
    icon: "🎯",
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection",
    description:
      "Identify anomalies and detect fraudulent activities in real-time with Petra's advanced pattern recognition capabilities.",
    icon: "🛡️",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center animate-fade-in-up">
          Use Cases
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up animation-delay-200">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl text-blue-600 mb-6">{useCase.icon}</div>

              <h3 className="text-2xl font-semibold text-gray-800">
                {useCase.title}
              </h3>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}