import { FC, useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { PhotoAlbum } from 'react-photo-album';
import { photos } from 'shared/constants/photos';

const PhotoGallery:FC = () => {
  const [index, setIndex] = useState<number>(-1);
  const slides = photos.map(({
    src, width, height, images,
  }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  }));
  return (
    <>
      <PhotoAlbum
        layout="columns"
        photos={photos}
        targetRowHeight={50}
        onClick={(i: any) => setIndex(i)}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default PhotoGallery;
