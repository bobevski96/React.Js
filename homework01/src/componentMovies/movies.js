const Movies = ()=> {
    const moviesCollection = [
        "Her Smell",
        "The Dead Dont Die",
        "Fast Color",
        "Skin",
        "It Chapter Two",
        "Dolemite is My Name",
        "Tigers Are Not Afraid",
        "One Cut of the Dead",
        "Invisible Life",
        "I Lost My Body",
        ];
        let htmls="";

        for(let i=0;i<moviesCollection.length;i++){
        
            htmls+=moviesCollection[i]+ " ,";



        }
        
    




    return (
            <h4>{htmls}</h4>
    
    )
  }
  
  export default Movies;