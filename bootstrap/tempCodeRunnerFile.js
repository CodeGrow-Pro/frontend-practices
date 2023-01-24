const stock = {
    Fruits:["strawberry","graps","banana","apple"],
    liquid : ['water',"ice"],
    holder:['cone','cup','stick'],
    toppings :['chocolate,"peanuts']
}

const order = (fruit_name,production_call)=>{
    setTimeout(()=>{
        console.log(`${stock[fruit_name]} is selected.`)
    },2000)
      production_call()
}
const production = ()=>{

