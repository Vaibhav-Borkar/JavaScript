const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const hack = async () => {
  console.log("Initializing Akash phone");
  await delay(1000);

  console.log("Redirecting to the Facebook");
  await delay(2000);

  console.log("Finding username");
  await delay(3000);

  console.log("Finding password");
  await delay(3000);

  console.log("Username and password matched");
  await delay(4000);

  console.log("Breaking security layer");
  await delay(6000);

  console.log("Installing malware");
  await delay(7000);

  console.log("Hacked successfully");
};

// Run the function
hack();
