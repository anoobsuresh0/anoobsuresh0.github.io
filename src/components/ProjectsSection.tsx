import React from "react";
import Image from "next/image";
import ProjectsCard from "./ProjectsCard";

const ProjectsSection = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-[#1C1C1F] bg-black ">
    
      </div>

      <ProjectsCard
        title="Recruito HR Management Platform"
        description="HR Management Platform"
        image="/recruito.png"
        url="https://recruito.perleybrook.com/"
      />
      <ProjectsCard
        title="Refly"
        description="Share files instantly between devices using QR codes. No signup, no servers, no limits - just pure peer-to-peer magic."
        image="/refly.png"
        url="https://www.refly.live"
      />
      <ProjectsCard
        title="Flagman Dashboard"
        description="A IoT product dashboard, with analytics and insights."
        image="/chief-dashboard.png"
        url="https://apar.flagman.ai/"
      />
    </>
  );
};

export default ProjectsSection;
