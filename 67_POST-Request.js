const creteTodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const newTodo = async (id) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let r = response.json();
  return r;
};

newTodo(20)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

creteTodo(20)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
