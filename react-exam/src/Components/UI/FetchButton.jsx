function FetchButton({onClick}){
  return(
    <button className="js-fetch-button" id="fetchBtn" onClick={onClick}>
        Fetch New Photos
    </button>
  );
}

export default FetchButton