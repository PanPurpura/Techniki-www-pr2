import '../App.css'
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";

function Kontakt() {

    const initialValues = {
        email: "",
        password: "",
    };

    const initialValues1 = {
        login: "",
        password: "",
        email: "",
    };

    const init = {
        imie: "",
        nazwisko: "",
        email: "",
        temat: "",
        wiadomosc: "",
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

    const validation = Yup.object().shape({
        imie: Yup.string().required("To pole jest wymagane"),
        nazwisko: Yup.string().required("To pole jest wymagane"),
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

    const onSubmit2 = (data) => {
        axios.post("http://localhost:3001/complains", data).then((response) => {
            window.location.reload();
            console.log(response)
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
                                        type="password"
                                        id = "inputLogin"
                                        name = "login"
                                        placeholder = "Wprowadź swój login"
                                    />
                                    <label className="label_">Hasło :</label>
                                    <ErrorMessage name="password" component="span" />
                                    <Field
                                        autoComplete = "off"
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
                                <a className="nav-link" aria-current="page" href="/">Home</a>
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
                                <a className="nav-link active" href="/Kontakt">Kontakt</a>
                            </li>
                        </ul>
                        {code}
                    </div>
                </div>
            </nav>

            <div>
                <div className="container-fluid contact">
                    <div className="container py-3 text-center">
                        <h1 className="text-white"><i><b>Kontakt</b></i></h1>
                    </div>
                </div>
                <div className="Background">
                    <div className="container-fluid text-center">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-12 col-md-6 px-5">
                                        <h4 className="text-white text-center py-3">Szybki kontakt</h4>

                                    <Formik initialValues = {init} onSubmit={onSubmit2} validationSchema={validation}>
                                        <Form className="formContainer text-white" >
                                            <label className="label_">Imię:</label>
                                            <ErrorMessage name="imie" component="span" />
                                            <Field
                                                autoComplete = "off"
                                                id = "inputImie"
                                                className="col-12"
                                                name = "imie"
                                                placeholder = "Andrzej"
                                            />
                                            <label className="label_">Nazwisko:</label>
                                            <ErrorMessage name="nazwisko" component="span" />
                                            <Field
                                                autoComplete = "off"
                                                id = "inputNazwisko"
                                                className="col-12"
                                                name = "nazwisko"
                                                placeholder = "Nowak"
                                            />
                                            <label className="label_">Adres e-mail:</label>
                                            <ErrorMessage name="email" component="span" />
                                            <Field
                                                autoComplete = "off"
                                                id = "inputEm"
                                                type="email"
                                                className="col-12"
                                                name = "email"
                                                placeholder = "andrzej.nowak@example.com"
                                            />
                                            <label className="label_">Temat:</label>
                                            <ErrorMessage name="temat" component="span" />
                                            <Field as="select" name="temat" className="col-12" autoComplete="off" placeholder="temat">
                                                <option value="skarga">Skarga</option>
                                                <option value="rezerwacja">Rezerwacja</option>
                                                <option value="inne">Inne</option>
                                            </Field>
                                            <label className="label_">Wiadomosc:</label>
                                            <ErrorMessage name="wiadomosc" component="span" />
                                            <Field
                                                autoComplete = "off"
                                                id = "inputText"
                                                className="col-12"
                                                name = "wiadomosc"
                                                placeholder = "Wprowadz wiadomosc"
                                            />

                                            <button type="submit" className="btn m-auto my-3 btn-danger col-4">Wyślij</button>
                                        </Form>
                                    </Formik>

                                </div>
                                <div className="col-12 col-md-6 align-self-center px-5 pb-3">
                                    <div className="card">
                                        <div className="card-body bgd text-white">
                                            <h2 className="card-title">Kontakt mailowy</h2>
                                            <p className="card-text">W przypadku braku odpowiedniego tematu w szybkim kontakcie.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item lightgrey"><b>Dział obsługi klienta:</b> obsługa@msite.com</li>
                                            <li className="list-group-item lightgrey"><b>Marketing:</b> marketing@msite.com</li>
                                            <li className="list-group-item lightgrey"><b>Pomoc</b> help@msite.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid img text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 align-self-center px-5 pt-3 pb-3">
                                    <div className="card">
                                        <div className="card-body bgd text-white">
                                            <h2 className="card-title">Kontakt telefoniczny</h2>
                                            <p className="card-text">Możliwa rezerwacja telefoniczna</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item lightgrey"><b>Dział obsługi klienta:</b> 456 274 333</li>
                                            <li className="list-group-item lightgrey"><b>Dział Marketingu:</b> 721 731 990</li>
                                            <li className="list-group-item lightgrey"><b>Recepcja:</b> 984 253 567</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 align-self-center px-5">
                                    <h4 className="text-white">Godziny pracy działu obsługi klienta:</h4>
                                    <p className="text-white">Poniedziałek-Piątek: 9:00-15:00 </p>
                                    <h4 className="text-white">Godziny otwarcia:</h4>
                                    <p className="text-white">Poniedziałek-Piątek: 9:00-20:00 <br />
                                        Sobota: 10:00-16:00 <br />
                                        Niedziela: Nieczynne</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row text-center justify-content-center">
                                <div className="col-12 col-md-8 py-3 align-self-center">
                                    <div className="card">
                                        <div className="card-body bgd text-white">
                                            <h2 className="card-title">FAQ</h2>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item lightgrey">
                                                <a className="btn text-white" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    Jak mogę zarezerwować wizytę? <i className="bi bi-arrow-down"></i>
                                                </a>
                                                <div className="collapse" id="collapseExample">
                                                    <div className="card card-body text-black">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget suscipit lorem. Mauris interdum consequat ultrices. Pellentesque purus massa, sagittis at quam nec, vulputate dictum ante.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item lightgrey">
                                                <a className="btn text-white" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    W jaki sposób mogę złożyć skargę? <i className="bi bi-arrow-down"></i>
                                                </a>
                                                <div className="collapse" id="collapseExample1">
                                                    <div className="card card-body text-black">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget suscipit lorem. Mauris interdum consequat ultrices. Pellentesque purus massa, sagittis at quam nec, vulputate dictum ante.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item lightgrey">
                                                <a className="btn text-white" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    Czy mogę wybrać własny zestaw broni? <i
                                                    className="bi bi-arrow-down"></i>
                                                </a>
                                                <div className="collapse" id="collapseExample2">
                                                    <div className="card card-body text-black">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget suscipit lorem. Mauris interdum consequat ultrices. Pellentesque purus massa, sagittis at quam nec, vulputate dictum ante.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item lightgrey">
                                                <a className="btn text-white" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    Czy strzelnica jest otwarta w święta? <i
                                                    className="bi bi-arrow-down"></i>
                                                </a>
                                                <div className="collapse" id="collapseExample3">
                                                    <div className="card card-body text-black">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget suscipit lorem. Mauris interdum consequat ultrices. Pellentesque purus massa, sagittis at quam nec, vulputate dictum ante.
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontakt

/*
<Formik initialValues={init} onSubmit={compS} validationSchema={validation}>
                                        <Form className="formContainer">
                                            <label className="text-white">Imię:</label>
                                                <ErrorMessage name="imie" component="span" />
                                                <Field
                                                    className="col-12"
                                                    autoComplete = "off"
                                                    id = "inputImie"
                                                    name = "imie"
                                                    placeholder = "Andrzej"
                                                />
                                            <label className="text-white">Nazwisko:</label>
                                                <ErrorMessage name="nazwisko" component="span" />
                                                <Field
                                                    className="col-12"
                                                    autoComplete = "off"
                                                    id = "inputNazwisko"
                                                    name = "nazwisko"
                                                    placeholder = "Nowak"
                                                />
                                            <label className="text-white">Adres E-mail</label>
                                                <ErrorMessage name="em" component="span" />
                                                <Field
                                                    className="col-12"
                                                    autoComplete = "off"
                                                    type = "email"
                                                    id = "inputEm"
                                                    name = "em"
                                                    placeholder = "andrzej.nowak@example.com"
                                                />
                                            <label className="text-white">Temat wiadomości</label>
                                            <Field as="select" className="col-12" name="options">
                                                <option value="Skarga">Skarga</option>
                                                <option value="Rezerwacja">Rezerwacja</option>
                                                <option value="Inne">Inne</option>
                                            </Field>
                                            <lable className="text-white">Wiadomość</lable>
                                                <ErrorMessage name="text" component="span" />
                                                <Field
                                                    className="col-12"
                                                    autoComplete = "off"
                                                    id = "inputText"
                                                    name = "text"
                                                    placeholder = "Wprowadz wiadomosc"
                                                />
                                            <button type="submit" className="btn btn-danger col-6 my-3">Wyślij</button>
                                        </Form>
                                    </Formik>
 */