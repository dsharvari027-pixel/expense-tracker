let total = 0;

document.getElementById("addBtn").addEventListener("click", function () {

    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if (amount === "") {
        alert("Please enter amount");
        return;
    }

    amount = Number(amount);
    total = total + amount;

    document.getElementById("total").innerText = total;

    let li = document.createElement("li");
    li.innerText = category + " : ₹" + amount;

    document.getElementById("expenseList").appendChild(li);

    document.getElementById("amount").value = "";
});