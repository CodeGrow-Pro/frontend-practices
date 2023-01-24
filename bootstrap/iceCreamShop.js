const stock = {
    Fruits:["strawberry","graps","banana","apple"],
    liquid : ['water',"ice"],
    holder:['cone','cup','stick'],
    toppings :['chocolate','peanuts']
}

const order = (fruit_name,production_call)=>{
    setTimeout(()=>{
        console.log(`${stock.Fruits[fruit_name]} is selected.`)
        production_call()
    },2000)
      
}
const production = ()=>{
    setTimeout(()=>{
        console.log('production has started.')
        setTimeout(() => {
            console.log('the fruits has chooped')
            setTimeout(()=>{
                console.log(`${stock.liquid[0]} and ${stock.liquid[1] } are added`)
                setTimeout(()=>{
                    console.log('start the machine.')
                    setTimeout(()=>{
                        const index = Math.floor(Math.random()*(stock.holder.length-1))
                        console.log(`selected container is ${stock.holder[index]}`)
                        setTimeout(()=>{
                            const index1 = Math.floor(Math.random()*(stock.toppings.length-1))
                            console.log(`selected Toppings is ${stock.toppings[index1]}`)
                            setTimeout(()=>{
                                console.log('serve Ice cream successfully.')
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        }, 2000);
    },0000)

}
const indexRendom = Math.floor(Math.random()*(stock.Fruits.length-1))
order(indexRendom,production)



