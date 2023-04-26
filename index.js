import {posts} from "./data.js"


document.addEventListener("click", function(e){
    if(e.target.id === "view-more"){
        renderAllPostGrid()
    }
})



function renderFeaturedPost(){
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


function renderFewPostGrid(){

    let posts_html = ""
    posts.forEach(function(post){

        if(post.post_uuid != "0" && parseInt(post.post_uuid) < 4){
            const date = post.post_date
        const heading = post.heading
        const intro_paragraph = post.intro_paragraph
        const post_photo = post.post_photo
    
        posts_html += 
    
        `
        <article>
            <img class="post-img" src="${post_photo}">
            <p class="date">${date}</p>
            <h2 class="heading" >${heading}</h2>
            <p class="intro-paragraph">${intro_paragraph}</p>
        </article>
        `
        }
    })

    posts_html += 
        `
        <p id="view-more" class="view-more" >View More</p>
        `

    document.getElementById("posts").innerHTML = posts_html
}

function renderAllPostGrid(){

    let posts_html = ""
    posts.forEach(function(post){

        if(post.post_uuid != "0"){
            const date = post.post_date
        const heading = post.heading
        const intro_paragraph = post.intro_paragraph
        const post_photo = post.post_photo
    
        posts_html += 
    
        `
        <article>
            <img class="post-img" src="${post_photo}">
            <p class="date">${date}</p>
            <h2 class="heading" >${heading}</h2>
            <p class="intro-paragraph">${intro_paragraph}</p>
        </article>
        `
        }
    })

    document.getElementById("posts").innerHTML = posts_html
}



renderFeaturedPost()
renderFewPostGrid()