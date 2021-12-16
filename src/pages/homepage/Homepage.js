import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/header/Header";

function Homepage() {
    const [posts, setPosts] = useState([]);

    // function numberFormat() {
    //     return ( new Intl.NumberFormat('es-ES'))
    // }


    useEffect(()=> {
        async function fetchReddit() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15')
                console.log(result.data.data.children)
                setPosts(result.data.data.children)
            } catch (e) {
                console.error(e)
            }
        }
        fetchReddit();
    }, [])
    return (
        <>
            <h1>Dit is de homepagina</h1>
            {posts.map((post)=>{
                return (
                    <Header
                        link={`/subreddit/${post.data.subreddit}`}
                        title={post.data.title}
                        prefixed={post.data.subreddit_name_prefixed}
                        comments={post.data.num_comments}
                        ups={post.data.ups}
                        />
                )
            })}
        </>
    )
}
export default Homepage;