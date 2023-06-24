import React, {  useEffect } from "react";
import NewsItem from "./NewItem";
import { useState } from "react";


export default function News(props) {
  const [article, setarticles] = useState([]);
  const[page,setpage] = useState(1);

  useEffect(() => {
    fetchData();  
  }, [page]);

  const fetchData =  async () => {
      let newurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e7c0fadb47f3477e9ed5d87d2b95a77c&page=${page}&pagesize=16`;
      let data = await fetch(newurl);
      let parseddata = await data.json();
      setarticles( (prev) => [...prev , ...parseddata.articles] );
    }

  const handleinfinitescroll = async()=>{
   try {
    if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
        setpage((prev)=> prev +1);
    }
   } catch (error) {
    console.log("error");
   }
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleinfinitescroll);
    return() => window.removeEventListener("scroll",handleinfinitescroll);
  },[])

  return (
    <>
      <div className="container my-3 ">
        <h1 style={{ margin: "35px " }}>NewsMonkey - Top Headlines</h1>
          <div className="row">{article.map((e) => {
              return (
                <div className="col-md-3 my-2" key={e.url}>
                  <NewsItem title={e.title} description={e.description} imgUrl={e.urlToImage} url={e.url} date={e.publishedAt} author={e.author} />
                </div>
              );
            })}
          </div>
      </div>
    </>
  );
}
