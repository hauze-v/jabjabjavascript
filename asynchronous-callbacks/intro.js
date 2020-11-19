function eatRamen() {
  /*
    1. boil water - 10 mins
    2. prepare onions - 3 mins
    3. prepare eggs - 1 min
    4. mix and eat - 5 mins
  */
  boilWater((elem) => {
    console.log(elem);
    prepareOnions((elem) => {
      console.log(elem);
      prepareEggs((elem) => {
        console.log(elem);
        mix((elem) => {
          console.log(elem);
        });
      });
    });
  });
};

const boilWater = (callback) => {
  setTimeout(_ => {
    callback("water ready");
  }, 4000);
};

const prepareOnions = (callback) => {
  setTimeout(_ => {
    callback("onions ready");
  }, 3000);
};

const prepareEggs = (callback) => {
  setTimeout(_ => {
    callback("eggs ready");
  }, 1000);
};

const mix = (callback) => {
  setTimeout(_ => {
    callback("mixed and ready to eat");
  }, 6000);
};

eatRamen();

/* This becomes callback hell and can quickly become quite messy */