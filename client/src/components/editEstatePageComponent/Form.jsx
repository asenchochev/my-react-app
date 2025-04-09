import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import * as estateService from '../../services/estateService'
import styles from './EditEstate.module.css'
import useValidator from '../../hooks/useValidator';

const initialValues = {

    title: "",
    price: "",
    mainPhoto: "",
    secondPhoto: "",
    thirdPhoto: "",
    address: "",
    description: "",
    types: "",
    meters: "",
    rooms: "",
    baths: "",
    location: "",
}

export default function FormEstate({
}) {
    const { estateId } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState(initialValues)
    const { errors, validatorHandler } = useValidator()

    useEffect(() => {
        estateService.getOne(estateId)
            .then(result => setValues(result))
            .catch(err => {
                navigate('/')
                console.log(err)
            })
    }, [estateId])

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await estateService.edit(estateId, values)
            navigate(`/${estateId}-details`)
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        placeholder="Appartment with 2 rooms, California"
                        onChange={onChangeHandler}
                        value={values.title}
                        onBlur={() => validatorHandler("title", values.title)}
                    />
                    {errors.title && (
                        <p className={styles.errorMessage}>{errors.title}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Main Photo</Form.Label>
                    <Form.Control
                        name="mainPhoto"
                        placeholder="Inster Link Here"
                        onChange={onChangeHandler}
                        value={values.mainPhoto}
                        onBlur={() => validatorHandler("mainPhoto", values.mainPhoto)}
                    />
                    {errors.mainPhoto && (
                        <p className={styles.errorMessage}>{errors.mainPhoto}</p>
                    )}

                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control
                        name="secondPhoto"
                        placeholder="Inster Link Here"
                        onChange={onChangeHandler}
                        value={values.secondPhoto}
                        onBlur={() => validatorHandler("secondPhoto", values.secondPhoto)}
                    />
                    {errors.secondPhoto && (
                        <p className={styles.errorMessage}>{errors.secondPhoto}</p>
                    )}
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control
                        name="thirdPhoto"
                        placeholder="Inster Link Here"
                        onChange={onChangeHandler}
                        value={values.thirdPhoto}
                        onBlur={() => validatorHandler("thirdPhoto", values.thirdPhoto)}
                    />
                    {errors.thirdPhoto && (
                        <p className={styles.errorMessage}>{errors.thirdPhoto}</p>
                    )}
                </Form.Group>

            </Row>
            <Row>
                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="address"
                        placeholder="1234 Main St"
                        onChange={onChangeHandler}
                        value={values.address}
                        onBlur={() => validatorHandler("address", values.address)}
                    />
                    {errors.address && (
                        <p className={styles.errorMessage}>{errors.address}</p>
                    )}
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Metters</Form.Label>
                    <Form.Control
                        type="number"
                        name="meters"
                        placeholder="m²"
                        onChange={onChangeHandler}
                        value={values.meters}
                        onBlur={() => validatorHandler("meters", values.meters)}
                    />
                    {errors.meters && (
                        <p className={styles.errorMessage}>{errors.meters}</p>
                    )}
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Room</Form.Label>
                    <Form.Control
                        type="number"
                        name="rooms"
                        placeholder="Number"
                        onChange={onChangeHandler}
                        value={values.rooms}
                        onBlur={() => validatorHandler("rooms", values.rooms)}
                    />
                    {errors.rooms && (
                        <p className={styles.errorMessage}>{errors.rooms}</p>
                    )}
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Bath</Form.Label>
                    <Form.Control
                        type="number"
                        name="baths"
                        placeholder="Number"
                        onChange={onChangeHandler}
                        value={values.baths}
                        onBlur={() => validatorHandler("baths", values.baths)}
                    />
                    {errors.baths && (
                        <p className={styles.errorMessage}>{errors.baths}</p>
                    )}
                </Form.Group>


            </Row>
            <Row className="mb-3">
                <Form.Label>Description</Form.Label>



                <Form.Control
                    as="textarea"
                    placeholder="Describe your estate here"
                    style={{ maxWidth: '620px', marginLeft: '12px', height: "100px" }}
                    name="description"
                    onChange={onChangeHandler}
                    value={values.description}
                    onBlur={() => validatorHandler("description", values.description)}
                />
                {errors.description && (
                    <p className={styles.errorMessage}>{errors.description}</p>
                )}

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                        name="types"
                        onChange={onChangeHandler}
                        value={values.types}
                        onBlur={() => validatorHandler("types", values.types)}

                    >

                        <option value="">Chose Type</option>
                        <option value="Villa">Villa</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Office">Office</option>
                        <option value="Garage">Garage</option>
                    </Form.Select>
                    {errors.types && (
                        <p className={styles.errorMessage}>{errors.types}</p>
                    )}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        placeholder='$| 100,000'
                        onChange={onChangeHandler}
                        value={values.price}
                        onBlur={() => validatorHandler("price", values.price)}
                    />
                    {errors.price && (
                        <p className={styles.errorMessage}>{errors.price}</p>
                    )}
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" >
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        name="location"
                        placeholder="County, City"
                        onChange={onChangeHandler}
                        value={values.location}
                        onBlur={() => validatorHandler("location", values.location)}
                    />
                    {errors.location && (
                        <p className={styles.errorMessage}>{errors.location}</p>
                    )}
                </Form.Group>
            </Row>
            <Row>

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    active
                    disabled={Object.values(errors).some(err => err) || Object.values(values).some(value => value === "")}>

                    SUBIMT
                </Button>
            </Row>
        </Form>
    )
}