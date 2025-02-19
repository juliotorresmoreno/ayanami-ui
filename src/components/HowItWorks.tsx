const steps = [
  {
    title: "Data Ingestion",
    description:
      "Petra ingests data from various sources, including databases, APIs, and streaming platforms, ensuring seamless integration.",
    icon: "📥", 
  },
  {
    title: "Vectorization",
    description:
      "Using advanced algorithms, Petra converts raw data into high-dimensional vectors, capturing essential features and relationships.",
    icon: "🧬", 
  },
  {
    title: "Indexing with FAISS",
    description:
      "Petra leverages FAISS to create efficient indexes for fast similarity search, enabling quick retrieval of relevant data.",
    icon: "🔍", 
  },
  {
    title: "Query Processing",
    description:
      "When a query is made, Petra processes it in real-time, using vector-based search to find the most relevant results.",
    icon: "⚡", 
  },
  {
    title: "AI-Powered Insights",
    description:
      "Petra applies machine learning models to analyze data and provide actionable insights, such as patterns, trends, and anomalies.",
    icon: "🤖", 
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Built on a scalable and secure infrastructure, Petra ensures high performance and reliability for enterprise needs.",
    icon: "🚀", 
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center animate-fade-in-up">
          How It Works
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up animation-delay-200">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl text-blue-600 mb-6">{step.icon}</div>

              <h3 className="text-2xl font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}