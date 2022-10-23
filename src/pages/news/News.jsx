import axios from "axios"
import { useEffect, useState } from "react"
import LoadingSpinner from "../../components/loader/loader";
import './news.css';

const NewsFeed = (params) => {
    const [newsData, setNewsData] = useState({});
    const [isLoading, setIsloading] = useState(false);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
      
      
    useEffect(() => {
        (async () => {
            setIsloading(true)
            const newsData = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7502218d123b407b92e37ee5c21c8b2f");
            setNewsData(newsData.data)
            setIsloading(false)
        })();
    }, []);

    return (
        isLoading ? <div className="container-news"><LoadingSpinner/></div> :
            newsData &&
           <div className="containerr">
             <div className="container-news">
                <div className="containerr">
                    {newsData.articles?.map((article, index) =>
                        <div className="cardsss"  onClick={() => openInNewTab(article.url)}>
                            <div className="news-data">
                            {
                                article?.urlToImage ?
                                    <div className="article-image">
                                        <img src={article.urlToImage} alt={article.title} />
                                    </div>
                                    : <></>
                            }
                         <div className="newsinfo">
                         {
                                article?.title ?
                                    <h2 className="title">
                                        {article.title}
                                    </h2>
                                    : <></>
                            }
                         
                            {
                                article?.description ?
                                    <div className="description">
                                        {article.description}
                                    </div>
                                    : <></>
                            }
                               {
                                article?.author ?
                                    <div className="author">
                                         <h6>{article.author}</h6> 
                                    </div>
                                    :
                                    <></>
                            }
                            
                         </div>
                        </div>
                        </div>

                    )}
                </div>
            </div>
           </div>
    )
}
export default NewsFeed