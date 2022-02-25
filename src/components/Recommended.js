import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectRecommend} from '../features/movie/moviesSlice'


const Recommended = (props) => {
    // const movies = useSelector(selectRecommend)
    return(
        <Container>
            <h4>Recommended</h4>
            <Content>
                {/* {
                    movies && movies.map((movie,key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={'/detail/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title}/>  
                            </Link>
                        </Wrap>
                    )) 
                } */}
                <Wrap>
                    <Link to='#'>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='#'>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='#'>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='#'>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0 26px;

`
const Content = styled.div`
    display: grid;
    grid-gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap:25px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }

`
const Wrap = styled.div`
    padding-top: 55%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px ;
    cursor:pointer;
    position: relative;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    border:3px solid rgba(249,249,249,0.1);
    img {
        inset:0px;
        display: block;
        border-radius: 10px;
        object-fit: cover;
        position: absolute;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`
export default Recommended;