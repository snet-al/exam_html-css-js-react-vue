import Button from "./UI/Button"

function Footer(props){
    return(
        <footer>
            <Button className="js-load-more" id="loadMore" onClick={props.onLoadMore} text="Load More"/>
        </footer>
    )
}

export default Footer