import getDomain from "@/lib/getDomain";

//fetch caching options


//get blog data
const getData = async () => {
    //get endpoint
    const domain = getDomain();
    const endpoint = `${domain}/api/posts`;
    const response = await fetch(endpoint, {next: {revalidate: 10}});

    if(!response.ok){
        throw new Error('Failed to fetch data');
    }
    if(response.headers.get('content-type') !== 'application/json'){
        return {posts: []};
    }

    return response.json();

}

const BlogPage = async() => {
    const data = await getData();
    const posts = data && data.posts ? [...data.posts] : [];
  return (
    <div className="container py-10">
        <ul>
            {posts && posts.map((post, index) => (
                <li key={`post-${index}`}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default BlogPage