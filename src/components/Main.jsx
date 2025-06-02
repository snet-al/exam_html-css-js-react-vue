function Main({children,grayscale}){

    return (
        <article className="images-container" style={{filter:grayscale? 'grayscale(100%)':'grayscale(0%)' }}>
            {children}
        </article>
    )
    
}
export default Main