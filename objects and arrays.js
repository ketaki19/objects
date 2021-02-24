const fruits = ['Apple','Cherry','Mango'];


const newfruits =[{
    title: 'Apple',
    color: 'red',
} ,{
    title: 'Cherry',
    color:'Dark red',
} ,{
    title: 'Mango',
    color:'Yellow',
}]

const index = newfruits.findIndex(function(demo, index){
    return demo.title == 'Apple'
})
console.log(index);