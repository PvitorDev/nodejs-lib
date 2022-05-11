const chalk = require('chalk');
const fs = require('fs');

function extrairLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const arrayResult = []
  let temp;
  while ((temp = regex.exec(text)) !== null) {
    arrayResult.push({
      [temp[1]]: temp[2]
    })
  }
  return arrayResult.length === 0 ? 'There are no links': arrayResult

}




function hasError(err) {
  throw new Error(chalk.red('Invalid File || CODE :', err.code))
}

//async/await
async function TakeArch(pathFiles) {
  const encoding = 'utf-8'
  try {
    const texto = await fs.promises.readFile(pathFiles, encoding)
    return extrairLinks(texto)
  } catch (err) {
    hasError(err)
  } finally {
    console.log(chalk.gray("Inicio Do Programa :"))
  }

}

//TakeArch('./arquivos/texto1.md')



module.exports = TakeArch;



//then/catch
//function TakeArch(pathFiles){
//  const encoding = 'utf-8'
//  fs.promises
//  .readFile(pathFiles,encoding)
//  .then((text)=> console.log(chalk.green(text)))
//  .catch((err)=> hasError(err))
//}


//normal
//function TakeArch(pathFiles){
//  const encoding = 'utf-8'
//  fs.readFile(pathFiles, encoding,(err, text)=> {
//    if(err){
//      hasError(err)
//    }else{
//      console.log(chalk.green(text))
//    }
//  })
//}