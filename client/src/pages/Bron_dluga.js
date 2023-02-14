import React from "react";
import '../App.css'
import o_nas from "./o_nas";
import {ErrorMessage, Field, Form, Formik, useField} from "formik";
import * as Yup from "yup";
import axios, {all} from "axios";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import DatePicker from "react-datepicker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

function Bron_dluga() {

    const [records, setRecords] = useState([]);
    const [allRecords, setAllRecords] = useState([]);
    const MyDatePicker = ({ name = "" }) => {
        const [field, meta, helpers] = useField(name);

        const { value } = meta;
        const { setValue } = helpers;

        return (
            <DatePicker
                {...field}
                selected={value}
                onChange={(date) => setValue(date)}
            />
        );
    };

    useEffect(() => {
        axios.get("http://localhost:3001/weapons", {
            params: {
                type: "Bron dluga"
            }
        }).then((response) => {
            setRecords(response.data);
        });

        axios.get("http://localhost:3001/weapons").then((response) => {
            setAllRecords(response.data);
        });
    }, []);

    function funL(index) {
        for(let i = 0; i < allRecords.length; i++) {
            if(allRecords[i].id === index) {
                return allRecords[i];
            }
        }
    }

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
            if(response.data !== "Wrong Password" && response.data !== "Account doesn't find") {
                sessionStorage.setItem("zalogowany", "1");
                sessionStorage.setItem("email", response.data.email);
                sessionStorage.setItem("password", response.data.password);
                window.location.reload()
            }
            else
            {
                document.querySelector(".err").innerHTML = "Wprowadzono nieprawidlowe dane";
                document.querySelector(".err").style.color = "red";
            }
        });
    };

    const onSubmit1 = (data) => {
        axios.post("http://localhost:3001/accounts", data).then((response) => {
            sessionStorage.setItem("zalogowany", "1");
            sessionStorage.setItem("email", response.data.email);
            sessionStorage.setItem("password", response.data.password);
            window.location.reload()
        });
    };

    const onSubmit2 = (data) => {
        axios.post("http://localhost:3001/reservations", {bronie:data.bronie, email:sessionStorage.getItem("email"), data:moment(data.data).format("YYYY-MM-DD HH:mm:ss")}).then((response) => {
            console.log(response);
            window.location.reload()
        });
    }

    let code;
    let but;
    let tab;

    if(sessionStorage.getItem("zalogowany") !== null)
    {
        tab = (<th />)
        but = (<td><button type="button" onClick={(event) => {
            //console.log(event.target.parentNode.parentNode.childNodes.item(0).innerHTML);
            let koszyk = sessionStorage.getItem("cart");
            if(koszyk === null)
            {
                sessionStorage.setItem("cart", [event.target.parentNode.parentNode.childNodes.item(0).innerHTML]);
            }
            else
            {
                let tmp = Array.from(sessionStorage.getItem("cart").split(","));
                tmp.push(event.target.parentNode.parentNode.childNodes.item(0).innerHTML);
                sessionStorage.setItem("cart", tmp);
            }
            window.location.reload();

        }} className="btn btn-secondary">Wybierz</button></td>)
        code = (<>
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-cart-fill user me-2"></i>
                </button>
                <ul className="dropdown-menu">
                    {
                        allRecords.map((y) => {
                                if(sessionStorage.getItem("cart") === "") {
                                    sessionStorage.removeItem("cart");
                                }
                                else if(sessionStorage.getItem("cart") !== null){
                                    if (y.id === 1) {
                                        return Array.from(sessionStorage.getItem("cart").split(",")).map((value, key) => {
                                            return (
                                                <li>{funL(parseInt(value)).name} <a className={"float-end"}
                                                                                    style={{maxHeight: "16px"}}
                                                                                    id={key.toString()}
                                                                                    onClick={(event) => {
                                                                                        let tmp = Array.from(sessionStorage.getItem("cart").split(","))
                                                                                        tmp.splice(parseInt(event.target.parentNode.id), 1);
                                                                                        sessionStorage.setItem("cart", tmp);
                                                                                        window.location.reload();
                                                                                    }}><i className="bi bi-x-lg"
                                                                                          style={{color: "red"}}></i></a>
                                                </li>
                                            );
                                        });
                                    }
                                }
                            }
                        )
                    }
                    <button type="button" className="btn btn-secondary float-end mt-4 me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                        Rezerwuj
                    </button>
                </ul>
            </div>
            <a className="nav-link" aria-current="page" href="/user"><i className="bi bi-person user me-2"></i></a>
            <button onClick={() => {
                sessionStorage.removeItem("zalogowany");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("login");
                window.location.reload();
            }} type="button" className="btn btn-danger m-2">
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
    let weps;
    if(sessionStorage.getItem("cart") !== null)
        weps = sessionStorage.getItem("cart").toString();

    return (
        <div>

            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal_ text-white">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Rezerwacja</h1>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{bronie: sessionStorage.getItem("cart"), data: new Date()}}
                                onSubmit={onSubmit2}
                            >
                                {(props) => (
                                    <Form>
                                        <div className="form-group">
                                            <label className="label_">Wybrane nr. broni:</label>
                                            <ErrorMessage name="wep" component="span"/>
                                            <Field
                                                readOnly
                                                autoComplete="off"
                                                className="col-12"
                                                id="inputWep"
                                                name="wep"
                                                value={weps}
                                            />
                                            <label className="label_">Data:</label>
                                            <ErrorMessage name="date" component="span"/>
                                            <MyDatePicker name="date"/>
                                        </div>
                                        <button type="submit" className="btn m-auto mt-4 btn-danger col-4">Akceptuj
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

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
                                        id = "inputHaslo"
                                        type="password"
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
                                        id = "inputHaslo"
                                        type="password"
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
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Typy broni
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/bron_krotka">Broń krótka</a></li>
                                    <li><a className="dropdown-item active" href="/bron_dluga">Broń długa</a></li>
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
                <div className="container-fluid Background">
                    <div className="container text-center">
                        <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 g-5 py-5 text-center justify-content-center">

                            {records.map((value) => {
                                return (
                                    <div className="col">
                                        <div className="card WP">
                                            <img src={"data:image/png;base64," + Buffer.from(value.photo).toString("base64")} className="card-img-top c_Photo" alt="..." />
                                            <div className="card-body bg-dark">
                                                <h6 className="card-title text-white">{value.id}. {value.name}</h6>
                                                <div className="hline" />
                                                <p>
                                                    <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                        Więcej
                                                    </a>
                                                </p>
                                                <div className="collapse pb-3" id="collapseExample">
                                                    <div className="card card-body">
                                                        <h6><b>Typ:</b> Pistolet samopowtarzalny</h6>
                                                        <h6><b>Kaliber:</b> 9x19mm</h6>
                                                        <h6><b>Pojemność magazynka:</b> 16</h6>
                                                        <h6><b>Waga: </b> 630g</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        <h1 className="text center text-white pb-3"><i><u>Cennik</u></i></h1>
                        <div className="row">
                            <table className="table table-dark table-striped pb-5 text-center">
                                <thead>
                                <tr>
                                    <th scope="col">Nr. broni</th>
                                    <th scope="col">Naboje</th>
                                    <th scope="col">Cena</th>
                                    {tab}
                                </tr>
                                </thead>
                                <tbody>

                                {records.map((value) => {
                                    return (
                                        <tr key = {value.id}>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.bullets_num}</td>
                                            <td>{value.price} zł</td>
                                            {but}
                                        </tr>
                                    );
                                })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bron_dluga

