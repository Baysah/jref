import BlogCard from "@/components/BlogCard";
import getDomain from "@/lib/getDomain";
import { helloWorld } from "@/lib/db";

//fetch caching options


//get blog data
const getData = async () => {
  //get endpoint
  const domain = getDomain();
  const endpoint = `${domain}/api/posts`;
  //const response = await fetch(endpoint, { next: { revalidate: 10 } });

  const response = await fetch(endpoint, {cache: 'no-store'});

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  if (response.headers.get('content-type') !== 'application/json') {
    return { posts: [] };
  }

  return response.json();
}

const BlogPage = async() => {
    const data = await getData();
    const posts = data && data.posts ? [...data.posts] : [];
    const dbHello = await helloWorld();
    console.log("dbHello",dbHello);
  return (
    <div className="container py-10">
        <h1>Blog</h1>
        <h2>DB Response: {JSON.stringify(dbHello)}</h2>
        <ul>
            {posts && posts.map((post, index) => (
                <BlogCard key={index} title={post.title} />
            ))}
        </ul>
    </div>
  )
}

export default BlogPage

export const runtime = 'edge'
export const prefettedRegion = 'iad1'