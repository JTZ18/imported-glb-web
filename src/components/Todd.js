import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

function Todd({closeTodd}) {
  return (
    <Wrapper>
    <ContentWrap>
    <div class="modal-wrapper" id="todd">
    <section class="modal-window">
        <header class="modal-header">
        <h3>Todd</h3>
        <CloseWrapper>
            <CustomClose onClick={() => closeTodd(false)}/>
        </CloseWrapper>
        </header>
        <p>Todd Ocvirk knew he wanted to be a filmmaker at a young age, once dazzling his 5th grade class with a Ray Harryhausen-inspired stop motion animation creature fest. Staying true to his dream, he went on to attend the USC Film School where he was honored to have Hong Kong action director John Woo as his mentor during his senior year.  As a student, Todd received accolades from professors and peers alike for his visually stylistic short films and rich character-driven screenplays.</p>
        <p>He graduated with a BFA in screenwriting before co-writing/co-directing his feature film debut, the independent shocker KOLOBOS.  He has been featured in Fangoria magazine, been a guest at the Fangoria Weekend of Horrors and his film has gone on to become a cult favorite among fans.  KOLOBOS has been screened at the prestigious Belgium Festival of the Fantastique, and in 2002, won awards for Best Picture, Best Directing and Best Make-Up at LA’s premiere genre festival Screamfest.  KOLOBOS recently received the Special Edition treatment from renowned cult film distributor Arrow Films in honor of its 20th anniversary.</p>
        <p>Todd also produced the independent horror film LAST RITES, where he also served as 2nd unit director. His script MUERTO was the inspiration for the film, which made its world premiere at the LA Film Festival in June 2006.  It was subsequently released to DVD under the title GANGS OF THE DEAD in 2007.</p>
        <p>In 2008, Todd spent three months in Shanghai, China, writing episodes for the children’s TV show ZIP-A-GANG.  Utilizing cinematic filming techniques, edgy scripts and top notch production value, ZIP-A-GANG attempted to push the envelope of what a children’s show could be.</p>
        <p>Todd made his first foray into comic book writing with SONG OF SAYA, a hallucinatory, Lovecraftian love story based on the successful Japanese visual novel SAYA NO UTA.  It was released through the award-winning IDW Publishing in 2010.</p>
        <p>Todd most recently rewrote the Japanese script BASHIRA into an English language screenplay.  Directed by Academy Award winner Nickson Fong, this horror feature is a unique cinematic blend of Japanese folklore, surreal nightmare, electronic music and visual effects.  The film is currently wrapping up post production.</p>
        <p>Todd has several other projects on deck, including writing, directing and producing the historical documentary HAWAII SONS OF THE CIVIL WAR.  It tells the relatively unknown story of the more than 200 individuals from the sovereign nation of Hawaii that fought in America’s most devastating conflict.  This film will mark Todd’s debut in documentary filmmaking.</p>

    </section>
    </div>
    </ContentWrap>
</Wrapper>
  )
}

export default Todd

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