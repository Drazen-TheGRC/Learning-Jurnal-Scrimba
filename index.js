import {posts} from "./data.js"


document.addEventListener("click", function(e){
    if(e.target.id === "view-more"){
        renderAllPostGrid()
    }
    // Store post into local storage
    else if(e.target.dataset.post_uuid)
    {
        openPost(e.target.dataset.post_uuid)
    }
})










function openPost(post_uuid){

    const featured_post = posts.filter(function(post){
        return post.post_uuid === post_uuid
    })[0]

    localStorage.setItem("featured_post", JSON.stringify(featured_post))

    window.open("post.html", "_self")
}


function renderHomeFeaturedPost(){
    const date = posts[0].post_date
    const heading = posts[0].heading
    const intro_paragraph = posts[0].intro_paragraph

    let post_html = ""

    post_html = 

    `
    <article class="article-home">
        <div class="max-width">
            <p class="date">${date}</p>
            <h2 class="heading" >${heading}</h2>
            <p class="intro-paragraph">${intro_paragraph}</p>
        </div>
    </article>
    `

    document.getElementById("featured-post").innerHTML = post_html
}

function renderPostFeaturedPost(){

    const featured_post = JSON.parse(localStorage.getItem("featured_post"))

    const date = featured_post.post_date
    const heading = featured_post.heading
    const intro_paragraph = featured_post.intro_paragraph
    const post_photo = featured_post.post_photo

    // Make html for post sections

    let sectionHtml = ""

    featured_post.sections.forEach(function(section){
        sectionHtml += 
        `
            <h3 class="heading heading-section" >${section.heading}</h3>
            <p class="intro-paragraph">${section.paragraph}</p>
            <!--<img class="post-img" src="${section.paragraph_photo}">-->
        `
    })

    console.log(sectionHtml)



    let post_html = ""

    post_html = 

    `
    <article class="article-post max-width">

            <p class="date">${date}</p>
            <h2 class="heading" >${heading}</h2>
            <p class="intro-paragraph">${intro_paragraph}</p>
            <img class="post-img img-featured-post" src="${post_photo}">

            ${sectionHtml}

            <p id="recent-posts" class="recent-posts" >Recent posts</p>

    </article>
    `

    

    document.getElementById("featured-post-no-bg").innerHTML = post_html
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
        <article class="article-post">
            <img class="post-img" src="${post_photo}" data-post_uuid="${post.post_uuid}">
            <p class="date">${date}</p>
            <h2 class="heading" data-post_uuid="${post.post_uuid}">${heading}</h2>
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
            <img class="post-img" src="${post_photo}" data-post_uuid="${post.post_uuid}">
            <p class="date">${date}</p>
            <h2 class="heading" data-post_uuid="${post.post_uuid}">${heading}</h2>
            <p class="intro-paragraph">${intro_paragraph}</p>
        </article>
        `
        }
    })

    document.getElementById("posts").innerHTML = posts_html
}



function getHtmlFilename(){
    let url = window.location.pathname;
    let file_name = url.substring(url.lastIndexOf('/')+1)
    return file_name
}



if(getHtmlFilename() === "index.html" || getHtmlFilename() === ""){
    renderHomeFeaturedPost()
    renderFewPostGrid()
}
else if(getHtmlFilename() === "post.html"){
    renderPostFeaturedPost()
    renderFewPostGrid()
}