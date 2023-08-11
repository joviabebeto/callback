const posts =[
    {name:"brigitte",title:"post 1"},{
        name:"Alan",title:"post 1",
    },
];
const displayposts=()=>{
    setTimeout(()=>{
posts.forEach((posts)=>{
    console.log(`${posts.name} posted ${posts.title}`)
})
    },2000);
}
const createpost=(post,callback)=>{
    setTimeout(()=>{
        posts.push(post);
        callback();
    },3000);
};
// displayposts();
createpost({
    name:"brino",
    title:"posit 2",
},displayposts);