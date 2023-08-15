import GalleryItem from "./GalleryItem";

import "../sass/Gallery.scss"

const Gallery = (props) => {
    let {items} = props;

    const sizes = ["thumbnailSmall", "thumbnailMedium", "thumbnailLarge"];

    return (
        <section  className="galleryGrid">
            {items.length > 0 && items.map((item, i) => {
                return (
                    <GalleryItem
                        key={i}
                        id={item._id}
                        category={item.category}
                        title={item.title}
                        thumbnail={item.thumbnail}
                        filename={item.filename}
                        size={sizes[i % sizes.length]}
                        isVideo={props.isVideo}
                    />
                )})}
        </section>
    )
}

export default Gallery;


