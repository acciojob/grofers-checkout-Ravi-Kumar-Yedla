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
	const totalRow = document.createElement('tr');
	total.innerHTML = `<td colspan ="2"> Total price : ${total.toFixed(2)}</td>`
   document.getElementsByTagName('table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

