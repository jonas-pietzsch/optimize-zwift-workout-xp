import { useSettingsContext } from "../SettingsContext.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined.js";
import Slider from "@mui/material/Slider";

const secondsToMinutesMarks = [
  { value: 30, label: "0:30m" },
  { value: 150, label: "2:30m" },
  {
    value: 300,
    label: "5:00m",
  },
  {
    value: 450,
    label: "7:30m",
  },
  { value: 600, label: "10:00m" },
];

export const OptionsStep = () => {
  const { settings, computed, setSettings } = useSettingsContext();
  const { shouldOptimizeAnyWarmupOrCooldown } = computed;

  return (
    <Box>
      <Typography sx={{ mb: 3 }}>
        Go with our meaningful default options or fine tune them to get the best
        XP boost out of this optimization.
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            inputProps={{ "aria-label": "controlled" }}
            checked={settings.steadyStateBlocks.optimize}
            onChange={(val) =>
              setSettings({
                ...settings,
                steadyStateBlocks: {
                  ...settings.steadyStateBlocks,
                  optimize: val.target.checked,
                },
              })
            }
          />
        }
        label="Optimize steady state blocks"
      />
      {settings.steadyStateBlocks.optimize ? (
        <>
          <Typography sx={{ fontSize: "small" }}>
            Min. duration before steady state blocks are optimized (seconds){" "}
            <Tooltip title="A steady state block must be this long or longer to be optimized. If it's shorter, it will remain as is.">
              <InfoOutlinedIcon />
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Min. duration before steady state blocks are optimized (seconds)"
            value={settings.steadyStateBlocks.minimumDurationSeconds}
            onChange={(e) =>
              setSettings({
                ...settings,
                steadyStateBlocks: {
                  ...settings.steadyStateBlocks,
                  minimumDurationSeconds: e.target.value,
                },
              })
            }
            max={600}
            min={30}
            getAriaValueText={(value) => `${value} seconds`}
            step={30}
            marks={secondsToMinutesMarks}
            valueLabelDisplay="auto"
          />

          <Typography gutterBottom sx={{ fontSize: "small" }}>
            Desired replacement intervals block duration (seconds){" "}
            <Tooltip title="If possible, intervals blocks created by the steady state optimization will be this long in total (on and off part of the interval).">
              <InfoOutlinedIcon />
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Desired replacement intervals block duration (seconds)"
            value={settings.steadyStateBlocks.replacementBlocksDurationSeconds}
            onChange={(e) =>
              setSettings({
                ...settings,
                steadyStateBlocks: {
                  ...settings.steadyStateBlocks,
                  replacementBlocksDurationSeconds: e.target.value,
                },
              })
            }
            max={600}
            min={30}
            getAriaValueText={(value) => `${value} seconds`}
            step={30}
            marks={secondsToMinutesMarks}
            valueLabelDisplay="auto"
          />
        </>
      ) : null}
      <hr style={{ marginTop: 30, marginBottom: 30 }} />
      <FormControlLabel
        control={
          <Checkbox
            inputProps={{ "aria-label": "controlled" }}
            checked={settings.warmupAndCooldownBlocks.optimizeWarmup}
            onChange={(val) =>
              setSettings({
                ...settings,
                warmupAndCooldownBlocks: {
                  ...settings.warmupAndCooldownBlocks,
                  optimizeWarmup: val.target.checked,
                },
              })
            }
          />
        }
        label="Optimize warmups"
      />
      <FormControlLabel
        control={
          <Checkbox
            inputProps={{ "aria-label": "controlled" }}
            checked={settings.warmupAndCooldownBlocks.optimizeCooldown}
            onChange={(val) =>
              setSettings({
                ...settings,
                warmupAndCooldownBlocks: {
                  ...settings.warmupAndCooldownBlocks,
                  optimizeCooldown: val.target.checked,
                },
              })
            }
          />
        }
        label="Optimize cooldowns"
      />
      {shouldOptimizeAnyWarmupOrCooldown ? (
        <>
          <Typography gutterBottom sx={{ fontSize: "small" }}>
            Min. duration before warmup/cooldown blocks are optimized (seconds){" "}
            <Tooltip title="A warmup or cooldown block must be this long or longer to be optimized. If it's shorter, it will remain as is.">
              <InfoOutlinedIcon />
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Min. duration before warmup or cooldown blocks are optimized (seconds)"
            value={settings.warmupAndCooldownBlocks.minimumDurationSeconds}
            onChange={(e) =>
              setSettings({
                ...settings,
                warmupAndCooldownBlocks: {
                  ...settings.warmupAndCooldownBlocks,
                  minimumDurationSeconds: e.target.value,
                },
              })
            }
            max={600}
            min={30}
            getAriaValueText={(value) => `${value} seconds`}
            step={30}
            marks={secondsToMinutesMarks}
            valueLabelDisplay="auto"
          />

          <Typography gutterBottom sx={{ fontSize: "small" }}>
            Desired replacement intervals block duration (seconds){" "}
            <Tooltip title="If possible, intervals blocks created by the warmup/cooldown optimization will be this long in total (on and off part of the interval).">
              <InfoOutlinedIcon />
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Desired replacement intervals block duration (seconds)"
            value={
              settings.warmupAndCooldownBlocks.replacementBlocksDurationSeconds
            }
            onChange={(e) =>
              setSettings({
                ...settings,
                warmupAndCooldownBlocks: {
                  ...settings.warmupAndCooldownBlocks,
                  replacementBlocksDurationSeconds: e.target.value,
                },
              })
            }
            max={600}
            min={30}
            getAriaValueText={(value) => `${value} seconds`}
            step={30}
            marks={secondsToMinutesMarks}
            valueLabelDisplay="auto"
          />
        </>
      ) : null}
      <Box sx={{ m: 3 }} />
    </Box>
  );
};
