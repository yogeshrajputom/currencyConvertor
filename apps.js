

const populate = async (Currency, value) => {
    let myStr = "";
    let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ylSV8seEU6EsjN38kz5m9G5XYI7O9lkpkc9htDKb&base_currency=" + Currency;

    let response = await fetch(url)
    let rjson = await response.json();
    document.querySelector(".output").style.display = "block";

    for (let key of Object.keys(rjson["data"])) {
        myStr += `<tr>
                    <td>${key}</td>
                    <td>${rjson["data"][key]["code"]}</td>
                    <td>${rjson["data"][key]["value"] * value}</td>
                </tr>`
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;
    populate(currency, value);
})

