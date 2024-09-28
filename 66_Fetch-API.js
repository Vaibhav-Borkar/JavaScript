let fetchs = fetch("https://fakerapi.it/api/v2/addresses?_quantity=10")
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    // return response.text();
    return response.json();
    // return response.arrayBuffer();
    // return response.blob();
    re;
  })
  .then((data) => {
    console.log(data);
  });

//<!---- To convert json to array  -->

// fetch("https://fakerapi.it/api/v2/addresses?_quantity=1000")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Parse the JSON response
//   })
//   .then((data) => {
//     // Extract the array from the JSON object
//     let arrayData = data.data; // Adjust this according to the structure of your JSON

//     // Verify if it's an array
//     if (Array.isArray(arrayData)) {
//       console.log("Data is an array:");
//       console.log(arrayData);
//     } else {
//       console.error("Data is not an array.");
//     }
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
