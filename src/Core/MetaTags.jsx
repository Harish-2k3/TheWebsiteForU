import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({ section }) => {
  const baseUrl = "https://thewebsite4u.com/";

  const metaInfo = {
    home: {
      title: "TheWebsite4u | Home",
      description: "Welcome to Article Publication – A global platform for researchers in Applied Science, Engineering, and Technology.",
      image: `${baseUrl}/Testimonial/T1.png`,
    },
    about: {
      title: "TheWebsite4u | About Us",
      description: "Learn about our mission and vision in the scientific publication world.",
      image: `${baseUrl}/Testimonial/T1.png`,
    },
    services: {
      title: "TheWebsite4u | Services",
      description: "Explore our services including web, mobile app development, and digital marketing.",
      image: `${baseUrl}/Testimonial/T1.png`,
    },
    collab: {
      title: "TheWebsite4u | Collaboration",
      description: "Partner with us for mutual research, development, and publishing excellence.",
      image: `${baseUrl}/Testimonial/T1.png`,
    },
    testimonials: {
      title: "TheWebsite4u | Testimonials",
      description: "What our researchers and partners say about us.",
      image: `${baseUrl}/Testimonial/T1.png`,
    },
    contact: {
      title: "TheWebsite4u | Contact Us",
      description: "Get in touch with our team for services or collaboration.",
      image: `${baseUrl}/Testimonial/T1.png`,
    },
  };

  const current = metaInfo[section] || metaInfo["home"];
  const { title, description, image } = current;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${baseUrl}#${section}`} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={`${baseUrl}#${section}`} />
    </Helmet>
  );
};

export default MetaTags;
