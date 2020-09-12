import React from 'react'
import DatosUsuario from '../../context/DatosUsuario';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from "yup";

const InsertarPelicula = () => {
    /* const [dataPelicula, setDataPelicula] = useState({
         title: "",
         year: "2018",
         cover: "http://dummyimage.com/170x206.jpg/cc0000/ffffff",
         description: "Test descripción película",
         duration: "120",
         contentRating: "PG",
         source: "http://prnewswire.com/aliquam/erat.html",
         tags: [
             "test 1",
             "test 2"
         ]
     })*/
    //const [validated, setValidated] = useState(false);
    // const schema = yum
    Yup.addMethod(Yup.mixed, 'methodName', function (anyArgsYouNeed) {
        const { message } = anyArgsYouNeed;
        console.log("entro en la validación")
        return this.test('test-name', message, function (value) {
            const { path, createError } = this;
            const { some, more, args } = anyArgsYouNeed;
            // [value] - value of the property being tested
            // [path]  - property name,
            // ...
            return false
        });
    });

    const schema = Yup.object().shape({
        title: Yup.string().required("Valor requerido"),
        year: Yup.number().min(2010, "El valor debe ser mayor o igual a 2010").max(2020, "El valor no debe ser mayor a 2020").required("El año es obligatorio"),
        cover: Yup.string().url("Debe ser una url valida").required("El cover es requerido"),
        source: Yup.string().url("Debe ser una url valida").required("El campo es requerido"),
        duration: Yup.number().min(30, "El valor debe ser mayor o igual a 30").max(300, "El valor no debe ser mayor a 300").required("El año es obligatorio"),
        contentRating: Yup.mixed().oneOf(['R', 'G', 'PG', 'PG-13', 'NC-17'], "Valor fuera de rango.").required("Este campo es obligatorio"),
        tags: Yup.string().required("Valor requerido"),
        description: Yup.string().max(30).required()
    })

    // const contextType = <DatosUsuario/>
    //    console.log(contextType)
    return (

        <Formik
            validationSchema={schema}
            onSubmit={async(values) => {
                let respuesta = await fetch('https://api-movies-users.vercel.app/movies', { method: 'POST', body: JSON.stringify(values), headers: { 'Content-Type': 'application/json' } })
                let pelicula = await respuesta.json()
                if (respuesta.status === 201) {
                    alert(`Pelicula con ID ${pelicula.id} insertada`)
                }
            }}
            initialValues={{
                title: "test tittle",
                year: "2018",
                cover: "http://dummyimage.com/170x206.jpg/cc0000/ffffff",
                description: "Test descripción película",
                duration: "120",
                contentRating: "PG",
                source: "http://prnewswire.com/aliquam/erat.html",
                tags: 'test',
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = props;
                return <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <Form.Label>Titulo (*)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Titulo"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.title && !errors.title}
                                    isInvalid={!!errors.title}
                                />
                                <Form.Control.Feedback>Campo valido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>

                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="year">
                                <Form.Label>Año (*)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="year"
                                    placeholder="YYYY"
                                    value={values.year}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.year && !errors.year}
                                    isInvalid={!!errors.year}
                                />
                                <Form.Control.Feedback>Campo valido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="cover">
                                <Form.Label>Caratula (*)</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="cover"
                                    placeholder="Caratula de la portada"
                                    value={values.cover}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.cover && !errors.cover}
                                    isInvalid={!!errors.cover}
                                />
                                <Form.Control.Feedback type="invalid">{errors.cover}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="source">
                                <Form.Label>Fuente (*)</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="source"
                                    placeholder="URL Fuente"
                                    value={values.source}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.source && !errors.source}
                                    isInvalid={!!errors.source}
                                />
                                <Form.Control.Feedback type="invalid">{errors.source}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="duration">
                                <Form.Label>Año (*)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="duration"
                                    placeholder="Duración en minutos"
                                    value={values.duration}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.duration && !errors.duration}
                                    isInvalid={!!errors.duration}
                                />
                                <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="contentRating">
                                <Form.Label>Clasificación (*)</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="contentRating"
                                    value={values.contentRating}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.contentRating && !errors.contentRating}
                                    isInvalid={!!errors.contentRating}
                                >
                                    <option value="R">Restringido</option>
                                    <option value="G">General</option>
                                    <option value="PG">En compañia de un adulto</option>
                                    <option value="PG-13">En compañia de un adulto y publico mayor a 13</option>
                                    <option value="NC-17">Publico mayor a 17</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">{errors.contentRating}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="tags">
                                <Form.Label>Tags (*)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tags"
                                    placeholder="Cada tag debe ir con una ,"
                                    value={values.tags}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.tags && !errors.tags}
                                    isInvalid={!!errors.tags}
                                />
                            </Form.Group>
                            <Form.Control.Feedback type="invalid">{errors.tags}</Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="description"
                                    placeholder="Descripción de la película"
                                    defaultValue={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.description && !errors.description}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Enviar</Button>
                </Form>
            }}
        </Formik>
    )
}

export default InsertarPelicula
