import styled from "styled-components";

const Details = (props) => {
    return (
        <Conatiner>
            <Background>
                <img alt="" src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg'/>
            </Background>
        </Conatiner>
    )
}

const Conatiner = styled.div`
    position:relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vh + 5px);
`

const Background = styled.div`
    left:0px;
    opacity:0.8;
    position: fixed;
    z-index: -1;
    right: 0px;
    top: 0px;
    img {
        width:100vw;
        height:100vh;
    }
`

export default Details 