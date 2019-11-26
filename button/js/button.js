//function application(){}

function someFunc(){
    alert(document.getElementById("number").value);
    
}
document.getElementById("btn").onclick = someFunc;

//app = new application();
// curl -X POST <URL> -d</URL>
/*
BX24.callMethod(
    "crm.deal.get", 
    { id: id }, 
    function(result) 
    {
        if(result.error())
            console.error(result.error());
        else
            console.dir(result.data());
    }
);
*/

const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = { "name": "Darth Vader" }

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://en9y9e9tu4dx.x.pipedream.net/", options);


