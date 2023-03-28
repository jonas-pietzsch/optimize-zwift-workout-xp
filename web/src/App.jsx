import { useState } from "react";
import { ZwiftWorkoutParser } from "../../library/ZwiftWorkoutParser.js";
import { download } from "./downloadFile.js";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Faq } from "./Faq.jsx";
import { useSettingsContext } from "./SettingsContext.jsx";
import { OptionsStep } from "./steps/OptionsStep.jsx";
import { WorkoutFileUploadStep } from "./steps/WorkoutFileUploadStep.jsx";
import { SummaryStep } from "./steps/SummaryStep.jsx";

const steps = ["Select .zwo file(s)", "Options", "Summary"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <WorkoutFileUploadStep />;
    case 1:
      return <OptionsStep />;
    case 2:
      return <SummaryStep />;
    default:
      throw new Error("Unknown step");
  }
}

const optimize = async (settings) => {
  for (const file of settings.selectedFiles) {
    const workoutFileContent = await file.text();
    const workout =
      ZwiftWorkoutParser.parseZwiftWorkoutFile(workoutFileContent);
    workout.optimize({
      minimumDuration: settings.steadyStateBlocks.minimumDurationInMinutes * 60,
      intervalsDuration: settings.intervalsBlockDurationInSeconds,
    });
    const optimizedWorkoutFileContent =
      ZwiftWorkoutParser.assembleZwiftWorkoutFile(workout);
    download(
      file.name.replace(".zwo", "-optimized.zwo"),
      optimizedWorkoutFileContent
    );
  }
};

export const App = () => {
  const { settings, computed, reset } = useSettingsContext();
  const { shouldOptimizeAnything } = computed;

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = async () => {
    if (activeStep === 2) {
      await optimize(settings);
    }
    setActiveStep(activeStep + 1);
  };
  const canGoNext =
    (activeStep === 0 && settings.selectedFiles.length) ||
    (activeStep === 1 && shouldOptimizeAnything) ||
    activeStep === 2;
  const handleBack = () => setActiveStep(activeStep - 1);
  const startAgain = () => {
    reset();
    setActiveStep(0);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Box sx={{ my: { xs: 3, md: 6 } }}>
        <Faq />
      </Box>

      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Let's optimize!
        </Typography>

        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography typography={{ fontWeight: "bold" }}>
              Finished!
            </Typography>

            <Typography sx={{ mb: 3 }}>
              The optimized file(s) were put out as a download. You just have to
              move them into your Zwift custom workouts folder now and start
              training again.
              <br />
              Have fun and happy leveling!
            </Typography>

            <Button variant="contained" onClick={startAgain}>
              Start again
            </Button>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}

              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!canGoNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? "Optimize now!" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};
