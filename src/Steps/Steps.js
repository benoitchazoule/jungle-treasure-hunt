import React from "react";
import Grid from "@mui/material/Grid";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import History from "./History";
import EnigmaForm from './EnigmaForm';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import Button from '@mui/material/Button';
import * as HindingPlaces from './HidingPlaces'

function getSteps() {
  return ["Histoire", "Énigme 1", "Défi 1", "Énigme 2", "Énigme 3", "Énigme 4", "Défi 2", "Énigme 5", "Énigme 6", "Défi 3", "Énigme 7", "Trésor"];
}

const Steps = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [challengeStepIndexes, setChallengeStepIndexes] = React.useState([2, 6, 9]);
  const challengeList = [
    {
      id: 2,
      title: 'Le mime des animaux',
      description: 'L’un après l’autre, les enfants vont devoir mimer au reste du groupe, l’animal que vous leur aurez chuchoté à l’oreille. Le défi est réussi quand tous les enfants sont parvenus à faire deviner leur animal. Exemples d’animaux à mimer : lion, singe, éléphant, rhinocéros, tigre, girafe, gazelle, perroquet, autruche...'
    },
    {
      id: 6,
      title: 'Fer à cheval',
      description: 'Pour organiser ce jeu, il vous faudra 2 chaises, 2 foulards et 8 chaussures. Divisez les enfants par groupe de deux. Bandez- leur les yeux à l’aide des foulards puis disposez les chaises et les chaussures au centre de la zone de jeu. À votre signal, les deux enfants doivent le plus rapidement possible placer les quatre chaussures sous les quatre pieds des chaises. Le premier qui a ferré son cheval (représenté par la chaise) a gagné et peut proposer au perdant d’imiter le cri de l’animal de son choix !'
    },
    {
      id: 9,
      title: 'Le tigre énervé',
      description: 'On désigne un tigre parmi les enfants. Celui-ci devra courir après les autres enfants pour les toucher. Quand un enfant est touché par le tigre, il doit s’asseoir. Pour devenir invisibles et se protéger du tigre, les enfants peuvent rester debout sur une jambe. Le tigre ne peut pas les toucher quand ils sont dans cette position. Le tigre a gagné si au bout de trois minutes, tous les enfants sont assis. Vous pouvez recommencer plusieurs fois le jeu en changeant de tigre.'
    },
  ]

  const steps = getSteps();

  const handleNext = () => {
    console.log(activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep);
  };

  const activeChallenge = challengeList.find((element) => {
    return element.id === activeStep;
  })

  return (
    <React.Fragment>
      <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step 
                  key={label}
                >
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item>
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
                    Commençons
                  </Button>
                </p>
              </div>
            ) : activeStep > 10 ? (
              <div style={{fontSize: 18}}>
                <Box sx={{ p: 2, border: '1px dashed #C3CB5D', margin: 5 }}>
                  <svg id="lion" className="animal-svg animal-float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.129 105.034">
                    <path id="lion-path1" fill="#FF5A29" d="M93.037 92.646c1.137-1.641 3.453-1.797 4.892-1.775 3.064.049 6.782-1.777 7.698-4.854.655-2.203.067-5.176-1.535-7.762-1.438-2.324-3.458-3.975-5.534-4.523l.288-2.125c2.722.721 5.313 2.799 7.11 5.699 1.979 3.195 2.66 6.781 1.822 9.592-.646 2.17-1.961 3.463-3.65 4.592-1.896 1.268-4.656 1.316-6.489 1.506-2.039.211-3.388.75-4.747 2.367-1.354 1.61-.696-1.504.145-2.717z"/>
                    <path id="lion-path2" fill="#662D3D" d="M100.49 67.808c-.452.229.328 1.939-.388 2.558-.291.251-1.339-1.683-1.715-1.491-.376.19.416 2.149.152 2.284-.264.133-1.589-1.555-1.965-1.365-.377.191 1.977 4.316 2.924 4.644 1.004.348 2.566-.141 2.743-1.023.465-2.304-1.207-5.883-1.751-5.607z"/>
                    <path id="lion-path3" fill="#FFBD40" d="M94.505 83.783c-2.658-11.422-2.468-20.617-31.938-30.815-16.207-5.609-25.314 8.478-27.105 19.762-.671 4.23 3.497 16.939 4.517 24.906-3.601.492-3.947 5.336-2.949 6.654.868 1.148 5.609.658 7.032.523 5.089-.477 3.41-16.195 6.107-18.262 1.551-1.189 3.317.15 3.559 2.324.405 3.641.648 6.416.981 8.672-1.803.316-1.974 4.533-.905 5.523 1.225 1.133 5.61 1.414 6.809.824 4.03-1.979 4.194-14.428 7.63-15.539 4.077-1.316 7.221 5.791 7.508 9.775.107 1.482-8.724.93-5.792 5.879 1.011 1.705 19.69 1.236 20.927-1.098.507-.954 5.923-9.231 3.619-19.128z"/>
                    <path id="lion-path4" fill="#FF5A29" d="M73.127 82.9c-7.128-1.979-7.027 8.242-7.027 8.242.577-1.439 1.249-2.496 2.143-2.785 2.889-.932 5.309 2.363 6.577 5.781.521 1.404.847 2.832.931 3.994 3.517-4.017 4.504-13.253-2.624-15.232zM6.684 41.161l-.001-.151.002-.367c-5.115-1.798-7.878-7.275-6.188-12.38 1.697-5.126 7.25-7.964 12.482-6.428l.286-.383c-3.106-4.41-2.072-10.471 2.371-13.639 4.452-3.175 10.661-2.257 13.969 2.028l.439-.14c.111-5.376 4.584-9.701 10.087-9.701s9.977 4.325 10.086 9.7l.439.14c3.309-4.285 9.518-5.203 13.969-2.028 4.443 3.168 5.478 9.229 2.371 13.639l.286.383c5.233-1.535 10.785 1.304 12.481 6.429 1.69 5.105-1.073 10.582-6.188 12.38l.003.367-.001.152c5.113 1.799 7.876 7.275 6.186 12.379-1.683 5.083-7.157 7.916-12.351 6.466l-.339.459c3.01 4.4 1.957 10.385-2.449 13.526-4.392 3.133-10.494 2.281-13.833-1.857l-.582.186c-.225 5.275-4.651 9.484-10.08 9.484s-9.855-4.209-10.08-9.484l-.581-.186c-3.34 4.139-9.442 4.988-13.834 1.857-4.405-3.142-5.459-9.127-2.448-13.528l-.338-.459c-5.194 1.451-10.669-1.382-12.352-6.465-1.689-5.104 1.074-10.581 6.188-12.379z"/>
                    <path  id="lion-path5" fill="#FFBD40" d="M14.637 28.79c-5.514-3.714.337-11.213 3.78-12.207 5.428-1.567 9.952 3.133 11.339 4.446.924.874 5.433-1.965 9.777-1.963 4.658.001 9.962 3.618 10.907 2.254.711-1.027 6.386-6.634 12.315-4.819 6.405 1.959 5.585 10.554 2.556 12.376-.253.152-.005.588-.012.879 3.555 4.046 5.64 6.94 5.638 12.248-.001 2.177-1.204 5.043-3.271 8.056-.375.547 3.326 2.886 2.895 3.439-.387.497-4.472-1.287-4.9-.789-.259.302 2.638 2.546 2.269 2.956-.457.509-4.188-.811-4.55-.441-.443.453 2.562 2.307 2.089 2.75-.507.476-4.492-.46-5.03 0-5.837 5-13.421 8.975-20.921 8.975-7.58 0-15.243-3.952-21.102-8.973-.401-.343-4.056.598-4.439.246-.433-.399 2.408-2.092 1.999-2.499-.459-.457-3.875.573-4.302.107-.351-.382 2.281-2.261 1.953-2.646-.394-.464-3.651.779-4.009.314-.415-.539 2.076-2.787 1.713-3.322-2.036-3.006-3.218-5.905-3.218-8.192.002-5.733 2.434-8.985 6.524-13.195z"/>
                    <path id="lion-path6" fill="#fff" d="M29.756 21.028c1.117.607 5.433-1.965 9.777-1.963 4.658.001 9.452 3.046 10.907 2.254-1.926 4.523-6.902 18.646-6.737 24.528l-7.923.114c-.713-6.705-2.509-16.82-6.024-24.933zM29.274 54.272c-.002 5.517 4.525 8.437 10.295 8.439 5.77.001 10.598-2.916 10.601-8.434.001-5.516-2.811-9.989-10.445-9.991s-10.45 4.469-10.451 9.986z"/>
                    <path id="lion-path7" fill="#662D3D" d="M33.208 52.184c.106.169.467 2.293 2.807 3.13.777.277 2.53.091 3.091-.444l.277-6.136c.009-.198.198-.35.422-.337.225.013.399.186.39.385l-.278 6.136c.653.606 2.372.861 3.175.621 2.587-.776 2.82-2.802 2.986-2.947.224-.195.815.067.65.26-.121.142-.416 2.396-3.244 3.333-1.021.339-3.407.142-4.008-.447-.708.53-3.034.616-4.028.192-2.418-1.03-2.741-3.194-2.85-3.525-.104-.322.464-.45.61-.221zM33.543 45.083c.473-1.458 1.752-1.76 6.725-1.586s5.51.893 5.037 2.351c-.473 1.457-4.08 3.338-5.849 3.276s-6.387-2.582-5.913-4.041z"/>
                    <path  id="lion-path8" fill="#DE8080" d="M51.581 48.022c.4 3.124 3.249 5.33 6.364 4.93 3.113-.4 5.314-3.257 4.915-6.381-.4-3.124-3.249-5.332-6.363-4.931s-5.316 3.259-4.916 6.382z"/>
                    <ellipse id="lion-ellipse1" transform="matrix(.995 .104 -.104 .995 4.471 -5.583)" fill="#662D3D" cx="55.703" cy="40.03" rx="2.846" ry="2.853"/>
                    <path id="lion-path9" fill="#DE8080" d="M27.657 48.022c-.399 3.124-3.249 5.33-6.363 4.93s-5.315-3.257-4.915-6.381c.399-3.124 3.249-5.332 6.363-4.931s5.316 3.259 4.915 6.382z"/>
                    <ellipse transform="matrix(-.995 .104 -.104 -.995 51.11 77.391)" fill="#662D3D" cx="23.535" cy="40.03" rx="2.846" ry="2.853"/>
                  </svg>
                  <p>Merci beaucoup mes amis.</p>
                  <p>
                    Sachez que le livre est très important, car il contient le secret de la cachette d’un des fabuleux trésors d’Alunira.
                    Nous soupçonnons les Loups d’avoir agi sous le commandement de la terrible sorcière Dokela.
                  </p>
                  <p>
                    Le Conseil d’Alunira m’a autorisé à vous offrir une partie du trésor. Votre récompense vous attend dans le coffre de {HindingPlaces.treasurePlace}
                  </p>
                  <div style={{clear: 'right'}}></div>
                </Box>
              </div>
            ) : challengeStepIndexes.includes(activeStep) ? (
              <div style={{ textAlign: 'center', fontSize: 18 }}>
                <span style={{ fontSize: 30 }}>C'est l'heure du défi</span>
                <br />
                <SportsScoreIcon sx={{ fontSize: 200, color: '#D9662D' }} />
                <br />
                <span style={{fontWeight: 'bold'}}>{activeChallenge.title}</span>
                <p>{activeChallenge.description}</p>
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
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Steps;
