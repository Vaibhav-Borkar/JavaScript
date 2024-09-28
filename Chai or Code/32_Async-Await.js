async function fetcData() {
  try {
    let responase = await fetch(
      "https://fakerapi.it/api/v2/persons?_quantity=10"
    );
    const data = await responase.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
fetcData();

// Fetch data using promise approach widely used approach...

fetch("https://fakerapi.it/api/v2/users?_quantity=10")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    console.log("Second");
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
