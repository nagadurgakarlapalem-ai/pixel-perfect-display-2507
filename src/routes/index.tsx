import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Experience } from "@/components/portfolio/Experience";
import { ResumeCta } from "@/components/portfolio/ResumeCta";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title =
  "[FULL NAME] — B.Tech AI & Data Science Student | AI/ML & Hackathon Winner";
const description =
  "Portfolio of a B.Tech Artificial Intelligence & Data Science student: AI/ML projects, hackathon wins, certifications and experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Experience />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
