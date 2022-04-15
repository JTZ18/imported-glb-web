import React, { useState } from 'react';
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { ScrollControls, CameraShake, Sky, Shadow, SpotLight, OrbitControls, useDepthBuffer, useTexture, Stage, Backdrop, useMatcapTexture, MeshReflectorMaterial, Environment, ContactShadows, softShadows, shaderMaterial, Cloud, Loader, useBoxProjectedEnv, Points, PointMaterial } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bounds, GizmoHelper, GizmoViewport, Box } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useAnimatedSprite } from 'use-animated-sprite';
import { WaveMaterial } from './shaders/WaveMaterial'
import './shaders/PortalMaterial'
import './shaders/GlowingRing'
import Fireflies from './components/Fireflies';
import glsl from 'babel-plugin-glsl/macro'
import { MeshStandardMaterial } from 'three';
import WaveVertexShader from './shaders/WaveVertex.glsl'
import Theov4 from './components/Theov4'
import FullScene from './components/Theo_all_06';
import ModelGecko from './components/Theo_noBG_08';
import BowlStage from './components/Bg_bowl';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import './style_james.css'
import Nickson from './components/Nickson'
import Steven from './components/Steven'
import Todd from './components/Todd'
import David from './components/David'




export default function NewApp() {
  //debugger;
  const [aboutStatus, setAboutStatus] = useState(false)
  const [faqStatus, setFaqStatus] = useState(false)
  const [teamStatus, setTeamStatus] = useState(false)
  const [roadmapStatus, setRoadmapStatus] = useState(false)

  const [nicksonStatus, setNicksonStatus] = useState(false)
  const [stevenStatus, setStevenStatus] = useState(false)
  const [toddStatus, setToddStatus] = useState(false)
  const [davidStatus, setDavidStatus] = useState(false)

  useEffect(() => {

  }, [aboutStatus])

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 3] }} gl={{ alpha: false }}>
      {/* <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} /> */}
        <OrbitControls makeDefault far={50} near={0.01}/>

        <fog attach="fog" args={['#1E160A', 0, 7]} /> // from train example
        <color attach="background" args={['#1E160A']} />
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
        
        {/* <ambientLight intensity={1.5} /> */}
        {/*  */}
        
        {/* <spotLight position={[5, 0, 5]} intensity={100} penumbra={1} angle={0.33} castShadow color="#0c8cbf" />
        <spotLight position={[10, 10, 5]} angle={0.15} penumbra={1} intensity={100} castShadow shadow-mapSize={[2048, 2048]} color="#0c8cbf" /> */}
        {/* <spotLight position={[0, 1, 0]} angle={0} penumbra={1} intensity={100} castShadow shadow-mapSize={[2048, 2048]} color="#0c8cbf" /> */}
        {/* <BackdropWithShader /> */}
      {/* <directionalLight position={[-10, 0, -5]} intensity={10} color="red" />
        <directionalLight position={[-1, -2, -5]} intensity={10} color="#0c8cbf" /> */}
        {/* <fog attach="fog" args={['#191920', 0, 5]} /> */}
        
      
          
          <ambientLight intensity={1.5} />
          {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
          <spotLight angle={0.14} color="#FFF7CF" penumbra={1} position={[500, 4000, 0]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        
          <Suspense fallback={null}>
          {/* <spotLight ref={spotlight1} position={[2, 3, -5]} intensity={1} penumbra={1} angle={0.53} lookAt={[0,0,0]}  /> */}
          {/* <spotLight position={[2, 3, 5]} intensity={10} penumbra={1} angle={0.53} lookAt={[0,0,0]} castShadow /> */}
            {/* <Theov4 scale={10} rotation={[0,Math.PI / 2,0]}/> */}
            {/* <Gecko scale={0.1} position={[0, -0.5, 0]}/> */}
            {/* <CurvedPlaneGLB /> */}
            <Fireflies count={100}/>
            {/* <Cloud
              position={[0, 5, 0]}
              opacity={0.3}
              speed={0.4} // Rotation speed
              width={10} // Width of the full cloud
              depth={1} // Z-dir depth
              segments={10} // Number of particles
            /> */}
            {/* <Stage
              contactShadow // Optional: creates a contactshadow underneath the content (default=true)
              shadows // Optional: lights cast shadow (default=true)// Optional: zooms the content in (default=true)
              intensity={1} // Optional: light intensity (default=1)
              environment="city"
   // Optional: environment (default=city) // Optional: rembrandt (default) | portrait | upfront | soft} // Optional: recalculates control target for correctness
            > */}

            <FullScene aboutStatus={aboutStatus} setAboutStatus={setAboutStatus} faqStatus={faqStatus} setFaqStatus={setFaqStatus} teamStatus={teamStatus} setTeamStatus={setTeamStatus} roadmapStatus={roadmapStatus} setRoadmapStatus={setRoadmapStatus} scale={10}/>
            <spotLight castShadow position={[0, 3, 0]} intensity={10} penumbra={1} angle={0.53} lookAt={[0,0,0]} distance={10} attenuation={1} anglePower={2} color={'#FFF7CF'}  />
            {/* <SpotLight
              distance={5}
              angle={0.15}
              attenuation={5}
              anglePower={5} // Diffuse-cone anglePower (default: 5)
              position={[1, 4, -1]}
            /> */}
            {/* <BowlStage rotation={[0,Math.PI,0]} scale={10}/> */}
            {/* <Backdrop
              floor={5.25} // Stretches the floor segment, 0.25 by default
              segments={20} // Mesh-resolution, 20 by default
              scale={[20,5,1]}
              position={[0,0,-2]}
            > 
              <Shadow
                color="black"
                colorStop={0}
                opacity={0.5}
                fog={false} // Reacts to fog (default=false)
              />
              <meshStandardMaterial color="black" />
              <ContactShadows
                opacity={1}
                width={1}
                height={1}
                blur={1} // Amount of blur (default=1)
                far={10} // Focal distance (default=10)
                resolution={256} // Rendertarget resolution (default=256)
              />
            </Backdrop> */}
            <ScrollControls pages={10} >
              <ModelGecko scale={10}/>
              
            </ScrollControls>
            {/*<mesh rotation={[-Math.PI/2,0,0]} scale={[10,10,10]}>
              <planeGeometry/>
              <MeshReflectorMaterial
                blur={[0, 0]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={0} // How much blur mixes with surface roughness (default = 1)
                mixStrength={1} // Strength of the reflections
                mixContrast={1} // Contrast of the reflections
                resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
                mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
                minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
                distortion={1} // Amount of distortion based on the distortionMap texture
                 // The red channel of this texture is used as the distortion map. Default is null
                debug={0} /* Depending on the assigned value, one of the following channels is shown:
                  0 = no debug
                  1 = depth channel
                  2 = base channel
                  3 = distortion channel
                  4 = lod channel (based on the roughness)
                
              reflectorOffset={0.2}
              color={"black"} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
              />
            </mesh>*/}
            {/* </Stage> */}

            <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[200, 200]} />
            <MeshReflectorMaterial
              blur={[100, 100]}
              resolution={1024}
              mixBlur={0.2}
              mixStrength={20}
              depthScale={1}
              minDepthThreshold={0.2}
              color="#120D05"
              metalness={0.6}
              roughness={1}
              fog={true}
            />
            </mesh>
            <Environment preset="dawn" />
      
          </Suspense>

          
          
      </Canvas>
      <Loader/>
      
      <About
          variants={containerVariants}
          animate={aboutStatus ? "visible" : "hidden"}>
          <CloseWrapper>
            <CustomClose onClick={() => setAboutStatus(false)}/>
          </CloseWrapper>
          <div class="modal-wrapper" id="about">
          <section class="modal-window">
            <header class="modal-header">
              <h3>About Tectonic Tales</h3>
            </header>
            <p>Tectonic Tales is proud to present Tectonic Blaze, a comedic action adventure following Theo, a gecko, and his trusty sidekick Sam, a frog, as they take on the precarious mission of delivering high value packages across a futuristic yet archaic landscape of cyberpunk technology, ancient alchemy and esoteric mysticism.</p>
            <p>Conceived by Academy Award winning VFX artist Nickson Fong, and utilizing the team behind his award winning feature film directorial debut BASHIRA, Tectonic Blaze promises to push the boundaries of animation.  2D, 3D, stop motion and other styles of animation will give a unique, colorful and varied look.</p>
            <p>The world of Tectonic Blaze is vast and eclectic, incorporating numerous cities, villages and hidden realms.  Think of the worlds of ZOOTOPIA and WRECK-IT-RALPH, or The Oasis in READY PLAYER ONE where a kaleidoscope of pop culture thrives and you’ll get an idea of what the world of Tectonic Blaze has to offer.  From an ancient Chinatown to a cyber future Tokyo, from a western cowboy world in a desert to a Polynesian archipelago in a lake, from a mystical world of Yokai to a forbidden dominion with unspeakable horrors, our heroes must traverse these wide ranging lands to complete their missions.</p>
            <p>At the heart of this series is The Delivery Service, but this is no ordinary post office or FedEx.  This is the Special Forces of delivery.  Members are born into this secret society like ASSASSINS CREED and trained at a young age to become elite carriers.  The packages are high value assets where lives are at stake, sometimes even the fate of the world.  There are harsh consequences if these packages are not delivered on time and there is no room for error.  Like THE TRANSPORTER, what is contained in the packages is never revealed and no questions are asked.  The job is to make the delivery with no excuses.</p>
            <p>One key piece of equipment for Delivery Service carriers is a high tech machine that transforms them into various costumes so they can blend in with whatever world they must journey through.  There is also a smaller version of this technology like a wrist watch, but its efficacy is less reliable.  Sometimes our heroes will be forced to improvise, resulting in comedic mishaps.  Think of Peter Sellers’ disguises in the PINK PANTHER films or Chevy Chase in FLETCH.</p>
            <p>Driving the series are lovable best friends Theo and Sam as they struggle to gain respect as carriers among their peers.  No one takes them seriously, so they are always trying to prove themselves, often with disastrous and hilarious results.  Their world is populated with an eclectic array of animals, insects and mysterious cryptids, many of them with a strong sense of hip and popular fashion trends.</p>
            <p>Tectonic Blaze will be packed with action, featuring different styles of martial arts.  Kung fu, karate, Muay Thai, boxing, MMA, even professional wrestling will all be on display.  Influences range from ENTER THE DRAGON, BLOODSPORT and FIGHT CLUB.  Fight sequences will combine grace with grit, but also a dose of humor in the vein of Jackie Chan and Sammo Hung.</p>
            <p>We invite you to participate in our project as we shape Tectonic Blaze into a one of a kind, interactive creation.</p>
          </section>
        </div>
      </About>

      <FAQ
          variants={containerVariants}
          animate={faqStatus ? "visible" : "hidden"}>
          <CloseWrapper>
                    <CustomClose onClick={() => setFaqStatus(false)}/>
          </CloseWrapper>
          <div class="modal-wrapper" id="faq">
          <section class="modal-window">
            <header class="modal-header">
              <h3>FAQ</h3>
            </header>
            <h4>What is Kung Fu Gecko and the inspiration behind it?</h4>
            <p>
              Kung Fu Gecko is a short animated feature about a gecko and a frog. Kung Fu Gecko (KFG) was inspired by the real-world geckos of my childhood.
            </p>
            <p>
              When I was a kid, I was always fascinated by the geckos around me. I admired them because they could hang upside down and scale the walls so fast. They basically had the same superhero powers as Spider-man, minus the web-slinging of course, but in real-life!
            </p>
            <p>
              I grew up with the comic books and kung fu movies of the 70’s and 80’s. Spider-man was one of my favorites during those days. Every time I would see Spider-man climbing up walls and swinging from buildings it reminded me of the geckos hanging upside down on my living room ceiling right next to the old fluorescent tube.
              Fluorescent tube lights were common in Singapore during my childhood. They were everywhere and before a heavy rain in the evenings, the most interesting things would happen around these bright lights. Huge swarms of flies and other insects would all gather around and fight for the light.
              The large swarms attracted all the nearby geckos, both big and small. They would come out of nowhere and start catching these flies with their sticky tongues. Some would leap from wall to wall to catch these flies in mid-air around the light. Seeing these geckos in action made me think of it as some kind of gecko kungfu feeding frenzy. It was very exciting to watch.
              For me, the geckos are amazing little creatures that I could spend hours watching as they feed around the lights.
              The first time I asked my grandparents what geckos were, they said that they are the protectors of the house and not to harm them. They told me that the geckos help us by eating all kinds of bugs, especially mosquitos and flies.
            </p>
            <p>
              They have many names in Cantonese and Mandarin, but one of the names that really sparked a deeper interest for these creatures is 守宮 - in direct translation- “the protector or the guardian of the palace.” When you break up the two words.
            </p>
            <p>
              守 (Shou) Means Protector or Guardian<br/>
              宮 (Gong) Means Palace
            </p>
            <p>
              I thought to myself, “OMG! That is so cool! What a fantastic name.” Images and stories started brewing in my mind about these little creatures. They would be dressed in armor and using cool weapons as they flew and jumped around the rooftops of the imperial palace. They were just like the warriors in Chinese kung fu movies. 
              My fascination for geckos started at a young age and it was just about the same time that I had developed a keen interest in movie effects like stop-motion animation and other visual effects. The 7th Voyage of Sinbad (1958) was a film that really changed my life. I vividly remember that my primary school teacher showed the film on a large projector to the class and I was blown away! On that very day, I was bitten by a moviemaking bug. The special effects in Sinbad were amazing and the technology at the time was groundbreaking. The special effects master was Ray Harryhausen. He and his team created all the creature action special effects in the Sinbad movies. This was well before the age of the Internet so there were only books and magazines that featured his work. I remember spending hours at the bookstore reading about how he created special effects.
            </p>

            <h4>What are my dreams for the future of Kung Fu Gecko?</h4>
            <p>
              My dream is to turn Kung Fu Gecko into an animated series and feature. There is so much power in storytelling and I believe that through these little creatures we can take the audience to places they have never seen before, intriguing stories and lots of kung fu action.  Storytelling with animation gives so much power to the story because there are no boundaries.
            </p>
            <p>
              Animation is the most fluid of all mediums and the possibilities are endless. In animation a character can be anywhere, doing anything, at any point in time. These stories have no humans which is a good thing. The real world is full of humans already, why should our content be the same? I think that all of us could use an entertaining break from reality by watching some fun fast fighting geckos. It would be a dream come true to turn Kung Fu Gecko into something that gives an audience some comfort and escape from the challenges and troubles of the real world.
            </p>
            <h4>What happened to Kung Fu Gecko?</h4>
            <p>
              Kung Fu Gecko was started in 2004 when Nickson returned from the USA to Singapore to start his animation company.
              Kung Fu Gecko was way ahead of the curve in Asia. Funding for animated features was very premature at the time as very few investment companies and investors understood the business model. The cost of producing animation was very high; Hardware / Software costs were many times higher than costs today and lack of experienced talent was a major factor. Training programs were time consuming and recruiting experienced instructors from abroad was difficult and expensive. All the above are major factors that slowed the development of Kung Fu Gecko.
            </p>

            <h4>Has Kung Fu Gecko ever been officially released?</h4>
            <p>The development of Kung Fu Gecko has always been ongoing, currently, there are special opportunities to accelerate the process and complete the project with a diverse and global premise. </p>
            <p>Egg Story has been in the animation business for almost 20 years. It has completed numerous large scale projects, gained invaluable experience, and has developed a network of partners throughout the industry.</p>
            <p>Egg Story recently completed Bashira, a feature film that combines the horror and fantasy genres. It’s a live-action movie that is heavy in animation and visual effects. It was created by Egg Story Studios from scratch. From the story, screenplay, pre-production to principal photography, as well as post-production, to putting the film in the can, every single step of the process was managed by Egg Story.</p>
            <p>In Bashira, there were more than 1,300 VFX shots, all of which were designed and managed by Egg Story.</p>
            <p>Bashira was recently awarded -Best Animated Feature by the  “Another Hole in the Head” International Film festival based in San Francisco. The festival has been running for almost 20 years.</p>
            <p>The completion of Bashira and the quality of the visual effects were on par with many big budget Hollywood films at a fraction of the cost.  Bashira also won Best VFX at the Buenos Aires Rojo Sangre horror film festival.</p>

            <h4>So how is Kung Fu Gecko NFTs going to change all that?</h4>
            <p>Blockchain technology is changing the world right before our eyes. Kung Fu Gecko NFT will be one of the many animated projects that would benefit from this technology.</p>
            <p>Our new NFT project TectonicTales (TT) is a spin-off from Kung Fu Gecko. The project TectonicTales is about building and rewarding the community.</p>
            <p>Kung Fu Gecko has been in the making for a long time and many creative minds have contributed to the stories, characters, and animation. TectonicTales is an expansion that rests on a strong foundation of these creative ideas and with the help of the Blockchain Technology we hope to bring together like minded creative individuals and teams with the interest of storytelling and animation to contribute to the process of making and shaping the project. It is important to us that we share the rewards of all our efforts with our community of supporters and achieve our dreams without any compromises.</p>
            <p>The world of TectonicTales encompasses many different realms, past, present, future and many diverse cultures, subcultures, and music all amalgamated in one multiverse.</p>
            <p>Our very first animated project under the umbrella of TectonicTales is TectonicBlaze (TBZ). It’s a kung fu action animated series about a gecko and a frog trying to get ahead in a world of creatures living in a mysterious and challenging multiverse.</p>
            <p>In TectonicBlaze there is an opportunity for anyone in any culture or ethenic background to contribute their stories, designs, art, music, or business skills to help us complete our projects. Collectively, these contributions will help us in building a cohesive community with common visions and goals.</p>
            <p>For example, an artist that joins our TectonicBlaze community will get to present his/her work to the community during the making of the project. The community will then vote on which designs should be implemented into the project. The selected designs will be converted into NFT’s and the artists will be rewarded through the royalties of the NFT.</p>
            <p>The same goes for Music and other types of contributions.</p>
            <p>For example, an animation supervisor or producer with many years of experience in the animation industry joins the TectonicBlaze community and assists in the management of the project.  They will benefit from working with the DAO. Small communities will be created within the DAO with special interest like the Character Animation community. He/She will manage animators in this special community and be rewarded through points.</p>
            <p>The blockchain technology has literally changed the way animation is produced and how the team can have ownership and rewards.</p>
          </section>
        </div>
      </FAQ>

      <Team
          variants={containerVariants}
          animate={teamStatus ? "visible" : "hidden"}>
          {nicksonStatus && <Nickson closeNickson={setNicksonStatus} />}
          {stevenStatus && <Steven closeSteven={setStevenStatus} />}
          {toddStatus && <Todd closeTodd={setToddStatus} />}
          {davidStatus && <David closeDavid={setDavidStatus} />}
          <CloseWrapper>
                    <CustomClose onClick={() => setTeamStatus(false)}/>
          </CloseWrapper>
          <div class="modal-wrapper" id="team">
          <section class="modal-window">
            <header class="modal-header">
              <h3>The Team & Partners</h3>
            </header>
            <h4>About EggStory & eyecon</h4>
            <p>EggStory Studio is the exploration vessel of storytelling and adventure. eyecon Studio is the pillar of science and technology.</p>
            <p>Mix the both and we are a fusion clockwork of ideas that illuminate uncharted mindscapes, pioneering dedication and core values to deliver our audience the unimaginable reality. Hybrid cross-cultural narratives are our fuel, our adrenaline and even more … our fearless pursuit in creating modern and traditional immersive stories and content.</p>
            <h4>The Team</h4>

            <div class="team_member_div">
              <img src="img/nickson.png" class="team_pic"/>
              <br/>
              <a href="#" class="modal-trigger team_member_link" data-modal-id="nickson" onClick={() => setNicksonStatus(true)}>Nickson Fong</a>
              <p class="team_member_title">CEO</p>
            </div>
            <div class="team_member_div">
              <img src="img/james.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">James Blackburn</span>
              <p class="team_member_title">CTO</p>
            </div>

            <div class="team_member_div">
              <img src="img/veronica.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Veronica Ng</span>
              <p class="team_member_title">CFO</p>
            </div>
            <div class="team_member_div">
              <img src="img/eko.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Eko Nonoyama</span>
              <p class="team_member_title">Writer / Costume Designer</p>
            </div>
            <div class="team_member_div">
              <img src="img/todd.png" class="team_pic"/>
              <br/>
              <a href="#" class="modal-trigger team_member_link" data-modal-id="todd" onClick={() => setToddStatus(true)}>Todd Ocvirk</a>
              <p class="team_member_title">Writer</p>
            </div>
            <div class="team_member_div">
              <img src="img/david.png" class="team_pic"/>
              <br/>
              <a href="#" class="modal-trigger team_member_link" data-modal-id="david" onClick={() => setDavidStatus(true)}>David Sisko</a>
              <p class="team_member_title">Music Producer, Composer, Mixer</p>
            </div>
            <div class="team_member_div">
              <img src="img/steve.png" class="team_pic"/>
              <br/>
              <a href="#" class="modal-trigger team_member_link" data-modal-id="steve" onClick={() => setStevenStatus(true)}>Steven Krone</a>
              <p class="team_member_title">Film Producer, Lawyer</p>
            </div>
            <div class="team_member_div">
              <img src="img/daniel.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Daniel Cheng</span>
              <p class="team_member_title">Producer</p>
            </div>
            <div class="team_member_div">
              <img src="img/sk.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Shi Kian</span>
              <p class="team_member_title">Art Director</p>
            </div>
            <div class="team_member_div">
              <img src="img/callen.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Callen Desmond</span>
              <p class="team_member_title">Senior Concept Artist</p>
            </div>
            <div class="team_member_div">
              <img src="img/ted.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Ted Godwin</span>
              <p class="team_member_title">Producer, VFX Post / Supervisor</p>
            </div>
            <div class="team_member_div">
              <img src="img/glenn.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Glenn James</span>
              <p class="team_member_title">Narrator & Sound Designer</p>
            </div>
            <div class="team_member_div">
              <img src="img/jos.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Jos Barteling</span>
              <p class="team_member_title">Sys. Admin</p>
            </div>
            <div class="team_member_div">
              <img src="img/peter.png" class="team_pic"/>
              <br/>
              <span class="team_member_link">Peter Yomsiri</span>
              <p class="team_member_title">Assistant Editor</p>
            </div>

            <h4>Partners: SEEDverse</h4>
            <p>SEEDverse is a company that provides NFT and digital solutions for creators and SMEs seeking to transform their businesses. It is an investee company of S.E.E.D Ventures, a venture capital fund management company that is based in Singapore.</p>
            <br/>
          </section>
        </div>
      </Team>

      <Roadmap
          variants={containerVariants}
          animate={roadmapStatus ? "visible" : "hidden"}>
          <CloseWrapper>
                    <CustomClose onClick={() => setRoadmapStatus(false)}/>
          </CloseWrapper>
          Roadmap Page.
      </Roadmap>
      
    </>
    

    
  )
}

function Gecko({ ...props }) {
  // This hook gives you offets, ranges and other useful things
      const obj = useLoader(OBJLoader,'/TheoPose_Wip02.obj')
      //console.log(obj)
      //console.log(obj.children[0].geometry)
      //debugger;
      const ref = useRef()
      // useFrame((state, delta) => (ref.current.time += delta))
      // useFrame((state, delta) => (ref.current.uTime += delta))
      const material = new THREE.MeshPhongMaterial({color:"lightblue"})
      material.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = {value: 0} 
        shader.uniforms.iResolution = { value: new THREE.Vector3(2560, 581,1) }
        shader.vertexShader = 'uniform float time;\n' + shader.vertexShader;
	      shader.vertexShader = shader.vertexShader.replace(
          '#include <begin_vertex>',
          WaveVertexShader
	      );
        materialShader = shader
      }
      const [matcap, url] = useMatcapTexture(
        // short listed list 10,18, 20,33, 46, 58, 71, 90, 150, 159, 325, 337, 389
        33, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
        1024 // size of the texture ( 64, 128, 256, 512, 1024 )
       )
      

      softShadows({
        frustum: 3.75, // Frustum width (default: 3.75) must be a float
        size: 0.005, // World size (default: 0.005) must be a float
        near: 9.5, // Near plane (default: 9.5) must be a float
        samples: 17, // Samples (default: 17) must be a int
        rings: 11, // Rings (default: 11) must be a int
      })

      const material2 = new THREE.MeshPhongMaterial({
        color:"black",
        emissive: "black",
        specular: "#ff4000",
        shininess: 100,

      })
      
      return (
      <mesh geometry={obj.children[0].geometry} material={material2} {...props}>
        {/* <meshMatcapMaterial matcap={matcap} /> */}
        {/* <portalMaterial ref={ref} colorStart="hotpink" colorEnd="rgb(124, 79, 203)" /> */}
        {/* <glowingRing ref={ref} colorStart="hotpink" colorEnd="rgb(124, 79, 203)" /> */}
      </mesh>)
  }

function BackdropWithShader() {
  const ref = useRef()
  
  useFrame((state, delta) => (ref.current.uTime += delta))
  //debugger;
  useFrame((state) => {
    //console.log(ref);
  })


  return(
    <Backdrop castShadow floor={2} segments={20} position={[0, -0.5, -3]} scale={[50, 20, 5]}>
        {/* <waveMaterial ref={ref} key={WaveMaterial.key} colorStart="hotpink" colorEnd="rgb(124, 79, 203)" /> */}
        <waveMaterial ref={ref}/>
    </Backdrop>
  )
}

function Smoke() { 
  return(
    <mesh />
  )
}

function CurvedPlane() {
  const ref = useRef()

  const curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -10, 0, 0 ),
    new THREE.Vector3( -5, 15, 0 ),
    new THREE.Vector3( 20, 15, 0 ),
    new THREE.Vector3( 10, 0, 0 )
  );
  
  const points = curve.getPoints( 50 );
  const geometry = new THREE.BufferGeometry().setFromPoints( points );

  
  useFrame((state, delta) => (ref.current.uTime += delta))
  //debugger;

  return (
    <mesh geometry={geometry} scale={2}>
      {/* <waveMaterial ref={ref}/> */}
      <meshPhongMaterial color={"#000000"}/>
    </mesh>
  )
}


// sprite sheet animation smoke
//   function Smoke({IconPosition, IconSize, ...props }) {

//     const spriteTexture = useLoader(THREE.TextureLoader, './smoke-sprite-sheetv3.png')
//     const [animator] = useState(() => new PlainAnimator(spriteTexture, 8, 8, 52, 30))
//     useFrame(() => animator.animate())
  
//     return (
//       <mesh position={IconPosition}>
//         <boxGeometry args={IconSize} />
//         <meshStandardMaterial map={spriteTexture} transparent={true} />
//       </mesh>
//     )
// }


function BuildingGLB({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const { scene, nodes, animations } = useLoader(GLTFLoader,'/building.glb')
  //console.log(animations)
  console.log(scene)
  //for shadows
  return <primitive object={scene} {...props} />
}

function CurvedPlaneGLB({...props}) {
  const { scene, nodes, animations } = useLoader(GLTFLoader,'/curvedPlane.glb')
  //console.log(animations)
  console.log(nodes)
  
  const ref = useRef()

  useFrame((state, delta) => (ref.current.uTime += delta))
  return (
    // <mesh name="Plane" geometry={scene.children[0].geometry} scale={10}>
    //   <meshStandardMaterial />
    // </mesh>
    <mesh geometry={nodes.Plane.geometry} scale={[15,4,20]} position={[0,-2,0]}>
      <waveMaterial ref={ref}/>
      {/* <meshStandardMaterial color={"grey"} /> */}
    </mesh>

  )
}

function Gecko4({...props}) {
  const { scene, nodes, animations } = useLoader(GLTFLoader,'/theov4.glb')
  //console.log(animations)
  console.log(nodes)
  
  const ref = useRef()

  // useFrame((state, delta) => (ref.current.uTime += delta))
  return (
    // <mesh name="Plane" geometry={scene.children[0].geometry} scale={10}>
    //   <meshStandardMaterial />
    // </mesh>
    <mesh geometry={nodes.Plane.geometry} scale={[15,4,20]} position={[0,-2,0]}>
      <waveMaterial ref={ref}/>
      {/* <meshStandardMaterial color={"grey"} /> */}
    </mesh>

  )
}





  

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
//useGLTF.preload('/town.glb')
//useFBX.preload('/Room.fbx')
//useGLTF.preload('/isometric-room.glb')
//useGLTF.preload('/building.gltf')
// useGLTF.preload('/building.glb')
// useFBX.preload('/building.fbx')

// css styling for center div
const About = styled(motion.div)`
  position: fixed;
  top: 0%;
  left: 0%;
  color: white;    
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  z-index: 10;
  overflow: scroll;
  overflow-x: hidden;
`
const FAQ = styled(About)`
`

const Team = styled(About)`
  img { 
    border-radius: 50%;
  }
`

const Roadmap = styled(About)`
`


const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    z-index: 20;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

// handles popup animation
const containerVariants = {
  hidden: { 
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1, type: 'spring', stiffness: 120
    }
  }
}
