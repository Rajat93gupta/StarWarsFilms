import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./Home.module.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";

const Home = () => {
    const [loading, setloading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://swapi.dev/api/films").then((res) => {
            console.log(res);
            setMovieList(res.data.results);
            setloading(false);
        });
    }, []);
    console.log(movieList);
    const HandleOpen = (id) => {
        console.log(id);
        navigate(`/Details/${id}`);
    };

    return (
        <div>
            <Header />
            <div className={`${style.Home}`}>
                <div className="container">
                    {!loading ? (
                        <div className="row">
                            {movieList.map((item, index) => {
                                return (
                                    <div className="col-md-4 text-center" key={item.episode_id}>
                                        <div
                                            onClick={() => HandleOpen(item.episode_id)}
                                            className={`${style.BoxModel} border m-1`}
                                        >
                                            <p className={`${style.title}`}>{item.title}</p>
                                            <p>Episode : {item.episode_id}</p>
                                            <p>Release date:{item.release_date} </p>

                                            <p><strong>Director: {item.director}</strong></p>
                                        </div>
                                        {/* </Link> */}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className={`${style.loader}`}>
                            <Rings
                                height="80"
                                width="80"
                                color="#4fa94d"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div>
                    )}

                </div>

            </div>
           

            <Footer />
        </div>
    );
};

export default Home;
