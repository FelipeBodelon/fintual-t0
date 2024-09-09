import { Portfolio } from './portfolio';
import { Stock } from './stock';

const stock1 = new Stock('AAPL');
const stock2 = new Stock('GOOGL');
const stock3 = new Stock('AMZN');

const riskyNorrisPortfolio = new Portfolio('Risky Norris', [stock1, stock2]);
const moderatePittPortfolio = new Portfolio('Moderate Pitt', [stock2, stock3]);

const startDate = new Date('2023-06-23');
const endDate = new Date('2024-04-16');

riskyNorrisPortfolio.logResults(startDate, endDate);
moderatePittPortfolio.logResults(startDate, endDate);
