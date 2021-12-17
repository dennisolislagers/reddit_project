import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import './Homepage.css';

function Homepage() {
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false)

    // function numberFormat() {
    //     return ( new Intl.NumberFormat('es-ES'))
    // }


    useEffect(()=> {
        async function fetchReddit() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15')
                setPosts(result.data.data.children)
            } catch (e) {
                console.error(e);
                toggleError(true)
            }
        }
                toggleLoading(false);
        fetchReddit();
    }, [])
    return (
        <>
            <h1>Welkom</h1>
            <h1>Dit zijn de 15 meest populaire posts op Reddit.com</h1>
            {error &&
            <p>Er is iets misgegaan, sluit af en start opnieuw op </p>}
            {loading &&
            <p>Bezig met ophalen van de gegevens</p>}

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