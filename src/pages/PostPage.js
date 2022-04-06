import { useParams } from "react-router-dom";

const Post = (props) => {
    const params = useParams();
    console.log(params)
    const id = params.id || 1;
    return (  
        <div>
            <h2>this is new POST</h2>
            <h3>Post detail - {id}</h3>
            <div>{JSON.stringify(params)}</div>
        </div>
    );
}
 
export default Post;