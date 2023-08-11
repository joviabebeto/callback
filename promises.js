const posts =[ {
   name:"brigitte",
    title:"post 1"},{
        name:"Alan",
        title:"post 1",
    },
];
const createpost=(post)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           try{
            posts.push(post);
            resolve(posts);
           }
           catch(error){
            reject(error.message);
           }

        },1000);

    });
};

const displayposts=(userposts)=>{
    userposts.forEach((post) => console.log(`${post.name} posted ${post.title}`)
        
   ) };
   
//    createpost({
//     name:"brino",
//     title:"posit 2",
// })
// .then(( allposts)=>displayposts(allposts))
// .catch((error)=>console.log("Error:"+err));
async function mainExecution(){
    try {
        const availableposts=await createpost({
            name:"hirwa",
            title:"post 3",
        });
        displayposts(availableposts);

    }catch(err){
        console.log("Error".err);
        console.log("Error".err);
        console.log("Error".err);
    }
}
mainExecution();
async function boom(){
    try{
        const fireworks=await getFireworks();
        const trigger=await setUpFireworks(fireworks);
        return trigger();
    }catch(error){
        return 'Run Away!'
    }
}
async function callAsync(){
    for (let i=0; i<iteration;i++){
        await pushAwait();
    }
    return 0;
}
function checkAssertion(){
    asserArrayEguals(expected,actual,
        'Async/await and promises should be interleaved')
}

// const Promise1=new Promise((resolve,reject)=>{
//     try {
//         resolve({typ:"Animal",name:"Elephant"});

//     }
//     catch(error){
//         reject(error,message)
//     }
// });
// const Promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve([1000,2000,5000,40000]);
// },3000);});

// Promise.all([Promise1,Promise2])
// .then((data)=>console.log("date",data))
// .catch((err)=>console.log("error",err));