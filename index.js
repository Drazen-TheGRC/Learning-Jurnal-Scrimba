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
        <p class="intro-paragraph">${intro_paragraph}</p>
    </article>
    `

    document.getElementById("featured-post").innerHTML = post_html
}


function displayPostGrid(){
    const date = posts[1].post_date
    const heading = posts[1].heading
    const intro_paragraph = posts[1].intro_paragraph
    const post_photo = posts[1].post_photo
    let posts_html = ""

    posts_html = 

    `
    <article>
        <img class="post-img" src="${post_photo}">
        <p class="date">${date}</p>
        <h2 class="heading" >${heading}</h2>
        <p class="intro-paragraph">${intro_paragraph}</p>
    </article>
    `

    document.getElementById("posts").innerHTML = posts_html
}



displayFeaturedPost()
displayPostGrid()