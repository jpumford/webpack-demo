import { increment, getCounter } from './services/counter/counter';
import messageOfTheDay from './services/messageOfTheDay/messageOfTheDay';

increment();
console.log(getCounter());
increment();
console.log(getCounter());

messageOfTheDay();