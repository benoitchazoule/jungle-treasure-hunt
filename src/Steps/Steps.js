import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import History from "./History";
import EnigmaForm from './EnigmaForm';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import Button from '@mui/material/Button';

function getSteps() {
  return ["Histoire", "Énigme 1", "Défi 1", "Énigme 2", "Énigme 3", "Énigme 4", "Défi 2", "Énigme 5", "Énigme 6", "Défi 3", "Énigme 7", "Trésor"];
}

const Steps = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log(activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep < 1 ? (
        <div>
          <Box sx={{ p: 2, border: '1px dashed #C3CB5D', margin: 5 }}>
            <History></History>
          </Box>
          <p style={{textAlign: 'center'}}>
            <Button
              style={{ marginTop: 5 }}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              Étape suivante
            </Button>
          </p>
        </div>
      ) : activeStep in [2, 6, 9] ?(
        <div style={{ textAlign: 'center' }}>
          <SportsScoreIcon sx={{ fontSize: 300, color: '#00C88E' }} />
          <br />
          <span style={{ fontSize: 40 }}>C'est l'heure du défi</span>
          <br />
          <Button
            style={{ marginTop: 5 }}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Défi réussi !
          </Button>
        </div>
      ) : (
        <EnigmaForm 
          key={activeStep}
          activeStep={activeStep}
          handleNext={handleNext}
        ></EnigmaForm>  
      )}
    </div>
  );
};

export default Steps;
