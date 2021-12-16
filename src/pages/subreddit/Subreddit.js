import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory, useParams} from 'react-router-dom';
import Button from "../../components/button/Button";
import SubHeader from "../../components/subHeader/SubHeader";


function Subreddit() {
    const [posts, setPosts] = useState([]);
    const history = useHistory()


    const { id } = useParams();


        function handleClick (){
            history.push('/')
        }

    useEffect(()=> {
        async function fetchRedditInfo() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`)
                console.log(result.data.data)
                setPosts(result.data.data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchRedditInfo();
    }, [id])
    return (
        <div>
            <SubHeader
            url={`https://www.reddit.com${posts.url}`}
            title={posts.title}
            description={posts.public_description}
            subscribers={posts.subscribers}
            image={posts.banner_img}
            alt={posts.title}
            />
            <br/>
            <Button
                onClick={handleClick}
                title={"Terug naar de Homepagina"}
                />
        </div>
    )
}
export default Subreddit;