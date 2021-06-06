/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`;
    fetch(url, {
        method: "GET"
    }).then((res) => {
        return res.json();
    }).then((data) => {
        buildPost(data);
    });
}

const buildPost = (post) => {
    // HINT: Convert the date number to a Date string 
    let blogPostContent = "";
        const postDate = new Date(parseInt(post.added_date)).toDateString();
        const postImage = `${API_BASE_URL}${post.post_image}`;
        blogPostContent += `
        <div id="individual-post-title">${post.title}</div>
                        <div id="individual-post-date">Published on ${postDate}</div>
                        <div id="individual-post-content">${post.content}</div>
        `
    document.querySelector(".post-container").innerHTML = blogPostContent;
    document.querySelector("header").style.backgroundImage = `url(${postImage})`
}

