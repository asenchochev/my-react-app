import styles from './Details.module.css';


export default function ComentItem({
    text,
    firstName,
    lastName
}) {
    return (
        <div className="testimonial-item bg-light rounded p-3">
            <div className="bg-white border rounded p-4">
                <div className="d-flex align-items-center">
                    <img
                        className={`img-fluid flex-shrink-0 rounded ${styles.imgUserComment}`}
                        src="/src/assets/img/person-icon.png"
                        alt=""
                        
                    />
                    <div className="ps-3">
                        <h6 className="fw-bold mb-1">{firstName}</h6>
                        <h6 className="fw-bold mb-1">{lastName}</h6>
                    </div>

                </div>
                <p style={{paddingTop:'10px'}}>{text}</p>
            </div>
        </div>
    )
}