import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 325, marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.placecage.com/c/200/120',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.placecage.com/c/200/121',
    title: 'Burger',
  },
  {
    img: 'https://www.placecage.com/c/200/211',
    title: 'Camera',
  },
  {
    img: 'https://www.placecage.com/c/200/101',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://www.placecage.com/c/200/102',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://www.placecage.com/c/200/103',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.placecage.com/c/200/104',
    title: 'Basketball',
  },
  {
    img: 'https://www.placecage.com/c/200/105',
    title: 'Fern',
  },
  {
    img: 'https://www.placecage.com/c/200/106',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.placecage.com/c/200/107',
    title: 'Tomato basil',
  },
  {
    img: 'https://www.placecage.com/c/200/108',
    title: 'Sea star',
  },
  {
    img: 'https://www.placecage.com/c/200/109',
    title: 'Bike',
    cols: 2,
  },
];
