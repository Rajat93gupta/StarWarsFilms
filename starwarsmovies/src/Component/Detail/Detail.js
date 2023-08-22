import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import style from "./Detail.module.css"
import { Rings } from "react-loader-spinner";
import Footer from "../Footer/Footer";

const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    console.log(id);
    const [film, setFilm] = useState({});
    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`).then((res) => {
            console.log(res)
            setFilm(res.data);
            setLoading(false)
        });
    }, [id]);
    return (
        <div>
            <Header />
            <div className={`${style.MiddleBox}`}>
                <div className="container ">
                    {!loading ? (
                        <div className={`${style.ContenctBox} row`} >
                               <div className={`${style.Shadow} col-md-6`}>
                                <div>
                                    image
                                </div>
                            </div>
                            <div className={`${style.Shadow} col-md-6`}>
                               <div >
                               <h2>{film.title}</h2>
                                <h5> Episode : {film.episode_id}</h5>
                                <p className={`${style.fontText}`}>{film.opening_crawl}</p>
                                <p> <strong>Release Date:{film.release_date}</strong></p>
                                <p><strong>Director: {film.director}</strong></p>
                                <p><strong>Producer: {film.producer}</strong></p>
                               </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`${style.loading}`}>
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

export default Detail;
