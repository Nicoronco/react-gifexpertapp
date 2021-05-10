export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=FK6B47iKIijMaSomr4U0zOpT3TacryUH`

    const resp =await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id:img.id,
            tittle: img.tittle,
            url: img.images.downsized_medium.url
        }
    })

    

    return gifs;
    



 }