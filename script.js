const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let total =0;
	let price = document.querySlectorAll(.'price');
	price.forEach(prices =>{
		total += parseInt(prices.textContent);
	});
	const total = Document.createElement('tr');
	total.innerHTML = `<td colspan ="2"> Total price : ${total.tofixed(2)}</td>`
   document.getElementByTagName('table').appendChild(total);
};

getSumBtn.addEventListener("click", getSum);

