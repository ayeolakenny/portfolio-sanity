import { useEffect, useState } from "react";
import { sanityClient } from "../config/sanity";

const Project = () => {
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {projectData &&
        projectData.map((project: any) => {
          return (
            <>
              <div>{new Date(project.date).toLocaleDateString()}</div>
              <div>{project.description}</div>
              <div>{project.link}</div>
              <div>{project.projectType}</div>
              <div>{project.title}</div>
              <div>{project.tags}</div>
              <div>{project.place}</div>
            </>
          );
        })}
    </div>
  );
};

export default Project;
