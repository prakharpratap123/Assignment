let bill = [3, 10, 2, 9];
function bonAppetit(bill, k, b) {
  // Write your code here

  let newBill = bill.filter((x) => x !== bill[k]);
  // console.log(newBill);
  let correctBilling = 0;
  for (let i = 0; i < newBill.length; i++) {
    correctBilling += newBill[i];
  }

  if (b === correctBilling / 2) {
    console.log("Bon Appetit");
  } else {
    let owe = b - correctBilling / 2;
    console.log(Math.floor(owe));
  }
}

/*
Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.


bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill.

If Brian did not overcharge Anna(his calculation is correct), print Bon Appetit on a new line; otherwise(if in correct calculation), print the difference (i.e., ) that Brian must refund to Anna. This will always be an integer. */
