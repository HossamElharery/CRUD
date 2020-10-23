
var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");


var productNameAlert = document.getElementById("productNameAlert");
var productPriceAlert = document.getElementById("productPriceAlert");

var productList;

 if(localStorage.getItem("ourProducts") == null)
 {
    productList = [];
 }
else
{
    productList = JSON.parse( localStorage.getItem("ourProducts"));
    displayProducts(productList);
}


function addProduct() {
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    productList.push(product);
    localStorage.setItem("ourProducts" , JSON.stringify( productList) );
    displayProducts(productList);
    clearForm();
}

function clearForm( ) 
{
    productNameInput.value = "";
    productPriceInput.value = "";
    productDescInput.value = "";
    productCategoryInput.value = "";

}
function displayProducts(anyArray) 
{
    var cartoona = "";
    for (var i = 0; i < anyArray.length; i++)//2
    {
        cartoona += `<tr>
                                <td>${i}</td>
                                <td>${anyArray[i].name}</td>
                                <td>${anyArray[i].price}</td>
                                <td>${anyArray[i].category}</td>
                                <td>${anyArray[i].desc}</td>
                                <td><button class="btn btn-warning">update</button></td>
                                <td><button onclick="deleteProduct(${i})"  class="btn btn-danger">delete</button></td>
                    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}



function deleteProduct(index) {

    productList.splice( index, 1);
    localStorage.setItem("ourProducts" , JSON.stringify( productList) );
    displayProducts(productList);
  }


var searchInput = document.getElementById("searchInput");

 function searchProducts() 
 {
    var searchTerm = searchInput.value;
    var wantedProducts = [];
    for(var i=0 ; i < productList.length ; i++)
    {
        if(productList[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            wantedProducts.push(productList[i]);
        }
    }
    displayProducts(wantedProducts);
 }


function validatProductName(productName)
{
    var regex =/^[a-z]{1,}$/
    if(regex.test(productName)==true)
    {

        productNameInput.classList.remove('is-invalid');
        productNameInput.classList.add("is-valid");
    }
    else
    {

        productNameInput.classList.remove("is-valid");
        productNameInput.classList.add('is-invalid');
    }
}
productNameInput.addEventListener('keyup',function()
   
   {
    validatProductName(productNameInput.value)
   })
