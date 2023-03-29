document.querySelector("form").addEventListener("submit",portFolio);
function portFolio(event){
    event.preventDefault();
    let count=0;
    
  let cmpName=document.getElementById("compName").value;
  
  if(cmpName==""){
    alert("please fill in the company name")
  }

  let lExchange=document.getElementById("listedExchange").value;
 
  if(lExchange==""){
    alert("please select an Exchange")
  }

  let indus=document.getElementById("industry").value;
  if(indus==""){
    alert("please select an industry")
  }
  
  let stkRs=0;
  let stocksRs=document.getElementById("stockPrice").value;
  stkRs+=stocksRs;
  

  let qtyRs=0
  let qty=document.getElementById("quantity").value;
  qtyRs+=qty
  if(qty==""){
    alert("please fill in the quantity")
  }

  let x= Number(stkRs)
  let y= Number(qtyRs)
  total=x*y;
  
  
   
  


  let typE=document.getElementById("type").value;
  let date="19/09/2022"
  
  count++;

  
  let tRow = document.createElement("tr")

  let td1 = document.createElement("td")
  td1.innerText = cmpName

  let td2 = document.createElement("td")
  td2.innerText = lExchange
  
  let td3 = document.createElement("td")
  td3.innerText = indus

  let td4 = document.createElement("td")
  td4.innerText = stocksRs

  let td5 = document.createElement("td")
  td5.innerText = qty

  let td6 = document.createElement("td")
  td6.innerText = typE

  let td7 = document.createElement("td")
  td7.innerText = total

  let td8 = document.createElement("td")
  td8.innerText = date;

 

  let td9 = document.createElement("td")
  td9.innerText = "Delete"
  td9.style.backgroundColor="red";
  td9.addEventListener("click",deletePortfolio)


  // append cols to tr
  tRow.append(td1, td2, td3, td4, td5, td6, td7, td8, td9)
  // append to tbody
  document.querySelector("tbody").append(tRow)
  
  document.getElementById("noOfStock").append(count)

//   document.getElementById("totalPortfolio").append(totalPort)

}

function deletePortfolio(event){
    event.target.parentNode.remove();
}