import PropTypes from "prop-types";
import def from "./default.png";

const Photos = ({ images }) => {
  return (
    <section>
      <ul>
        {images.map((img) => {
          return (
            <li key={img.id}>
              <img
                src={img.pic ?? def}
                alt="picture"
                width="100"
                height="100"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Photos;

Photos.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      pic: PropTypes.string,
    })
  ),
};
