import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Logo from "../../logo.svg";

export default function ImageGallery({ photos }) {
  // state
  const [related, setRelated] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // hooks
  const params = useParams();
const generatePhotosArray = (photos) => {
        if (photos?.length > 0) {
            const x = photos?.length === 1?2:4;
         let arr=[];
         photos.map((p)=>
                arr.push({
                src: p.Location,
                width: x,
                height: x,  
            }));
            return arr;
        }else{
            return [
                {
                    src: Logo,
                    width: 2,
                    height: 1,
                },
            ];
        
        }
};
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrent(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrent(0);
    setIsOpen(false);
  };

return (
    <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
            {isOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={current}
                        views={photos.map((x) => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title,
                        }))}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
    </div>
);
}