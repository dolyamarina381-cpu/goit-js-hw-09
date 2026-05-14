import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const localImages = [
  { file: "0b5d6f978746606f5644ab8bf836a19e68bd8246.jpg", description: "Gallery image 1" },
  { file: "2bab8cd41bcc5a2255da522ea2a79402020a7d5d.jpg", description: "Gallery image 2" },
  { file: "390fd68d955549ff429e815e5e2bade820721376.jpg", description: "Gallery image 3" },
  { file: "397696b0ca2f409c0e028c22bc862fa002981112.jpg", description: "Gallery image 4" },
  { file: "48be88f71998c160dc2be34a63b3f2183392ff8b.jpg", description: "Gallery image 5" },
  { file: "5dde46220907ed8fd691000bbe73fee51101d8ee.jpg", description: "Gallery image 6" },
  { file: "7391477de6356a31941e3cc31c991e67894bb945.jpg", description: "Gallery image 7" },
  { file: "b7c363e33c57d745a2bada38125746fc6ec0d9cc.jpg", description: "Gallery image 8" },
  { file: "c9a704d1391760494c3ad88cab833c525eb33d6c.jpg", description: "Gallery image 9" },
];

const images = localImages.map(({ file, description }) => {
  const imageUrl = new URL(`../img/${file}`, import.meta.url).href;

  return {
    preview: imageUrl,
    original: imageUrl,
    description,
  };
});

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join("");

gallery.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});