import GalleryItem from "./GalleryItem";

import "../sass/Gallery.scss"

const Gallery = (props) => {
    let {items} = props;

    const sizes = ["thumbnailSmall", "thumbnailMedium", "thumbnailLarge"];

    return (
        // <section className="gallery_container_grid">
        <section className="galleryContainer">
            {items.length > 0 && items.map((item, i) => {
                return (
                    <GalleryItem
                        key={i}
                        id={item._id}
                        category={item.category}
                        thumbnail={item.thumbnail}
                        filename={item.filename}
                        size={sizes[i % sizes.length]}
                        isVideo={props.isVideo}
                    />
                )})}
                {items.length === 0 && (
                    <div>Sorry no videos found</div>
                )}
        </section>
    )
}

export default Gallery;


