import { useEffect, useState } from "react";
import { sanityClient } from "../config/sanity";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

const About = () => {
  const [author, setAuthor] = useState<{ name: string; bio: string }>();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <div>
      {author && (
        <div>
          <div>{author.name}</div>
          <BlockContent
            blocks={author.bio}
            projectId="r4xbg60m"
            dataset="production"
          />
        </div>
      )}
    </div>
  );
};
export default About;
