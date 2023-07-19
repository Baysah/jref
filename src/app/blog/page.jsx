
//get blog data
const getData = async () => {
    //get endpoint
    const endpoint = 'http://localhost:3000/api/posts';
    const response = await fetch(endpoint);

    if(!response.ok){
        throw new Error('Failed to fetch data');
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