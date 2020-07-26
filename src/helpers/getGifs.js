const data = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=xyERJcxqZL6ATJNcZf6CQaCgfiftV2ih`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data;
}

export const getGif = async(category) => {
    
    const datos = await data(category);
    const gifs = datos.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
