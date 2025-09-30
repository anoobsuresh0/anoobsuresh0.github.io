"use client";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import ExperienceSection from "@/components/ExperianceSection";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Separator from "@/components/Separator";
import SkillsSection from "@/components/SkillsSection";
import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { useState } from "react";
import Taskbar from "@/components/Taskbar";

const page = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className="w-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)]">
          <Container>
            <div className="text-white">
              <Navbar />
              <HeroSection />
              <Heading heading="Stack" />
              <SkillsSection />
              <Separator />
              <Heading heading="Projects" showButton buttonLink="/projects" />

              <ProjectsSection />
              <Separator />
              <Heading heading="Experience" />
              <ExperienceSection
                logo="/perleybrook.png"
                title="Full Stack Developer"
                type="Full-time"
                highlights={[
                  "Architected and deployed an end-to-end HR platform (Recruitō) using React, TypeScript, Django REST, and PostgreSQL, improving recruitment efficiency by 60%.",
                  "Built scalable microservices and APIs with Node.js, Django, and PostgreSQL, powering real-time data handling for 10K+ daily active users.",
                  "Developed a real-time analytics dashboard for IoT hardware (NVIDIA, Intel) with WebSockets, reducing latency by 70% and enabling instant insights.",
                  "Led cloud deployments on AWS/GCP with Docker and CI/CD pipelines, achieving 99.9% uptime and cutting infrastructure costs by 25%.",
                  "Mentored and led teams while delivering 15+ projects, driving 95% client satisfaction through technical demos and stakeholder collaboration.",
                ]}
                skills={["React", "JavaScript", "TypeScript", "HTML", "CSS", "Figma", "Django", "Node.js", "PostgreSQL", "AWS", "GCP", "Docker", "CI/CD"]}
              />

              <ExperienceSection
                logo="/beequizz.avif"
                title="Frontend Developer"
                type="Freelance"
                highlights={[
                  "Developed custom web applications using the MERN stack, delivering tailored solutions for business needs.",
                  "Created Progressive Web Apps (PWAs) with offline support and push notifications to boost user engagement.",
                ]}
                skills={["MERN","HTML", "CSS", "JavaScript", "Figma", "UI Design"]}
              />
              <Separator />
              <Heading heading="About Me" />
              <About />
              <Separator />
              <ContactSection />
            </div>
          </Container>
        </div>
      )}
     {loading ||   <Taskbar />}
      
    </>
  );
};

export default page;
