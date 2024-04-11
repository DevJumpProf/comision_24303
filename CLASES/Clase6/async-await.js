let getNameAsync = async (idPost) => {

    try {
      let resPost = await  fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
     /*  console.log(resPost); */
      let post = await resPost.json()
/*      console.log(post) */

     let resUsers = await  fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
  /*   console.log(resUsers) */;
    let user = await resUsers.json()
    console.log(user);
/* 
    document.write (`El posteo ${idPost} lo escribio ${user.name}`) */

    document.write (`${user.name} vive en ${user.address.street}`)
      
    } catch (error) {
        console.log(error);
    }
};


getNameAsync(32);


/* 
https://jsonplaceholder.typicode.com/posts/

https://jsonplaceholder.typicode.com/users */