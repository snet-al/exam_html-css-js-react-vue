function LoadMore({onClick}){
  return(
    <label className="load-more-container">
        <button className="js-load-more" onClick={onClick}>
        Load More Photos
        </button>
    </label>
  );
}
export default LoadMore