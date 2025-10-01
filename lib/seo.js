export function createMetadata(pageTitle) {
  const baseTitle = "INNA";
  const description = "Igreja do Nazareno - Nova Aliança - Guaratinguetá";

  return {
    title: `${baseTitle} | ${pageTitle}`,
    description,
    alternates: {
      canonical: "https://innaguara.com.br/",
    },
    authors: [{ name: "Ariel Paixão" }],
    keywords: ["Igreja do Nazareno", "INNA", "INNA GUARA", "Nazareno"],
    openGraph: {
      title: `${baseTitle} | ${pageTitle}`,
      description,
      url: "https://innaguara.com.br",
      siteName: baseTitle,
      images: [
        {
          url: "https://innaguara.com.br/capa2.png",
          width: 1200,
          height: 600,
          alt: "Igreja do Nazareno - Nova Aliança - Guaratinguetá",
        },
        {
          url: "https://innaguara.com.br/capa.png",
          width: 1200,
          height: 1200,
          alt: "Igreja do Nazareno - Nova Aliança - Guaratinguetá",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
  };
}
