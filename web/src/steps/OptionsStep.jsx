import { useSettingsContext } from "../SettingsContext.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined.js";
import Slider from "@mui/material/Slider";

export const OptionsStep = () => {
  const { settings, computed, setSettings } = useSettingsContext();
  const { shouldOptimizeAnyWarmupOrCooldown, shouldOptimizeAnything } =
    computed;

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
            checked={settings.steadyStateBlocks.active}
            onChange={(val) =>
              setSettings({
                ...settings,
                steadyStateBlocks: {
                  ...settings.steadyStateBlocks,
                  active: val.target.checked,
                },
              })
            }
          />
        }
        label="Optimize steady state blocks"
      />
      {settings.steadyStateBlocks.active ? (
        <>
          <Typography sx={{ fontSize: "small" }}>
            Min. duration before steady state blocks are optimized (minutes){" "}
            <Tooltip title="A steady state block must be this long or longer to be optimized. If it's shorter, it will remain as is.">
              <InfoOutlinedIcon />
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Min. duration before steady state blocks are optimized (minutes)"
            value={settings.steadyStateBlocks.minimumDurationInMinutes}
            onChange={(e) =>
              setSettings({
                ...settings,
                steadyStateBlocks: {
                  ...settings.steadyStateBlocks,
                  minimumDurationInMinutes: e.target.value,
                },
              })
            }
            marks
            max={10}
            min={1}
            getAriaValueText={(value) => `${value} min`}
            step={1}
            valueLabelDisplay="auto"
          />
        </>
      ) : null}
      <Box sx={{ m: 3 }} />
      <FormControlLabel
        control={
          <Checkbox
            inputProps={{ "aria-label": "controlled" }}
            checked={settings.warmupAndCooldownBlocks.warmupActive}
            onChange={(val) =>
              setSettings({
                ...settings,
                warmupAndCooldownBlocks: {
                  ...settings.warmupAndCooldownBlocks,
                  warmupActive: val.target.checked,
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
            checked={settings.warmupAndCooldownBlocks.cooldownActive}
            onChange={(val) =>
              setSettings({
                ...settings,
                warmupAndCooldownBlocks: {
                  ...settings.warmupAndCooldownBlocks,
                  cooldownActive: val.target.checked,
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
            Min. duration before warmup/cooldown blocks are optimized (minutes){" "}
            <Tooltip title="A warmup or cooldown block must be this long or longer to be optimized. If it's shorter, it will remain as is.">
              <InfoOutlinedIcon />
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Min. duration before warmup or cooldown blocks are optimized (minutes)"
            value={settings.warmupAndCooldownBlocks.minimumDurationInMinutes}
            onChange={(e) =>
              setSettings({
                ...settings,
                warmupAndCooldownBlocks: {
                  ...settings.warmupAndCooldownBlocks,
                  minimumDurationInMinutes: e.target.value,
                },
              })
            }
            marks
            max={10}
            min={1}
            getAriaValueText={(value) => `${value} min`}
            step={1}
            valueLabelDisplay="auto"
          />
        </>
      ) : null}
      <Box sx={{ m: 3 }} />
      {shouldOptimizeAnything ? (
        <>
          <Typography gutterBottom sx={{ fontSize: "small" }}>
            Desired total intervals block duration (seconds){" "}
            <Tooltip title="If possible, intervals blocks created by the optimization algorithm will be this long in total (on and off part of the interval). Currently not considered for optimizing warmup/cooldown!">
              <InfoOutlinedIcon />
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Desired total intervals block duration (seconds)"
            value={settings.intervalsBlockDurationInSeconds}
            onChange={(e) =>
              setSettings({
                ...settings,
                intervalsBlockDurationInSeconds: e.target.value,
              })
            }
            max={1200}
            min={30}
            getAriaValueText={(value) => `${value} seconds`}
            step={30}
            marks={[
              { value: 30, label: "0:30" },
              { value: 180, label: "3:00" },
              {
                value: 300,
                label: "5:00",
              },
              { value: 600, label: "10:00" },
              { value: 900, label: "15:00" },
              { value: 1200, label: "20:00" },
            ]}
            valueLabelDisplay="auto"
          />
        </>
      ) : null}
    </Box>
  );
};
