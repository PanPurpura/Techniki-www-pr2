import '../App.css'
import React from 'react'
import axios from "axios"
//import { useEffect, useState } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'



function Home() {

    const initialValues = {
        email: "",
        password: "",
    };

    const initialValues1 = {
        login: "",
        password: "",
        email: "",
    };

    const validationSchema = Yup.object().shape({
        password: Yup.string().min(3).max(10).required("Hasło musi mieć długość od 3 do 10 znaków."),
        email: Yup.string().email('Niepoprawny format adresu e-mail').required("To pole jest wymagane")
    })

    const validationSchema1 = Yup.object().shape({
        login: Yup.string().required("To pole jest wymagane"),
        password: Yup.string().min(3).max(10).required("Hasło musi mieć długość od 3 do 10 znaków."),
        email: Yup.string().email('Niepoprawny format adresu e-mail').required("To pole jest wymagane")
    })

    const onSubmit = (data) => {
        axios.get("http://localhost:3001/accounts", {
            params: {
                email: data['email'],
                password: data['password'].toString(),
            }
        }
        ).then((response) => {
           sessionStorage.setItem("zalogowany", "1");
           sessionStorage.setItem("email", response.data.email);
           sessionStorage.setItem("password", response.data.password);
           console.log(response);
           window.location.reload()
        });
    };

    const onSubmit1 = (data) => {
        axios.post("http://localhost:3001/accounts", data).then((response) => {
           sessionStorage.setItem("zalogowany", "1");
           sessionStorage.setItem("email", response.data.email);
            sessionStorage.setItem("password", response.data.password);
           console.log(response);
           window.location.reload()
        });
    };

    let code;

    if(sessionStorage.getItem("zalogowany") !== null)
    {
        code = (<>
            <a className="nav-link" aria-current="page" href="/user"><i className="bi bi-person user me-2"></i></a>
            <button onClick={() => {
            sessionStorage.removeItem("zalogowany");
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("login");
            window.location.reload();
        }} type="button" className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Wyloguj
        </button></>)
    }
    else
    {
        code = (<><button type="button" className="btn btn-secondary m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Zaloguj się
        </button>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                Zarejestruj się
            </button></>)
    }

    return (
        <div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content modal_ text-white">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Logowanie</h1>
                        </div>
                        <div className="modal-body">
                            <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                                <Form className="formContainer" >
                                    <label className="label_">E-mail :</label>
                                    <ErrorMessage name="email" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        id = "inputEmail"
                                        name = "email"
                                        placeholder = "Wprowadź swoj adres E-mail"
                                    />
                                    <label className="label_">Hasło :</label>
                                    <ErrorMessage name="password" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        type="password"
                                        id = "inputHaslo"
                                        name = "password"
                                        placeholder = "Wprowadź swoje hasło"
                                    />

                                    <button type="submit" className="btn m-auto mt-4 btn-danger col-4">Zaloguj</button>
                                </Form>
                            </Formik>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content modal_ text-white">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Rejestracja</h1>
                        </div>
                        <div className="modal-body">
                            <Formik initialValues={initialValues1} onSubmit={onSubmit1} validationSchema={validationSchema1}>
                                <Form className="formContainer" >
                                    <label className="label_">Login :</label>
                                    <ErrorMessage name="login" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        id = "inputLogin"
                                        name = "login"
                                        placeholder = "Wprowadź swój login"
                                    />
                                    <label className="label_">Hasło :</label>
                                    <ErrorMessage name="password" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        type="password"
                                        id = "inputHaslo"
                                        name = "password"
                                        placeholder = "Wprowadź swoje hasło"
                                    />
                                    <label className="label_">E-mail :</label>
                                    <ErrorMessage name="email" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        id = "inputEmail"
                                        name = "email"
                                        placeholder = "Wprowadź swój e-mail"
                                    />

                                    <button type="submit" className="btn m-auto mt-4 btn-danger col-4">Zarejestruj</button>
                                </Form>
                            </Formik>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
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
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Typy broni
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/bron_krotka">Broń krótka</a></li>
                                    <li><a className="dropdown-item" href="/bron_dluga">Broń długa</a></li>
                                    <li><a className="dropdown-item" href="/bron_historyczna">Broń historyczna</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/o_nas">O nas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Kontakt">Kontakt</a>
                            </li>
                        </ul>
                        {code}
                    </div>
                </div>
            </nav>

            <div>
                <div className="Background">
                    <div className="container-fluid text-center pt-5">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className=" col-12 col-sm-6 col-md-6 align-self-center">
                                    <h1 className="text-white">Witamy na Military Site!</h1>
                                    <h5 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</h5>
                                </div>
                                <div className="col-12 col-md-6">
                                    <img className="img-fluid Photo" src={require('./img/strzelnica.jpeg')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid text-center py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 justify-content-center order-0">
                                    <img className="img-fluid Photo" src={require('./img/zbrojownia.jpg')} />
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
                            <a href="/bron_krotka" className="col-12 col-md-4"><img src={require('./img/wep1.jpg')} className="img-fluid ms-auto l_photo" alt="..." /></a>
                            <a href="/bron_dluga" className="col-12 col-md-4"><img src={require('./img/dl.jpg')} className="img-fluid ms-auto l_photo" alt="..." /></a>
                            <a href="/bron_historyczna" className="col-12 col-md-4"><img src={require('./img/his.jpg')} className="img-fluid ms-auto l_photo" alt="..." /></a>
                        </div>
                    </div>
                </div>
                <div className="Background">
                    <div className="container-fluid text-center pb-5">
                        <h1 className="text-white py-3">Nasi instruktorzy</h1>
                        <div className="row d-flex justify-content-center">
                            <div className="team-member col-8 col-md-6 col-lg-3">
                                <div className="card one">
                                    <img src={require('./img/1.jpg')} className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
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
                                    <img src={require('./img/2.jpg')} className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
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
                                    <img src={require('./img/3.jpg')} className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
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
                                    <img src={require('./img/4.jpg')} className="card-img-top" alt="..." />
                                    <div className="social-icons">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
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
                                            <img src={require('./img/kafelek1.jpg')} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('./img/kafelek3.jpg')} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('./img/kafelek4.jpg')} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('./img/kafelek5.jpg')} className="d-block w-100" alt="..." />
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
            </div>
        </div>
    )
}

export default Home