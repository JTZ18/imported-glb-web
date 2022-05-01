import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0, 0.4)',
  backdropFilter: 'blur(4px)',
  boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.2)',
  maxWidth: '700px',
  fontSize: '4.5rem',

  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: '1.5rem', color: '#cab18a', fontWeight: '700' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontSize: '4.5rem',
  },
  color: '#cab18a',
  fontSize: '4.5rem',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: '50px',
  borderTop: '0px solid rgba(0, 0, 0, .125)',
  color: '#cab18a',
  fontSize: '4.5rem',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div id="FAQ-title">FAQ</div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{fontSize: '1.5rem', fontWeight: '700'}}>What is Tectonic Tales seeking to do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tectonic Tales seeks to create the first Hollywood animated series that shares the proceeds of the series with it’s community! The animated series will be an action-adventure series akin to Arcane: League of Legends​ meets Ready Player One​.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{fontSize: '1.5rem', fontWeight: '700'}}>What are the utilities of Tectonic Tales NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{marginLeft: '-20px'}}>
            <li>Potential for revenue share of proceeds from sale of TectonicBlaze & subsequent series with community</li>
            <li>Exclusive access to watch TectonicBlaze before anyone else watches it on mainstream streaming platforms!</li>
            <li>WL or airdrop for future NFT collections</li>
            <li>Merch, metaverses avatars, exclusive parties and the usual stuff!</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{fontSize: '1.5rem', fontWeight: '700'}}>When will the minting start?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dates will be revealed soon. Stay tuned.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography style={{fontSize: '1.5rem', fontWeight: '700'}}>Where can I mint my Tectonic Tales NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The official minting link will only be disclosed to our Discord server <a style={{color:'#cab18a'}} target="blank" href="https://discord.gg/4uhJ6qFP37">here</a>. Come and join us!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography style={{fontSize: '1.5rem', fontWeight: '700'}}>What will be the price?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It will be less than 0.1 ETH. Our aim is to allow as many talented creators and fans to join the community as possible, and yet being able to fund the animated series! Trust us, we’re keeping it as low as we can for you!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography style={{fontSize: '1.5rem', fontWeight: '700'}}>What chain will it be?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The projects will be selling on Ethereum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography style={{fontSize: '1.5rem', fontWeight: '700'}}>How do I get whitelisted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Come and join our Discord channel and check on the how-to-whitelist channel, or you can follow our Twitter account for WL giveaway announcements!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
