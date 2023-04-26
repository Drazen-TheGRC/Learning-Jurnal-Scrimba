import {posts} from "./data.js"


function displayFeaturedPost(){
    const date = posts[0].post_date
    const heading = posts[0].heading
    const intro_paragraph = posts[0].intro_paragraph

    let post_html = ""

    post_html = 

    `
    <article>
        <p class="date">${date}</p>
        <h2 class="heading" >${heading}</h2>
        <p class="text">${intro_paragraph}</p>
    </article>
    `

    document.getElementById("featured-post").innerHTML = post_html
}






displayFeaturedPost()