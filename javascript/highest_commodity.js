//   Given a list of timestamps and commodity prices,
//  find out highest commodity price at given timestamp.
//  timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.

function commodityStore() {
  this.store = new Map();

  this.addPriceToCommodity = (timeStamp, price) => {
    if (this.store.has(timeStamp)) {
      const prices = this.store.get(timeStamp);
      this.store.set(timeStamp, [...prices, price]);
    } else {
      this.store.set(timeStamp, [price]);
    }
  };

  this.getHighestPriceFromTimeStamp = (timeStamp) => {
    if (!this.store.has(timeStamp)) {
      return null;
    }
    const prices = this.store.get(timeStamp);
    return Math.max(...prices);
  };
}

const amazon = new commodityStore();

amazon.addPriceToCommodity("1", 30);
amazon.addPriceToCommodity("2", 80);
amazon.addPriceToCommodity("a", 40);
amazon.addPriceToCommodity("2", 60);
console.log(amazon.getHighestPriceFromTimeStamp(1));
console.log(amazon.getHighestPriceFromTimeStamp("2"));
console.log(amazon.getHighestPriceFromTimeStamp("1"));
