const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let total =0;
	let price = document.querySelectorAll('.price');
	price.forEach(prices =>{
		total += parseInt(prices.textContent);
	});
	const totalRow = Document.createElement('tr');
	total.innerHTML = `<td colspan ="2"> Total price : ${totalRow.tofixed(2)}</td>`
   document.getElementByTagName('table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

