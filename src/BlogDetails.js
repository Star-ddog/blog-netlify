import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id} = useParams();
    const { data: blog,error, ispending} = useFetch('https://blog-api-5vt7.onrender.com/blogs/' + id);
    const navigate = useNavigate();

    const handleClick =() => {
        fetch('https://blog-api-5vt7.onrender.com/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(() =>{
            navigate('/');
        })
    }
    return ( 
        <div className="blog-details">
         {ispending && <div>loading...</div> }
         { error && <div>{error}</div>}
         { blog && (
             <article>
                 <h2> {blog.title} </h2>
                 <p>written by {blog.author} </p>
                 <div> {blog.body} </div>
                 <button onClick={handleClick}>delete</button>
             </article>
         )}
        </div>
     );
}
 
export default BlogDetails;
