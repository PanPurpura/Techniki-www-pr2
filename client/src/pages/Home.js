import React from 'react'
import '../App.css'
//import axios from "axios"
//import { useEffect, useState } from "react";


function Home() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src={require('./img/military_site.jpg')} width={50} height={60} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <form className="d-flex search p-3 m-0" role="search">
                                <input className="form-control me-2" type="search" placeholder="Wyszukaj" aria-label="Search" />
                                <button className="btn btn-secondary" type="submit">Wyszukaj</button>
                            </form>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Typy broni
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="bron_krotka.html">Broń krótka</a></li>
                                        <li><a className="dropdown-item" href="bron_dluga.html">Broń długa</a></li>
                                        <li><a className="dropdown-item" href="bron_historyczna.html">Broń historyczna</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="o_nas.html">O nas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Licencja.html">Kontakt</a>
                                </li>
                            </ul>
                            <button className="btn btn-secondary m-2" type="submit">Zaloguj się</button>
                            <button className="btn btn-secondary" type="submit">Zarejestruj się</button>
                        </div>
                    </div>
                </nav>
                <div className="Background">
                    <div className="container-fluid text-center pt-5">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className=" col-12 col-sm-6 col-md-6 align-self-center">
                                    <h1 className="text-white">Witamy na Military Site!</h1>
                                    <h5 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</h5>
                                </div>
                                <div className="col-12 col-md-6">
                                    <img className="img-fluid Photo" src="img/strzelnica.jpeg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid text-center py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 justify-content-center order-0">
                                    <img className="img-fluid Photo" src="img/zbrojownia.jpg" />
                                </div>
                                <div className="col-12 col-md-6 align-self-center">
                                    <h1 className="text-white">Jesteśmy specjalistami</h1>
                                    <h5 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid inf pt-4">
                        <div className="row row-cols-1 text-center justify-content-center">
                            <h1 className="col text-center">Duży wybór broni</h1>
                            <h5 className="col-12 col-md-6 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique tincidunt enim, facilisis maximus dolor pellentesque quis.
                                Mauris efficitur vestibulum ipsum. Praesent nisl leo, consequat nec tincidunt quis, efficitur sed eros.
                            </h5>
                        </div>
                        <div className="images row text-center py-5">
                            <a href="bron_krotka.html" className="col-12 col-md-4"><img src="img/wep1.jpg" className="img-fluid ms-auto l_photo" alt="..." /></a>
                            <a href="bron_dluga.html" className="col-12 col-md-4"><img src="img/dl.jpg" className="img-fluid ms-auto l_photo" alt="..." /></a>
                            <a href="bron_historyczna.html" className="col-12 col-md-4"><img src="img/his.jpg" className="img-fluid ms-auto l_photo" alt="..." /></a>
                        </div>
                    </div>
                </div>
                <div className="Background">
                    <div className="container-fluid text-center pb-5">
                        <h1 className="text-white py-3">Nasi instruktorzy</h1>
                        <div className="row d-flex justify-content-center">
                            <div className="team-member col-8 col-md-6 col-lg-3">
                                <div className="card one">
                                    <img src="img/1.jpg" className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="fa-brands fa-facebook" /></a>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                        <a href="#"><i className="fa-brands fa-instagram" /></a>
                                    </div>
                                    <div className="card-body pb-5">
                                        <h5 className="title-sm mb-0 text-white">Cecylia Mazur</h5>
                                        <small className="text-white">Spec. od br. krótkiej</small>
                                        <div className="hline" />
                                        <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet facilisis nisi. Sed a magna lobortis lorem eleifend tempor vel eu diam.</p>
                                    </div>
                                    <div className="pb-4">
                                    </div>
                                </div>
                            </div>
                            <div className="team-member col-8 col-md-6 col-lg-3">
                                <div className="card two">
                                    <img src="img/2.jpg" className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="fa-brands fa-facebook" /></a>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                        <a href="#"><i className="fa-brands fa-instagram" /></a>
                                    </div>
                                    <div className="card-body pb-5">
                                        <h5 className="title-sm mb-0 text-white">Gracjan Wróblewski</h5>
                                        <small className="text-white">Spec. od br. długiej</small>
                                        <div className="hline" />
                                        <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet facilisis nisi. Sed a magna lobortis lorem eleifend tempor vel eu diam.</p>
                                    </div>
                                    <div className="pb-4">
                                    </div>
                                </div>
                            </div>
                            <div className="team-member col-8 col-md-6 col-lg-3">
                                <div className="card one">
                                    <img src="img/3.jpg" className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="fa-brands fa-facebook" /></a>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                        <a href="#"><i className="fa-brands fa-instagram" /></a>
                                    </div>
                                    <div className="card-body pb-5">
                                        <h5 className="title-sm mb-0 text-white">Heronim Mazur</h5>
                                        <small className="text-white">Spec. od br historycznej</small>
                                        <div className="hline" />
                                        <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet facilisis nisi. Sed a magna lobortis lorem eleifend tempor vel eu diam.</p>
                                    </div>
                                    <div className="pb-4">
                                    </div>
                                </div>
                            </div>
                            <div className="team-member col-8 col-md-6 col-lg-3">
                                <div className="card two">
                                    <img src="img/4.jpg" className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="fa-brands fa-facebook" /></a>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                        <a href="#"><i className="fa-brands fa-instagram" /></a>
                                    </div>
                                    <div className="card-body pb-5">
                                        <h5 className="title-sm mb-0 text-white">Ewa Kamińska</h5>
                                        <small className="text-white">Spec. ds bezp.</small>
                                        <div className="hline" />
                                        <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet facilisis nisi. Sed a magna lobortis lorem eleifend tempor vel eu diam.</p>
                                    </div>
                                    <div className="pb-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <h1 className="col-12 col-md-12 text-center text-white pb-4">Galeria</h1>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="img/kafelek1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="img/kafelek3.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="img/kafelek4.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="img/kafelek5.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="pb-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="Footer container-fluid text-white py-1 pt-4">
                    <p className="fw-bold text-center align-self-center">Military Site Sp. z o.o. 2022 <img className="img-fluid" src="img/military_site.jpg" width={25} height={35} /></p>
                </footer>
            </div>
        </div>
    )
}

export default Home