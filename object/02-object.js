// soal - 01
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(str) {
      return "Hello, John Watson";
      console.log("hello world")
  
    }
  };
  
  /// EDIT HERE
  person.name = "kifly";
  person.favDrinks.splice(1, 2, "tap water", "tea");
  
  
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  
  console.log("--------------------------------------------------------------------")
  
  // soal - 02
  
  function getObjectValue(obj, path) {
    const isi  = path.split('.')
      if (obj[isi[0]][isi[1]][isi[2]] == undefined) {
        return null;
      } else {
        return obj[isi[0]][isi[1]][isi[2]]
      }
  
  }
  
  const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }
  
  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan)
  
  console.log("--------------------------------------------------------------------")
  
  // soal - 03
  
  // dibawah ini merupakan history transasksi yang telah kalian lakukan
  const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
  let hasilIncome = function (nilaiAwal, nilaiAkhir){
    let nilaiAwalBtc = nilaiAkhir.btc.sell - nilaiAkhir.btc.buy
    let nilaiAwalDoge = nilaiAkhir.doge.sell - nilaiAkhir.doge.buy
    let nilaiAwalEth = nilaiAkhir.eth.sell - nilaiAkhir.eth.buy
    
    return {btc : nilaiAwal.btc + nilaiAwalBtc, doge: nilaiAwal.doge + nilaiAwalDoge, eth: nilaiAwal.eth + nilaiAwalEth}
  }
    return items.reduce(hasilIncome, {btc: 0, doge: 0, eth: 0})
  }
  
  console.log(calculateIncome(items))