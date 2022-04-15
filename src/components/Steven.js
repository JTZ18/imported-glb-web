import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

function Steven({closeSteven}) {
  return (
    <Wrapper>
    <ContentWrap>
<div class="modal-wrapper" id="steve">
  <section class="modal-window">
    <header class="modal-header">
      <h3>Steve</h3>
      <CloseWrapper>
            <CustomClose onClick={() => closeSteven(false)}/>
        </CloseWrapper>
    </header>
    <p>
    Steve Krone is a film producer and also entertainment counsel at the law firm Mitchell, Silberberg & Knupp, where he represents entertainment, media and convergence companies, investors and financiers, and individual creative artists in connection with all aspects of the financing, development, production, acquisition, distribution, and other exploitation of motion pictures, television programming, video games, music, online and other content, and related products and services. Steve’s clients include the Michael Crichton estate, the Public Broadcasting Service, Kobalt Music, and international film finance and production companies China’s Starlight Culture Entertainment Group and India’s Cinestaan.
    </p>
    <p>
    Steve served for six years as a Professor of Law and Director of the Donald E. Biederman Entertainment and Media Law Institute at Southwestern Law School. As Director of the Biederman Institute, he directed all aspects of the entertainment law program, including eight full-time and over 30 adjunct faculty; a curriculum of 60+ courses; the Entertainment and the Arts Legal Clinic; the LL.M. program in entertainment and media law; and the London summer program in international entertainment and media law. Steve taught courses in Contracts, International Entertainment Law, Motion Picture Production Law, and an interdisciplinary law and humanities course called Law, Lawyers and the Legal System in Film. Steve also taught Entertainment Business, Law and Finance to MBA students as a Visiting Professor at UCLA Anderson School of Management. Prior to joining the Southwestern faculty, Steve had a dual appointment at Chapman University as Associate Professor at the Dodge College of Film and Media Arts and a Visiting Associate Professor of Law.
    </p>
    <p>
    Before joining academia, Steve served as President and Chief Operating Officer of Village Roadshow Pictures Entertainment, a major independent film production company. During his nine-year tenure at Village Roadshow, the company amassed an impressive library of nearly 50 titles with production budgets totaling almost $3 billion and worldwide box office receipts of nearly $7 billion, including The Matrix trilogy, Ocean's Eleven and Ocean's Twelve, Analyze This, Three Kings, Training Day, Mystic River, Charlie and the Chocolate Factory, and Happy Feet. Steve joined Village Roadshow in 1998 as Executive Vice President of Business and Legal Affairs, was appointed Chief Operating Officer one year later, and added the title of President in 2003. In the latter capacity, he was responsible for all day-to-day operations, including business and legal affairs; physical production; finance; marketing and distribution; strategic planning; and human resources and administration. While at Village Roadshow, Steve also taught entertainment law at the University of Chicago and the University of Southern California.
    </p>
    <p>
    Steve’s current film and television producing projects include the following: BASHIRA – An effects-driven, supernatural horror movie filmed in Buffalo, NY and Aichi Prefecture, Japan, which will be making the film festival circuit this fall and is slated for release in early 2022. Bashira is directed by Academy-Award winning VFX artist Nickson Fong; stars Liam Aiken (Road to Perdition, A Series of Unfortunate Events, Ned Rifle), Mitzi Akaha, Kiki Sukezane (Westworld, The Terror: Infamy, Lost in Space), Emma Caymares (Call Your Mother, Fosse/Verdon), Brandon Gill and Colin Cunningham (Falling Skies, Stargate SG-1, Preacher, The 6th Day); and features original music (and a cameo role) by Mod Sun. THE SCARECROW – A coming of middle age, romantic drama based on the award-winning short film co-written and directed by Phil Rhys and starring Sandra Oh. A recently divorced father in his 50’s begins a relationship with his mid-70’s widowed neighbor. She guides him through the rocky shores of love and loss, allowing him to finally take responsibility for his life and move on. The film is currently casting and set to begin production in February 2022.
    </p>
    <p>
    LAND OF A THOUSAND DANCES – The true story of Cannibal & The Headhunters, the 1960’s Chicano band from East L.A. that scores a national hit with “Land of a Thousand Dances” while barely out of high school. On the personal request of Paul McCartney, they quickly find themselves opening for The Beatles on a two-week U.S. tour that begins at Shea Stadium and culminates at The Hollywood Bowl. The band begins at Lincoln High School and is discovered and nurtured by Rampart Records label founder Eddie Davis, who plows the profits from his successful restaurants into championing Mexican American musicians and singers and their pioneering "East Side Sound."
    </p>
    <p>
    RUNNING THE LINE – The extraordinary true story of the sensational 1919 Mississippi murder trial of Ben Ingram Jr., thought to be the inspiration for William Faulkner’s Intruder in the Dust. A brilliant, affluent and civic-minded black farmer – embroiled in an ongoing and bitter land dispute with his greedy white neighbor – shoots and kills the neighbor in self-defense. The Ku Klux Klan immediately mobilizes to lynch Ben, but hundreds of white and black people who know and love Ben race to his farm and keep the Klan at bay. Ben is arrested and charged with murder and, with the help of one of his closest friends, jailed in nearby Memphis where he will be safe until his trial begins. Risking their reputations and their lives, two white lawyers courageously defend Ben, guided behind the scenes by Willis Mollison, the most successful black lawyer in Mississippi, as well as Ben himself who quarterbacks from his Memphis jail cell. Despite the efforts of three powerful prosecutors (including a future United States Senator) determined to see Ben hang, the all-white, all-male jury finds Ben not guilty. Based on the forthcoming book by Schyleen Qualls (Ben Ingram’s granddaughter). Professor Henry Louis Gates Jr. is attached as Executive Producer.
    </p>
    <p>
    FOGTOWN – Set in a dystopian future or alternate reality, a renegade bicycle gang fights to solve the mystery of a strange plague taking out the young in this spiritual action-adventure series. When an outcast teenage girl with untapped mystical power joins their forces, the crew discovers that together they can do more than save the world – they can create a new one. FOGTOWN fuses the streetwise charisma of Baz Luhrmann’s ROMEO + JULIET, the gang anarchy of THE WARRIORS, and the world-building excitement of MAD MAX – invigorating the genre with a wildly imaginative optimism for the Greta Thunberg generation.
    </p>
    <p>
    Steve is a graduate of the University of Chicago Law School and earned an A.B. in Cinema-Television Production from the University of Southern California. Following law school, Steve was a law clerk to Chief Judge Abner J. Mikva of the U.S. Court of Appeals for the D.C. Circuit and Justices William J. Brennan, Jr. and David H. Souter of the Supreme Court of the United States. After his judicial clerkships, Steve practiced entertainment law with Gang, Tyre, Ramer & Brown, where he represented film and television producers, directors, writers, actors and executives – including firm clients Steven Spielberg, George Miller, Ben Stiller, Janet Jackson, Lauren Hill, Bob Gale, Bob Daly and Terry Semel – before becoming an industry executive himself.
    </p>
    <p>
    Steve serves on the Board of Mikva Challenge California, a high-school based program throughout Southern California that develops youth to be informed, empowered, and active citizens and community leaders by engaging them in an authentic and transformative learning process built on youth voice and youth expertise.
    </p>
  </section>
</div>
</ContentWrap>
</Wrapper>
  )
}

export default Steven

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