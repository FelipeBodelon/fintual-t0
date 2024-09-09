import { Stock } from './stock';

class Portfolio {
  name: string = 'Portfolio';
  stocks: Stock[];

  constructor(name: string, stocks: typeof this.stocks) {
    this.name = name;
    this.stocks = stocks;
  }

  async valueAtTime(date: Date) {
    const prices = await Promise.all(this.stocks.map((stock) => stock.price(date)));

    return prices.reduce((sum, price) => sum + price, 0);
  }

  async valueDelta(startDate: Date, endDate: Date) {
    const startValue = await this.valueAtTime(startDate);
    const endValue = await this.valueAtTime(endDate);

    return [startValue, endValue];
  }

  async profit(startDate: Date, endDate: Date): Promise<number> {
    const [startValue, endValue] = await this.valueDelta(startDate, endDate);

    return endValue - startValue;
  }

  async annualizedProfit(startDate: Date, endDate: Date): Promise<number> {
    const [startValue, endValue] = await this.valueDelta(startDate, endDate);

    if (startValue === 0) return 0;

    const daysDelta = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    const yearsDelta = daysDelta / 365;

    return Math.pow(endValue / startValue, 1 / yearsDelta) - 1;
  }

  async logResults(startDate: Date, endDate: Date) {
    console.log(`Gathering data for portfolio ${this.name}`);

    const profit = await this.profit(startDate, endDate);
    const annualizedReturn = await this.annualizedProfit(startDate, endDate);

    console.log('-'.repeat(20));
    console.log('Portfolio', this.name);
    console.log(
      `From ${startDate.toLocaleDateString()} updated to ${endDate.toLocaleDateString()}`,
    );

    console.log('Balance:', (await this.valueAtTime(endDate)).toFixed(2));
    console.log('Profit:', profit.toFixed(2));
    console.log('Annualized return:', `${(annualizedReturn * 100).toFixed(2)}%`);
  }
}

export { Portfolio };
