const stripe = require("stripe")(
  "sk_test_51M5rOcIG1cktkZ0RzhOpy4YtUtNs4CozQRowbW0O3Z7IPBdojzsAmVB6T0PHDloAbjOSlYqibwYiee3miUIzUBux00uviG7jnp"
);

// const paymentMethods = await stripe.customers.listPaymentMethods(
//   "cus_1M6JlqIG1cktkZ0RT5rx5ECy",
//   { type: "card" }
// );

// console.log("payment", paymentMethods);

const customers = await stripe.customers.list({
  email: "kate.test@outlook.com",
});

let customer = await stripe.customers.search({
  query: `email:'alex.test@outlook.me'`,
});

console.log("TEST", customer);

const Account = () => (
  <div>
    <p>This is the Your Account page</p>
    <p>Name: XXXXXX</p>
  </div>
);

export default Account;
