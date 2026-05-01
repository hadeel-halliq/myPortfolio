import heroBg from "../assets/images/heroBg.jpg";
// import HadeelHalliqCv from "../assets/images/HadeelHalliqCV.pdf";
import ppic from "../assets/images/ppic.png"
import { Button } from "../Components/Button";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
const skills = [
  "Reactjs",
  "JavaScript",
  "Tailwind CSS",
  "CSS",
  "API testing",
  "Postman",
  "validation",
  "HTML5",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-36 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl md:text-6xl  font-bold leading-tight animate-fade-in animation-delay-100">
                Front-End
                <span className="text-primary glow-text">developer</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Reactjs
                </span>
              </h1>
              <p className="w-75 md:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Hadeel Halliq — a software engineer specializing in
                Reactjs, and JavaScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <AnimatedBorderButton >

              <Button size="lg" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
                </AnimatedBorderButton>
              {/* <a href={HadeelHalliqCv} download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a> */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/hadeel-halliq" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/hadeel-halliq2",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative w-[260px] sm:w-[300px] md:w-[400px] glass rounded-3xl p-2 glow-border">
                <img
                  src={ppic}
                  alt="Hadeel Halliq"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float animation-delay-500">
                  <div className="text-xl sm:text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
