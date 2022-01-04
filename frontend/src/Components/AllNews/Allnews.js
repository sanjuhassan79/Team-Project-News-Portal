
import React, { useEffect, useState } from 'react';
import SingleNews from './SingleNews/SingleNews';
import './Allnews.css'

const Allnews = () => {
    const [items, setItems] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('/NewsData.json')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setItems(data);
                console.log(data);
            })
    }, [])

    const handleCategory = (categoryitem) => {
        const newItem = items.filter(item => item.category === categoryitem)
        setNews(newItem)
        console.log(newItem);
    }
    return (
        <div className='topNews__Section'>
            <div className='topNews__Headline'>
                <h1>All News</h1>
            </div>



            <div className=' mt-3 mb-5 d-flex justify-content-center'>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('javaScript')}>JavaScript</button>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('python')}>Python</button>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('java')}>Java</button>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('php')}>PHP</button>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('c++')}>C++</button>
            </div>

            <div className='all__Newses'>
                {
                    news.map(news => <SingleNews
                        key={news.id}
                        news={news}

                    ></SingleNews>)
                }
            </div>

            {/*  <div className='ms-5 mt-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        news.map(item => <SingleNews
                            key={item.id}
                            item={item}
                        ></SingleNews>)
                    }
                </Row>
            </div> */}


        </div>
    );
};

export default Allnews;