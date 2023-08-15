import { Link } from "react-router-dom";

const SliderItem = (props) => {
    let {thumbnail} = props;

    return (
        <section className="sliderItemContainer">
            {thumbnail ?
                <article>
                    <Link to={`/video/${props.id}`}>
                        <img src={import.meta.env.VITE_BE_URL + `/api/thumbnail/${thumbnail}`} alt="" className="sliderImg"/>
                    </Link>
                    <h2 className="title">{props.category}</h2>
                    <p className="level">{props.level}</p>
                </article>
            :
                <article>
                    <Link to={`/music`}>
                        <img src={import.meta.env.VITE_BE_URL + `/api/image/${props.filename}`} alt="" className="sliderImg"/>
                    </Link>
                    <h2 className="title">{props.category}</h2>
                    <p className="level">{props.level}</p>
                </article>
            }
        </section>
    )
}

export default SliderItem