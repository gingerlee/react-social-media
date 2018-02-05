import React from "react";
import News from "./News";

var masterNewsFeed = [
  {
    img: 'https://dummyimage.com/50/e02ae0/0011ff&text=User',
    title: 'News Title',
    subtitle: 'News Subtitle'
  },
  {
    img: 'https://dummyimage.com/50/e02ae0/0011ff&text=User',
    title: 'New News Title',
    subtitle: 'New News Subtitle'
  },
  {
    img: 'https://dummyimage.com/50/e02ae0/0011ff&text=User',
    title: 'NewNewNews Title',
    subtitle: 'NewNewNews Subtitle'
  }
];

function Newsfeed(){
  return (
    <div>
      <hr/>
      {masterNewsFeed.map((news, index) =>
        <News names={news.img}
          title={news.title}
          subtitle={news.subtitle}
          key={index}/>
      )}
    </div>
  );
}

export default Newsfeed;
