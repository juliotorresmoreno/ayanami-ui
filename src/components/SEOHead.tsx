
import Head from "next/head";

interface SEOHeadProps {
  readonly title?: string;
  readonly description?: string;
}

export default function SEOHead({ title, description }: SEOHeadProps) {
  const defaultTitle = "Petra AI - Transforming Data into Knowledge";
  const defaultDescription =
    "Petra AI optimizes data retrieval and analysis using cutting-edge vector database technology and artificial intelligence.";

  return (
    <Head>
      <title>{title ? `${title} | Petra AI` : defaultTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />
      <meta name="keywords" content="AI, Vector Databases, Machine Learning, Data Science, Petra AI, Search Optimization" />
      <meta name="author" content="Petra AI Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? defaultTitle} />
      <meta property="og:description" content={description ?? defaultDescription} />
      <meta property="og:url" content="https://petra.ai" />
      <meta property="og:site_name" content="Petra AI" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@PetraAI" />
      <meta name="twitter:title" content={title ?? defaultTitle} />
      <meta name="twitter:description" content={description ?? defaultDescription} />
      <meta name="twitter:image" content="/twitter-image.png" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
