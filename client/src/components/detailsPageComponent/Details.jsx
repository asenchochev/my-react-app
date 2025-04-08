import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as estateService from '../../services/estateService'

import DetailInformation from "./DetailInformation";
import HeaderDetails from "./HeaderDetails";
import Comments from './Comments';

export default function Details() {
    const { estateId } = useParams();
    const [estate, setEstate] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        estateService.getOne(estateId)
            .then(setEstate)
            .catch(err => {
                console.log(err)
                navigate('/')
            })
    }, [estateId])

    const onDeleteClickHandler = async (estateId) => {
        try {
            const hasConfirmed = confirm(`Are you sure you want to delete ${estate.title}`);
            if (hasConfirmed) {
                await estateService.remove(estateId);
                navigate('/catalog')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <HeaderDetails />

            <DetailInformation {...estate} onDeleteClickHandler={onDeleteClickHandler} />

            <Comments {...estate} />
        </>
    )
}