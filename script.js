const inputbox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const msg = document.getElementById("message");
const container = document.querySelector(".container");

let allData;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => (allData = data));

addBtn.addEventListener("click", () => {
  let value = inputbox.value;
  if (value <= 0) {
    alert("Enter a valid number");
    return;
  }

  

  let list = document.createElement("div");
  list.setAttribute("id", "st-list");
  container.append(list);
  msg.innerText = `${value} জন Student load হয়েছে ।`;
  for (let i = 0; i < value; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "data-box");
    let stName = document.createElement("span");
    stName.innerHTML = `<b>${allData[i].name}</b> `;
    div.append(stName);
    let stEmail = document.createElement("span");
    stEmail.innerHTML = `<b>Email:</b> ${allData[i].email}`;
    div.append(stEmail);
    let stCompany = document.createElement("span");
    stCompany.innerHTML = `<b>Company:</b>  ${allData[i].company.name}`;
    div.append(stCompany);
    list.append(div);
    
  }
 
});

clearBtn.addEventListener("click", () => {
  let list = document.querySelectorAll("#st-list");
  if (list.length !== 0) {
    list.forEach((e) => e.remove());
    msg.innerText = "ডাটা ক্লিয়ার করা হয়েছে ।";
    inputbox.value = "";
  }
});
