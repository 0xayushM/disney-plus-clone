import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommended from "./Recommended";
import Viewers from "./Viewers";
import Disneyplus from "./Disneyplus";
import Trending from "./Trending";
import Originals from "./Originals";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/moviesSlice";
import { selectUserName } from "../features/user/userSlice";
import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore";

const Home = (props) => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys  = [];
    let originals = [];
    let trending = [];
    const [originalMovie,setOriginal]  = useState('');

    useEffect(()=>{
        // db.collection('movies').onSnapshot((snapshot) => {
        //     snapshot.docs.map((doc) => {
        //         switch(doc.data()["type"]) {
        //         case 'recommend':
        //             recommends = [...recommends,{id: doc.id,...doc.data()}] 
        //         break;
        //         case 'new':
        //             newDisneys = [...newDisneys,{id: doc.id,...doc.data()}] 
        //         break;
        //         case 'original':
        //             originals = [...originals,{id: doc.id,...doc.data()}] 
        //         break;
        //         case 'trending':
        //             trending = [...trending,{id: doc.id,...doc.data()}] 
        //         break;                    
        //         }
        //     })
        //     dispatch(
        //         setMovies({
                    // recommend:recommends,
                    // newDisney:newDisneys,
                    // original:originals,
                    // trending:trending,
        //         })
        //     )
        // })
        originals = loadOriginalMovie();
        dispatch(
            setMovies({
                recommend:recommends,
                newDisney:newDisneys,
                original:originals,
                trending:trending,
            })
        )
    },[userName])
    async function loadOriginalMovie (){
        const movies =  collection(db,'movies');
        const movieSc =  await getDocs(movies);
        const movieList = movieSc.docs.map((doc)=>{
            console.log(`${doc.id} => ${doc.data()}`)
        });
       const  orgMovie  =movieList.filter((movie,i)=>{
            if(movie.type === "original"){
                return movie;
            }
        })
        setOriginal(orgMovie);
        console.log(originalMovie);
        return originalMovie;
    }
    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommended/>
            <Disneyplus/>
            <Originals/>
            <Trending/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px) ;
    overflow-x: hidden;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw + 5px);
    &:after {
        background-image: url("/images/home-background.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        content:'';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index:-1;
    }
`

export default Home;