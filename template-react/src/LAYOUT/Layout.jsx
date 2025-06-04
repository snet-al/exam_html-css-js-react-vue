import '../index.css'
function Layout({children}){
    return(
        <div className='container'>
        {children[0]}
        {children[1]}
        {children[2]}

        </div>
    )
}

export default Layout