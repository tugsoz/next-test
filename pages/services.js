import fetch from "node-fetch";
import React, { useState } from 'react';

const Services = () => {
    // const [jsonData, setJsonData] = useState[''];
    const getServerSideProps = async () => {
      try {
        const data = await fetch("https://dummyapi.io/data/v1/user", {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "app-id": "633653cf51a80d792f103c6a",
          },
        });

        const jsonData = await data.json();
        // setJsonData(jsonData);
        console.log("aaaa",jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    getServerSideProps();

    return (
        <>
        {jsonData.map((data) => {
            return(
                <div key={data.id}>Name: {data.firstName}</div>
            )
        })}
        </>
    )
};

export default Services


//============================================================================

// const Produts = () =>{
    
//     const [movieData, setMovieData] = useState([]);
//     const getMovieList  = async () => {

//         const url = 'http://api.themoviedb.org/3/search/movie?api_key=myapikey&query=Avengers';

//         const response = await fetch (url);
//                 try {
//                     const responseJson = await response.json();
//                     const data = (responseJson.results);
//                     setMovieData(data);
//                 } catch (err) {
//                     console.error(err);
//                 }

//     };

//     useEffect (()=> {
       
//      getMovieList();
//     }, []);

//     return (
//         <> 
//              {movieData.map((movie) =>{
//                  return(
//                     <Card style={cardStyle.cardMain} key={movie.id}>
//                    <CardActionArea>
//                        {movie.original_title}
//                        <CardMedia style = {cardStyle.cardImage}>CardMedia</CardMedia>
//                        <CardContent>cardContainer</CardContent>
   
//                    </CardActionArea>
//                    <CardActions style = {cardStyle.cardButton}>
//                        <Button>Watch</Button>
//                        <Button>Like</Button>
//                        <Button>Rent</Button>
//                    </CardActions>
//                </Card>
//                  );
                   
//             })}
           
              
//         </>
//     )
// };
// export default Produts;