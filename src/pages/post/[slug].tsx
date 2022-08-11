import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sanityClient } from "../../config/sanity";

const SinglePost = () => {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : -1;

  const [singlePost, setSinglePost] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <div>
      {singlePost && (
        <div>
          <div>{singlePost.name}</div>
          <div>{singlePost.title}</div>
          <div>{singlePost.name}</div>
        </div>
      )}
    </div>
  );
};
export default SinglePost;
