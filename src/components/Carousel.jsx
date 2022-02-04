const Picture = (props) => {
  return (
    <div className="picture">
      <img src={props.src}></img>
      <span>{props.text}</span>
    </div>
  );
};

const Carousel = () => {

  return (
    <div className="carouselFlex">
      <Picture text="Picture 1" src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?k=20&m=1322104312&s=612x612&w=0&h=bKC7TBom9CePjQaIG3BrQoEg4q3XzYwXnT45B8EljOs="></Picture>
      <Picture text="Picture 2" src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?k=20&m=1322104312&s=612x612&w=0&h=bKC7TBom9CePjQaIG3BrQoEg4q3XzYwXnT45B8EljOs="></Picture>
      <Picture text="Picture 3" src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?k=20&m=1322104312&s=612x612&w=0&h=bKC7TBom9CePjQaIG3BrQoEg4q3XzYwXnT45B8EljOs="></Picture>
      <Picture text="Picture 4" src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?k=20&m=1322104312&s=612x612&w=0&h=bKC7TBom9CePjQaIG3BrQoEg4q3XzYwXnT45B8EljOs="></Picture>
    </div>
  );
};

export default Carousel;
