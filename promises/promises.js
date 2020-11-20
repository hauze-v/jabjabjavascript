/* Better way to handle asynchronous callbacks in JavaScript
  It represents the eventual completion or failure of a asynchronous function
  Can be either "fulfilled, resolved, or rejected */

/* Angela wants to be a nurse */
let hasStudied = true;

const takeTest = _ => {
  return new Promise((resolve, reject) => {
    const license = {
      year: 2010,
      name: "Registered Nurse License"
    }

    if (hasStudied) {
      resolve(license);
    } else {
      reject("No, you partied too much.");
    }
  })
}

/* Takes in data from first promise */
const applyJob = (data) => {
  return new Promise((resolve, reject) => {
    if (data.year === 2020) {
      resolve("You got the job!");
    } else {
      reject("Invalid license");
    }
  })
}

takeTest()
  .then((result) => {
    return applyJob(result)
  })
  .then((result) => {
    console.log(result);
  }).catch(err => {
    alert(err);
  })
















// const happy = false;
// const greeting = new Promise((resolve, reject) => {
//   if (happy) {
//     resolve("Yay! Hello how are you?");
//   } else {
//     reject("NOPE");
//   }
// })

// /* To call a promise, we use .then function that takes in a callback function */
// greeting.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// })