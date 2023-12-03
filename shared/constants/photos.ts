import { Photo } from '../interfaces/interfaces';

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
const unsplashPhotos: Photo[] = [
  {
    src: '/photos/8.jpg',
    width: 1280,
    height: 960,
  },
  {
    src: '/photos/9.jpg',
    width: 1280,
    height: 960,
  },
  {
    src: '/photos/10.jpg',
    width: 1204,
    height: 1280,
  },
  {
    src: '/photos/11.jpg',
    width: 1023,
    height: 1280,
  },
  {
    src: '/photos/13.jpg',
    width: 959,
    height: 1280,
  },
  {
    src: '/photos/12.jpg',
    width: 1024,
    height: 1280,
  },
  {
    src: '/photos/14.jpg',
    width: 960,
    height: 1280,
  },
  {
    src: '/photos/15.jpg',
    width: 960,
    height: 1280,
  },
  {
    src: '/photos/16.jpg',
    width: 960,
    height: 1280,
  },
  {
    src: '/photos/17.jpg',
    width: 768,
    height: 1024,
  },
  {
    src: '/photos/18.jpg',
    width: 768,
    height: 1024,
  },
  {
    src: '/photos/19.jpg',
    width: 768,
    height: 1024,
  },
  {
    src: '/photos/20.jpg',
    width: 768,
    height: 1024,
  },
  {
    src: '/photos/21.jpg',
    width: 768,
    height: 1024,
  },
];

export const photos = unsplashPhotos.map((photo: Photo) => {
  const width = breakpoints[0];
  const { src } = photo;
  const height = (photo.height / photo.width) * width;

  return {
    src,
    width,
    height,
    images: breakpoints.map((breakpoint: number) => {
      const heightPhoto = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src,
        width: breakpoint,
        height: heightPhoto,
      };
    }),
  };
});

export default photos;
