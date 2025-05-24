function Footer({onClick}){
  return(
    <footer className="load-more-container">
        <button className="js-load-more" onClick={onClick}>
        Load More Photos
        </button>
    </footer>
  );
}
export default Footer