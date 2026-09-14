import { Helmet } from "react-helmet-async";

interface SeoHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const SITE_NAME = "Solotech Digital LLC";
const SITE_URL = "https://solotechdigital.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_DESC =
  "Solotech Digital designs websites, brands, and digital content that help businesses in The Gambia and West Africa stand out, attract customers, and grow online.";

export default function SeoHead({
  title,
  description = DEFAULT_DESC,
  path = "/",
  image = DEFAULT_IMAGE,
}: SeoHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Web Design & Digital Agency in The Gambia`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GM" />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@solotechdigital" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="GM" />
      <meta name="geo.placename" content="Banjul, The Gambia" />
      <meta name="language" content="English" />
      <meta name="keywords" content="web design Gambia, digital agency Gambia, website development Banjul, branding Gambia, social media management Gambia, digital marketing West Africa, Solotech Digital" />
    </Helmet>
  );
}
