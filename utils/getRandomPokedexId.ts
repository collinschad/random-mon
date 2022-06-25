const getRandomPokedexNumber = () => {
   const min = 1
   const max = 913
   return Math.floor(Math.random() * (max - min + 1) + min)
}

export default getRandomPokedexNumber