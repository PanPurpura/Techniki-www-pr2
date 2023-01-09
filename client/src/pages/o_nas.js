import React from 'react'
import '../App.css'
import axios from "axios"
import { useEffect, useState } from "react";

function o_nas() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src="img/military_site.jpg" width={50} height={60} />
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
                                    <a className="nav-link" aria-current="page" href="index.html">Home</a>
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
                                    <a className="nav-link active" href="o_nas.html">O nas</a>
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
                <div className="container-fluid contact">
                    <div className="container py-3 text-center">
                        <h1 className="text-white"><i><b>O nas</b></i></h1>
                    </div>
                </div>
                <div className="container-fluid Background">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-12 col-md-6 col-sm-12 py-3">
                                <img src="img/grp.jpg" className="img-fluid Photo" />
                            </div>
                            <div className="col-12 col-md-6 col-sm-12 text-white text-center">
                                <h6 className="pt-3">MIEJSCE GDZIE NOWOCZESNOŚĆ ŁĄCZYMY Z TRADYCJĄ</h6>
                                <h1 className>Najlepsza strzelnica w okolicy</h1>
                                <h5 className="pt-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non tristique nulla. Aliquam arcu lacus, vestibulum ut finibus et, aliquam at turpis. Nullam mattis quam lorem, id interdum nisl auctor scelerisque.</h5>
                                <div className="pb-3"><button type="button" className="btn r_btn text-white">Rezerwacja On-Line</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bgd">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-3 p-3">
                                <img src="img/wifi.jpg" className="img-fluid icons" />
                                <h6 className="text-white pt-2">Wi-Fi</h6>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <img src="img/parking.jpg" className="img-fluid icons" />
                                <h6 className="text-white pt-2">Parking</h6>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <img src="img/klimatyzacja.jpg" className="img-fluid icons" />
                                <h6 className="text-white pt-2">Klimatyzacja</h6>
                            </div>
                        </div>
                        <div className="row justify-content-center pt-3 text-center">
                            <div className="col-12  col-md-3 pb-4"><button type="button" className="btn r_btn text-white">Regulamin strzelnicy</button></div>
                            <div className="col-12 col-md-3 pb-4"><button type="button" className="btn r_btn text-white">Polityka prywatności</button></div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid wall">
                    <div className="container">
                        <div className="row d-flex py-3 gy-2 justify-content-center text-white">
                            <div className="col-12 col-md-4 text-center">
                                <div className="container shadow py-3">
                                    <img src="img/question-orange.svg" className="img-fluid question_mark" />
                                    <h2 className="pt-5">Kim jesteśmy?</h2>
                                    <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum luctus leo eu mattis. Nam felis diam, tempus ut commodo eget, gravida ac diam.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-center">
                                <div className="container shadow py-3">
                                    <img src="img/question-orange.svg" className="img-fluid question_mark" />
                                    <h2 className="pt-5">Co robimy?</h2>
                                    <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum luctus leo eu mattis. Nam felis diam, tempus ut commodo eget, gravida ac diam.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-center">
                                <div className="container shadow py-3">
                                    <img src="img/question-orange.svg" className="img-fluid question_mark" />
                                    <h2 className="pt-5 ">Dlaczego my?</h2>
                                    <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum luctus leo eu mattis. Nam felis diam, tempus ut commodo eget, gravida ac diam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid Background">
                    <div className="container-lg">
                        <div className="col text-white pt-3 text-center">
                            <h1>Tutaj się znajdujemy</h1>
                        </div>
                        <div className="col pt-3 pb-4">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.577435362108!2d20.0103951!3d50.0380134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164493fae63ce9%3A0x5ca1462bbc3d1953!2sJana%20Surzyckiego%2016%2C%2030-721%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1670434840103!5m2!1sen!2spl" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bgd">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-4 pt-2 text-center">
                                <h4 className="red">Godziny otwarcia:</h4>
                                <p className="text-white">Poniedziałek-Piątek: 9:00-20:00 <br />
                                    Sobota: 10:00-16:00 <br />
                                    Niedziela: Nieczynne</p>
                            </div>
                            <div className="col-12 col-md-4 py-2 text-center">
                                <h4 className="red">Social Media:</h4>
                                <a href="#"><i className="fab fa-facebook pt-2 ic1" /></a>
                                <a href="#"><i className="fab fa-instagram pt-2 ic2" /></a>
                                <a href="#"><i className="fab fa-google pt-2 ic3" /></a>
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

export default o_nas