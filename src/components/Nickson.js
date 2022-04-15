import React from 'react'
import '../style_james.css'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

function Nickson({closeNickson}) {
  return (
  <Wrapper>
  <ContentWrap>
  <div class="modal-wrapper" id="nickson">
  <section class="modal-window">
    <header class="modal-header">
      <h3>Nickson Fong </h3>
      <CloseWrapper>
            <CustomClose onClick={() => closeNickson(false)}/>
        </CloseWrapper>
    </header>
    <p>Currently, Nickson is jointly Producing with Steve Krone (Ex-President & COO of Village RoadShow and Legal counsel at Mitchell Silberberg & Knupp LLP) and Directing a unique Hollywood/Japanese Supernatural Thriller driven by modern Electronic music live-action feature  “Bashira” – working title. The film was shot in Buffalo, NY and Nagoya Japan in Fall 2018 and Nickson is now in the final stages of Post Production working closely with his Software & Visual Effects company, Eyecon Studios based in Bangkok.</p>
    <p>Nickson and James Blackburn co-founded Eyecon Studios in 2017 to develop online collaborative and messaging software. The visual effect and post production processes of “Bashira” are currently managed by Eyecon’s inhouse software and methodologies.</p>
    <p>In 2013, Nickson won the Academy Award for Scientific and Technical Achievement Awards for his co-invention of “Pose Space Deformation” a technology that revolutionized CG Character Animation and used repeatedly in most Major Hollywood Blockbuster movies and International.</p>
    <p>Some notable films Nickson worked on include; The Matrix Revolutions, The Matrix Reloaded, The Scorpion King, Shrek, The Patriot, Stuart Little and Starship Troopers to name a few.</p>
    <br/>
    <br/>
    <a href="https://en.wikipedia.org/wiki/Nickson_Fong" target="_blank">More information about Nickson Fong.</a>
  </section>
</div>
</ContentWrap>
</Wrapper>
  )
}

export default Nickson

const Wrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  color: white;    
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 700vh;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  z-index: 30;
  overflow: hidden;
  overflow-x: hidden;
`

const ContentWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 50px;
  overflow: hidden;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  z-index: 20;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`