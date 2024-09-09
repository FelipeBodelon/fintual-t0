const PRICE_FETCH_DELAY = 1000;

class Stock {
  name: string;
  priceCache: Map<string, number | Promise<number>> = new Map();

  constructor(name: string) {
    this.name = name;
  }

  async price(date: Date): Promise<number> {
    // Avoid multiple requests for the same date
    if (this.priceCache.has(date.toISOString())) {
      // console.log(`Using cached price for ${this.name} at ${date}`);

      return this.priceCache.get(date.toISOString()) as number;
    } else {
      // Simulate fetching price from an API
      const fetchedPrice = new Promise<number>((resolve) =>
        setTimeout(resolve, PRICE_FETCH_DELAY, Math.random() * 100),
      );
      this.priceCache.set(date.toISOString(), fetchedPrice);

      fetchedPrice.then((price) => {
        this.priceCache.set(date.toISOString(), price);
      });

      const price = await fetchedPrice;
      return price;
    }
  }
}

export { Stock };
