import React from "react";
import '../App.css'
import o_nas from "./o_nas";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";

function Bron_dluga() {

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
            console.log(response);
            window.location.reload()
        });
    };

    const onSubmit1 = (data) => {
        axios.post("http://localhost:3001/accounts", data).then((response) => {
            sessionStorage.setItem("zalogowany", "1");
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
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/ar-15.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">1. AR-15 SNIPER</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/mossberg.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">2. H&amp;K MP5</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample1">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/caa_roni.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">3. CAA RONI</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample2">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/m4a1.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">4. M4A1</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample3">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/gsg.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">5. GSG MP5 (.22LR)</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample4">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/scorpion.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">6. CZ SCORPION EVO3 S1</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample5">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/tavor.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">7. TAVOR CTAR-21</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample6">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/tavor.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">8. MSBS "GROT"</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample7">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card WP">
                                    <img src={require('./img/AKM.jpg')} className="card-img-top c_Photo" alt="..." />
                                    <div className="card-body bg-dark">
                                        <h6 className="card-title text-white">9. AKM</h6>
                                        <div className="hline" />
                                        <p>
                                            <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Więcej
                                            </a>
                                        </p>
                                        <div className="collapse pb-3" id="collapseExample8">
                                            <div className="card card-body">
                                                <h6><b>Typ:</b> Karabinek samopowtarzalny</h6>
                                                <h6><b>Kaliber:</b> 9×19 mm</h6>
                                                <h6><b>Pojemność magazynka:</b> 17/33</h6>
                                                <h6><b>Waga: </b> 2.7 kg</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text center text-white pb-3"><i><u>Cennik</u></i></h1>
                        <div className="row">
                            <table className="table table-dark table-striped pb-5 text-center">
                                <thead>
                                <tr>
                                    <th scope="col">Nr. broni</th>
                                    <th scope="col">Naboje</th>
                                    <th scope="col">Cena</th>
                                    <th />
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>10</td>
                                    <td>60 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>10</td>
                                    <td>50 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>10</td>
                                    <td>50 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>10</td>
                                    <td>60 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>10</td>
                                    <td>50 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>10</td>
                                    <td>50 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>10</td>
                                    <td>60 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>10</td>
                                    <td>60 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>10</td>
                                    <td>60 zł</td>
                                    <td><button type="button" className="btn btn-secondary">Wybierz</button></td>
                                </tr>
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