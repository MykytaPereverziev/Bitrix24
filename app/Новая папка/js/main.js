

const input = document.getElementById('number');
const inputNum = "";
let obj = "";
let objSum = "";
let balance = "";

//const valueInput = document.createElement('div');
//valueInput.className = "inputValue";
//valueInput.classList.add('inputValue');

input.addEventListener('change', function(e){
	
	const inputNum = e.target.value;
	console.log(inputNum);
});
//нужный ID сделки
var id = 18;
       		BX24.callMethod(
			"crm.deal.get", 
			{ id: id }, 
			function(result) 
			{
				if(result.error())
					console.error(result.error());
				else
					console.dir(result.data());
			var obj = document.querySelector('OPPORTUNITY');
			//let obj = result.data(OPPORTUNITY);
			//OPPORTUNITY
			console.log(':::', obj);
			//let objSum = obj;
			}
		);


let functionMath = () => {
	balance += obj - inputNum;
	return balance;
};
	
// curl -X POST <URL> UF_CRM_1568377884376 "128"
// <URL> UF_CRM_1568377900618 "64"

  	BX24.callMethod(
	"crm.deal.update", 
	{ 
		id: id,
		fields:
		{ 
			"UF_CRM_1568377900618": balance, //остаток долга
			"UF_CRM_1568377884376": inputNum  //поле последней оплаты
		},
		params: { "REGISTER_SONET_EVENT": "Y" }			
	}, 
	function(result) 
	{
		if(result.error())
			console.error(result.error());
		else
		{
			console.info(result.data());						
		}
	}
);



