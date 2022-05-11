function handError(err){
    throw new Error(err.message);
}





async function statusCheck(urlArray) {
    try{
        const arrayStatus = await Promise
        .all(urlArray.map(async url => {
            const res = await fetch(url)
            return res.status;
        }))
    return arrayStatus
    } catch{
        handError(err)
    }
   
}

function arrURlGenerate(arrayLinks) {
    return arrayLinks
        .map(objLink => Object
            .values(objLink).join())
}

async function validURLs(arrayLinks) {
    const links = arrURlGenerate(arrayLinks)
    const statusLink = await statusCheck(links)
    //spread operator
    const results = arrayLinks
        .map((obj, index) => ({
            ...obj,
            status: statusLink[index]
        }))
    return  results
}

module.exports = validURLs