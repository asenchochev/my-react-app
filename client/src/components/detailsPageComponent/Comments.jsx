import { useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Details.module.css';
import * as commentService from '../../services/commentService'
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

import ComentItem from './ComentItem';
import useValidator from '../../hooks/useValidator';

const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const reducer = (state, action) => {
    switch (action?.type) {
        case "GET_ALL_COMMENTS":
            return [...action.payload]
        case "ADD_COMMENT":
            return [...state, action.payload]
        default:
            return state;
    }
}

const Comments = ({
    _ownerId
}) => {

    const { estateId } = useParams()
    const { firstName, lastName, isAuthenticated, userId } = useContext(AuthContext)
    const [comments, dispatch] = useReducer(reducer, [])
    const { errors, validatorHandler } = useValidator()

    useEffect(() => {
        commentService.getAllComments(estateId)
            .then((result) => dispatch({
                type: "GET_ALL_COMMENTS",
                payload: result
            }))
    }, [estateId])

    const addComentHandler = async (values) => {
        try {
            const newComment = await commentService.postComment(estateId, values.comment, firstName, lastName)

            newComment.owner = { firstName, lastName }

            dispatch({
                type: "ADD_COMMENT",
                payload: newComment
            })
            values.comment = ""
        } catch (error) {
            console.log(error);
        }
    }

    const { values, onChangeHandler, onSubmit } = useForm({
        comment: ""
    }, addComentHandler)

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className={`text-center mx-auto mb-5 wow fadeInUp ${styles.divComment}`}
                        data-wow-delay="0.1s"

                    >
                        <h1 className="mb-3">Our Clients Say!</h1>
                    </div>
                    <div className={`testimonial-carousel wow fadeInUp ${styles.userComentDiv}`} data-wow-delay="0.1s">
                        {comments.length === 0 && (
                            <h3 className="mb-3" style={{ textAlign: "center" }}>No comments yet !</h3>

                        )}
                        <Slider {...carouselSettings}>

                            {comments.map((comment) => (
                                <ComentItem key={comment._id} {...comment} />
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
            {isAuthenticated && userId !== _ownerId && (<div className="container">
                <div
                    className={`text-center mx-auto mb-5 wow fadeInUp ${styles.divComment}`}
                    data-wow-delay="0.1s"

                >
                    <h1 className="mb-3">Your opinion matters to us</h1>
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="comment"
                                    name="comment"
                                    placeholder="Comment"
                                    style={{ width: "900px", marginLeft: "215px" }}
                                    value={values.comment}
                                    onChange={onChangeHandler}
                                    onBlur={() => validatorHandler("comment", values.comment)}
                                />
                                <label htmlFor="lastName" style={{ marginLeft: "215px" }}>Your thoughts</label>

                            </div>

                        </div>
                        {errors.comment && (
                            <p className={styles.errorMessage}>{errors.comment}</p>
                        )}
                        <div className={`col-12 ${styles.divButtonComment}`} >
                            <button
                            className="btn btn-primary w-100 py-3"
                            type="submit"
                            style={{ maxWidth: "500px" }}
                            disabled = {Object.values(errors).some(err=>err) || values.comment === ""} 
                            >
                                Comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>)}



        </>

    );
};

export default Comments;
