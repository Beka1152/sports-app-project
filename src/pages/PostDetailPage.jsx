import { useState,useEffect } from "react";
import backIcon from "../assets/css/images/back.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";

function PostDetailPage() {

    const {id} = useParams();
    const [post,setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://6dcad32e93b29be6.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);



    return (
        <section class="mobile-block">
        <Link to="/" class="back-button">
            ,<div class="container">
                <img src={backIcon} alt="Back icon" />
                Назад
                </div>
        </Link>
        {isLoading ? (<LoadingDetail />) : (
            <div class="container">
                <div class="post-datail-block">
                    <h3 class="news-card__title">{post.title}</h3>
                    <span class="news-card__date">{post.date}</span>
                    <p class="description">
                        {post.description}
                    </p>
                    <img src={post.imageUrl} alt={post.title}  />
                    <span class="author">Источник: <strong class="light-success-text">{post.author}</strong></span>
                    <button class="tag-button">{post.category}</button>
                </div>
            </div>
        )}
    </section>
    );
}

export default PostDetailPage;