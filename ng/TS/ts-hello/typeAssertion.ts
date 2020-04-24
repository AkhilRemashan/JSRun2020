
let message;
message = 'abc';
// First method <string>
let endsWithC = (<string>message).endsWith('c');

// Second method - as string
let alternativeWay = (message as string).endsWith('c');
