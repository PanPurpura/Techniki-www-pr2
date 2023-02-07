import '../App.css';
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";

function User() {

    let code;
    let user;
    const [record, setRecord] = useState([]);

    useEffect(() => {
        document.querySelector(".Footer").classList.add("fixed-bottom");

        axios.get("http://localhost:3001/accounts", {
            params: {
                email: sessionStorage.getItem("email"),
                password: sessionStorage.getItem("password"),
            }
        }).then((response) => {
            setRecord(response.data);
            console.log(response.data);
        });
    }, []);


    const login = record.login
    const email = record.email
    let phone;
    let name;

    if(sessionStorage.getItem("edited") === null)
    {
        phone = "Brak";
        name = "Brak";
    }
    else
    {
        phone = record.phone;
        name = record.name;
    }

    if(sessionStorage.getItem("zalogowany") !== null)
    {
        code = (<>
            <a className="nav-link" aria-current="page" href="/user"><i className="bi bi-person user me-2"></i></a>
            <a className="nav-link" aria-current="page" href="/"><button onClick={() => {
                sessionStorage.removeItem("zalogowany");
                sessionStorage.removeItem("login");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("edited");
            }} type="button" className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Wyloguj
            </button></a></>)
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

    const initialValues = {
        name: "",
        login: "",
        phone: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string(),
        login: Yup.string(),
        phone: Yup.string().min(9).max(9)
    })

    const onSubmit = (data) => {
        data.email = record.email;
        data.password = "";
        axios.post("http://localhost:3001/accounts", data).then((response) => {
            console.log(response);
            sessionStorage.setItem("edited", "2");
            window.location.reload()
        });
    }

    return(
        <div>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal_ text-white">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edycja danych</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                                <Form className="formContainer" >
                                    <label className="label_">Imie i nazwisko :</label>
                                    <ErrorMessage name="name" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        id = "inputName"
                                        name = "name"
                                        placeholder = "Wprowadź imie i nazwisko"
                                    />
                                    <label className="label_">Login :</label>
                                    <ErrorMessage name="login" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        id = "inputLogin"
                                        name = "login"
                                        placeholder = "Wprowadź nowy login"
                                    />
                                    <label className="label_">Telefon :</label>
                                    <ErrorMessage name="phone" component="span" />
                                    <Field
                                        autoComplete = "off"
                                        id = "inputPhone"
                                        name = "phone"
                                        placeholder = "Wprowadź swój numer telefonu"
                                    />

                                    <button type="submit" className="btn m-auto mt-4 btn-danger col-4">Edytuj</button>
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
                        <img src={require('./img/military_site.jpg')} width={50} height={60} alt="logo"/>
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

            <div className="container emp-profile  ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={require('./img/User.png')} alt="" />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h1>
                                    Witaj!
                                </h1>
                                <h4>
                                    {login}
                                </h4>
                                <div className="hline1 mt-5"></div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                Edytuj dane
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                Ostatnie rezerwacje:
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Login</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{login}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Imie i nazwisko</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default User;