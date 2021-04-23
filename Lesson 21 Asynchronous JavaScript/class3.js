// Async-Await Method
let posts = [
    {
        title: "Post1",
        content: "At accusantium accusamus tempora, alias exercitationem ut?",
    },
    {
        title: "Post2",
        content: "At accusantium accusamus tempora, alias exercitationem ut?",
    },
];

function viewPosts(){
    setTimeout(() => {
        let html_content = "";
        posts.map((post)=>{
            html_content+= `<h1>${post.title}</h1><p>${post.content}</p>`
        });
        document.body.innerHTML = html_content;
    }, 1000);
};

function createPost(){
    return new Promise((resolve, reject)=>{
        posts.push(post);
        console.log(posts);
        let error = true;
        if (!error){
            resolve();
        }else{
            reject("Error Occured");
        };
    });
};

let post = {
    title : "Post3",
    content : "At accusantium accusamus tempora, alias exercitationem ut?",
};

async function start(){
    await viewPosts();
    createPost();
};

start()