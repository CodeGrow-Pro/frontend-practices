    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                 const allCatgory = json.map(val=>{
                      return `<div class="catgory" >${val}</div>`
                 })
                 document.getElementById("all-catgory").innerHTML = allCatgory.join("  "); 
} )
