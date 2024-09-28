// IMP:--> Finally block always executed in all conditions

function finallyCheck() {
  try {
    console.log("Start");
    log; // this line generate error
  } catch (error) {
    console.log("Error");
    return;
  } finally {
    console.log("finally");
  }
  console.log("End");
}

finallyCheck();
