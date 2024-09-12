import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Blog() {
    const [fetchdata, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/blogs").then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <div>
            <div className="container-fluid px-5 my-10">
                <h1 className='text-3xl font-bold p-5'>Our Blogs</h1>
                <div className='row'>
                    <div className='grid grid-cols-2' >
                    {fetchdata && fetchdata.map((item) => (
                        <div key={item.id} className="col-md-6 ms-0 p-5 mt-2">
                            <div className='card'>
                                <div className='card-header'>{item.title}</div>
                                <div className='card-body'>
                                    <button onClick={() => navigate(`/blogs-details/${item.id}`)}>
                                        <img src={item.photo} alt='photo' className='img-fluid' style={{ width: "100%", height: "300px" }} />
                                    </button>
                                    <p className='text-lg'>{item.description}</p>
                                </div>
                            </div>

                        </div>
                        
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;