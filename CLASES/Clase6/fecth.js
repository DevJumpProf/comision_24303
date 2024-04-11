let getNameFetch = (idPost) => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((res) => {
        /*     console.log(res); */
        return res.json();
      })
      .then((post) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => {
            return res.json();
          })
          .then((user) => {
            console.log(user);
            /* 
                document.write (`El posteo ${idPost} lo escribio ${user.name}`) */

            document.write(`${user.name} vive en ${user.address.street}`);
          });
      });
  } catch (error) {
    console.log(error);
  }
};

getNameFetch(32);

/* 
https://jsonplaceholder.typicode.com/posts/

https://jsonplaceholder.typicode.com/users */
