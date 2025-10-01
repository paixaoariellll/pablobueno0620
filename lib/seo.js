export function createMetadata(pageTitle) {
  const baseTitle = "PABLO BUENO | Pintura Especializada";
  const description = "Portfólio Pablo Bueno: Mestre em Pintura Residencial, Industrial (Epóxi, Airless, NR-35/33) e Acabamentos rústicos e finos (Cimento Queimado). Técnico em Química. Atendimento PJ em Guaratinguetá-SP.";
  const canonicalUrl = "https://pablobueno0620.vercel.app";
  const siteName = "Pablo Bueno - Portfólio de Pintura";

  return {
    title: `${pageTitle} | ${baseTitle}`,

    description,

    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: "Pablo Augusto da Silva Bueno" }],

    keywords: [
      "Pintor Industrial Guaratinguetá",
      "Pintura Epóxi",
      "Pintura Airless",
      "Cimento Queimado",
      "Pintor PJ MEI",
      "NR-35",
      "Técnico em Química Pintura"
    ],

    openGraph: {
      title: `${pageTitle} | ${siteName}`,
      description,
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: `${canonicalUrl}/capa2.png`,
          width: 1200,
          height: 630,
          alt: "Pablo Bueno: Pintura Industrial Epóxi, Airless e Cimento Queimado",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },

    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} | ${siteName}`,
      description: description,
      images: [`${canonicalUrl}/capa2.png`],
    }
  };
}
