const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo.txt'

fs.rename(arqAntigo,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`o arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})