import SliderItem from "./SliderItem";

const Slider = (props) => {
    const {items} = props;

    return (
        <section className="slider">
            {items.length > 0 && items.map((item, i) => {
                return (
                    <SliderItem
                        key={i}
                        id={item._id}
                        category={item.category}
                        level={item.level}
                        title={item.title}
                        thumbnail={item.thumbnail}
                        filename={item.filename}
                    />
                )
            })}
        </section>
    )
}

export default Slider