import { useParams ,Link } from "react-router-dom";

const Blog = () => {
    const params = useParams();
    console.log(params);
    return ( 
        <div>
            <h2>Blog detail - {params.id} </h2>
            <Link to="/blog"> go to blogs</Link>
        </div>
     );
}
 
export default Blog;