import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

function David({closeDavid}) {
  return (
    <Wrapper>
    <ContentWrap>
    <div class="modal-wrapper" id="david">
    <section class="modal-window">
        <header class="modal-header">
        <h3>David</h3>
        <CloseWrapper>
            <CustomClose onClick={() => closeDavid(false)}/>
        </CloseWrapper>
        </header>
        <p>David Sisko is a New York City based, multi-genre, International Pop Music Producer, Composer, Remixer & Mixer. He is one-half of the songwriting/recording artist Disco Pusher.  He has remixed best-selling artists, released electronic & experimental records and has co-written & produced numerous songs of various musical styles on major, indie & self-released labels.  His original songs, compositions, sound design and production / engineering skills have appeared in feature films, documentaries, television programs, commercials and video games across the globe.</p>
        <p>He holds a Masters of Music Technology degree from New York University with a focus on Artificial Intelligence, Voice Recognition & the Tonemeister Recording curriculum.</p>
        <p>He is the founder and owner of Arena 01 – an independent record label in New York City.  /  <a target="_blank" rel="noreferrer noopener" href="https://linktr.ee/davidsisko">David's linktree</a></p>

    </section>
    </div>
    </ContentWrap>
</Wrapper>
  )
}

export default David

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