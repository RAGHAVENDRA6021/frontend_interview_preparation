//   Given a list of timestamps and commodity prices,
//  find out highest commodity price at given timestamp.
//  timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.
//  Followup: after each timestamp, commodity price entry, we are putting a checkpoint, given a timestamp and checkpoint
//   find maximum commodity prices till then.

function commodityStore() {
  this.store = new Map();

  this.addPriceToCommodity = (timeStamp, price, checkpoint = false) => {
    if (this.store.has(timeStamp)) {
      const prices = this.store.get(timeStamp);
      if (checkpoint) this.store.set(timeStamp, [...prices, price, checkpoint]);
      else this.store.set(timeStamp, [...prices, price]);
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

  this.getHighestPriceFromTimeStampUntilCheckpoint = (
    timeStamp,
    checkpoint
  ) => {
    if (!this.store.has(timeStamp)) {
      return null;
    }
    const prices = this.store.get(timeStamp);
    const index = prices.findIndex((price) => price === checkpoint);
    console.log(prices.slice(0, index));
    const filteredPricesUntilCheckpoint = prices
      .slice(0, index)
      .filter((price) => Number(price));

    return Math.max(...filteredPricesUntilCheckpoint);
  };
}

const s = new commodityStore();
s.addPriceToCommodity(1, 1);
s.addPriceToCommodity(1, 4);
s.addPriceToCommodity(1, 2);
s.addPriceToCommodity(1, 3, "a");
s.addPriceToCommodity(1, 6);
s.addPriceToCommodity(1, 7);
s.addPriceToCommodity(1, 8, "b");

console.log(s.getHighestPriceFromTimeStampUntilCheckpoint(1, "a")); // 4
console.log(s.getHighestPriceFromTimeStampUntilCheckpoint(1, "b")); // 8
