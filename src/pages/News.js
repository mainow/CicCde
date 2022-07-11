import { useEffect, useState } from 'react';
import NewCard from '../components/NewCard';
import NewManager from '../components/util/NewManager';
import Container from "../core/components/Container";
import Spinner from 'react-bootstrap/Spinner';

function News() {
    const [news, setNews] = useState();
    useEffect(() => NewManager.getNews(setNews), []);

    const NEW_DESC_LEN = 100;

    return (
        <Container className="py-4 container gap-4" grid gridColumn="250px">
            {!news ? 
                <Spinner animation="border" /> :
                news.map(n => <NewCard key={n.key} img={"assets/mbareteboty.jpeg"} title={n.title} desc={n.content.slice(0, NEW_DESC_LEN)}/>)
            }
        </Container>
    );
}

export default News;