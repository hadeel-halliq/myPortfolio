import abo from "../assets/images/abo.jpg";
import albarka from "../assets/images/albarka.jpg";
import albarkad from "../assets/images/albarkad.jpg";
import counter from "../assets/images/counter.jpg";
import res from "../assets/images/res.jpg";
import accounting1 from "../assets/images/1.jpg";
import accounting2 from "../assets/images/2.jpg";
import accounting3 from "../assets/images/3.jpg";
import accounting4 from "../assets/images/4.jpg";
import accounting5 from "../assets/images/5.jpg";
import accounting6 from "../assets/images/6.jpg";
import accounting7 from "../assets/images/7.jpg";
import accounting8 from "../assets/images/8.jpg";
import accounting9 from "../assets/images/9.jpg";
import accounting10 from "../assets/images/10.jpg";
import sportsOg from "../assets/images/11.jpg";
import H1H from "../assets/images/1H.jpg";
import H2H from "../assets/images/2H.jpg";
import H3H from "../assets/images/3H.jpg";
import H4H from "../assets/images/4H.jpg";
import H5H from "../assets/images/5H.jpg";
import H6H from "../assets/images/6H.jpg";
import H7H from "../assets/images/7H.jpg";
import H8H from "../assets/images/8H.jpg";
import H9H from "../assets/images/9H.jpg";
import H10H from "../assets/images/10H.jpg";
import H11H from "../assets/images/11H.jpg";
import H12H from "../assets/images/12H.jpg";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, GalleryHorizontal, Github, X } from "lucide-react";
const projects = [
  {
    title: "Accounting System Dashboard",
    description:
      "This project presents a dashboard for an accounting system that supports multiple user roles. The Super Admin has full control, can create branch managers, assign branches, and manage Dashboard, Users, Branches, Permissions, and Logs. Admin users (branch managers) can handle employees, products, categories, customers, invoices, payments, and returns with role-based add, edit, and delete permissions. The dashboard is fully responsive on all screen sizes and uses a real API for data handling. Access credentials cannot be shared to protect business privacy, but the clean project code and screenshots are available.",
    images: [
      accounting1,
      accounting2,
      accounting3,
      accounting4,
      accounting5,
      accounting6,
      accounting7,
      accounting8,
      accounting9,
      accounting10,
    ],
    tags: ["React", "TailwindCSS", "Dashboard", "Role-Based Access", "API"],
    github: "https://github.com/hadeel-halliq/Accounting-Dashboard",
  },
  
  {
    title: "Sportswear Store Website",
    description:
      "A website for a sportswear store that showcases a wide variety of clothing and sports equipment. The site includes filters, a user-specific shopping cart, and multiple payment methods. It was built using React, Vite, Framer Motion, React Router DOM, and Tailwind CSS. The website is fully responsive and works on all screen sizes.",
    image: sportsOg,
    tags: [
      "React",
      "Vite",
      "Framer Motion",
      "React Router DOM",
      "TailwindCSS",
    ],
    link: "https://hadeel-halliq.github.io/sports-og",
    github: "https://github.com/hadeel-halliq/sports-og",
  },
  {
    title: "AlBaraka Metals – Company Website",
    description:
      "Developed a responsive and dynamic company website for AlBaraka Metals, showcasing company services, locations, and contact information. - Implemented smooth animations using Framer Motion and optimized performance and layout for seamless cross-device responsiveness.",
    image: albarka,
    tags: ["React", "TailwindCSS", "Vite", "React Router", "Framer Motion"],
    link: "https://hadeel-halliq.github.io/albaraka-c-final/",
    github: "https://github.com/hadeel-halliq/albaraka-c-final",
  },
  {
    title: "AlBaraka Metals – Admin Dashboard",
    description:
      "This project presents an admin dashboard for managing services, products, media, branches, and client messages through a clean and scalable interface. The system includes authentication with a secure login page that verifies user authorization before accessing the dashboard. Users can manage and organize content efficiently through responsive management pages designed with a maintainable code structure. The dashboard is fully responsive across different screen sizes and connected to a real API for handling and updating data dynamically. Access credentials cannot be shared to protect business privacy, but the clean project code and project screenshots are available.",
      images: [
        H1H,
        H2H,
        H3H,
        H4H,
        H5H,
        H6H,
        H7H,
        H8H,
        H9H,
        H10H,
        H11H,
        H12H
      ],
    tags: [
      "React",
      "TailwindCSS",
      "Vite",
      "React Router",
      "Recharts",
      "Framer Motion",
    ],
    github: "https://github.com/hadeel-halliq/albaraka-dashboard-c",
  },
  {
    title: "Registration form",
    description:
      "Built a responsive registration form that works across all screen sizes, collecting username, email, password, and password confirmation. Implemented form validation using Yup integrated with React Hook Form, and used i18next to support both Arabic and English languages. Added smooth animations and motion effects using Motion to enhance the user experience.",
    image: abo,
    tags: [
      "React",
      "TailwindCSS",
      "Yup + React Hook Form",
      "i18next",
      "motion",
    ],
    link: "https://hadeel-halliq.github.io/Register-Form/",
    github: "https://github.com/hadeel-halliq/Register-Form",
  },
  {
    title: "Countdown Landing Page",
    description:
      "Built a responsive countdown page that displays the remaining days, hours, minutes, and seconds until website launch.",
    image: counter,
    tags: ["React", "Vite", "TailwindCSS"],
    link: "https://hadeel-halliq.github.io/waiting-counter-down-page",
    github: "https://github.com/hadeel-halliq/waiting-counter-down-page",
  },
  {
    title: "Food Delivery Website",
    description:
      "Developed a restaurant website offering a variety of dishes with user authentication, shopping cart, and responsive UI.",
    image: res,
    tags: ["React", "Vite"],
    link: "https://hadeel-halliq.github.io/ecommerce-food-del",
    github: "https://github.com/hadeel-halliq/ecommerce-food-del",
  },
];

export const Projects = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (images, startIndex = 0) => {
    setGalleryImages(images);
    setSelectedImageIndex(startIndex);
  };

  const closeGallery = () => {
    setGalleryImages([]);
    setSelectedImageIndex(0);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video sm:aspect-video">
                {project.images ? (
                  <div className="h-full p-3 bg-card/40">
                    <div className="grid h-full grid-cols-2 sm:grid-cols-3 gap-2">
                      {project.images.map((image, imageIdx) => (
                        <div
                          key={imageIdx}
                          className="overflow-hidden rounded-md border border-border/40"
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imageIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 sm:gap-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.images && (
                    <button
                      type="button"
                      onClick={() => openGallery(project.images)}
                      className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={`Open ${project.title} gallery`}
                    >
                      <GalleryHorizontal className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.link ? (
                    <ArrowUpRight
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  ) : (
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {galleryImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={closeGallery}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-20 p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-card">
              <img
                src={galleryImages[selectedImageIndex]}
                alt={`Accounting dashboard screenshot ${selectedImageIndex + 1}`}
                className="w-full max-h-[75vh] object-contain bg-black/30"
              />

              <button
                type="button"
                onClick={showPrevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Next image"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="mt-3 text-center text-sm text-muted-foreground">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
