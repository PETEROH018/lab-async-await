async function handleFetch(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    displayPosts(posts)
}

function displayPosts(posts){
    const postsList = document.querySelector('#post-list')
    posts.forEach((post) => {
    const list = document.createElement('li')
    const heading = document.createElement('h1')
    heading.textContent = post.title
    const paragraph = document.createElement('p')
    paragraph.textContent = post.body
    list.appendChild(heading)
    list.appendChild(paragraph)
    postsList.appendChild(list)

 

    })

}

handleFetch()