import { Link } from "react-router-dom";

const SliderItem = (props) => {
    let {thumbnail} = props;

    return (
        <section>
            {thumbnail ?
                <article>
                    <Link to={`/video/${props.id}`}>
                        <img src={import.meta.env.VITE_BE_URL + `/api/thumbnail/${thumbnail}`} alt="" />
                    </Link>
                    <h2>{props.category}</h2>
                    <p>{props.level}</p>
                </article>
            :
                <article>
                    <Link to={`/music`}>
                        <img src={import.meta.env.VITE_BE_URL + `/api/image/${props.filename}`} alt="" />
                    </Link>
                    <h2>{props.category}</h2>
                    <p>{props.level}</p>
                </article>
            }
        </section>
    )
}

export default SliderItem