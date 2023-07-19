import '../stylesheet.css';

function Header() {
    return <header class="extraPadding"><p>Photo Fetcher</p>

    <article class="sliderWrapper floatLeft">
        <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
        </label>
        <p>Make photos grayscale</p>
    </article>
    <button class="floatRight button">Fetch New Photos</button>
</header>
}

export default Header;