import PostCard from "./PostCard";
import { useState, useEffect} from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import { useBlocker } from "react-router-dom";

function PostList() {
    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://6dcad32e93b29be6.mokky.dev/post');
                setPosts(response.data)
            } catch(error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);
    
    // (условие) ? (true) : (false);
    return (
        <div class="all-news-block">
            {isLoading ? (<LoadingPost/>) : (
                <>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </>
            )}
        </div>

    );
}

export default PostList;