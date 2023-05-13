const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');


let imageList = images
  .map(image => {
    return `<li class ='gallery_item'> <img src = ${image.url} alt = ${image.alt} width=400 class = 'image_gallery'</li>`
  })
  .join('\n');
galleryRef.innerHTML = imageList;
galleryRef.style.display = 'flex';
galleryRef.style.flexWrap = 'column-reverse'
galleryRef.style.alignItems = 'center'
galleryRef.style.listStyle = 'none'
galleryRef.style.gap = '20px'
galleryRef.style.justifyContent = 'center'