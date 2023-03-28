import Box from "@mui/material/Box";
import { useSettingsContext } from "../SettingsContext.jsx";

export const SummaryStep = () => {
  const { settings, computed, setSettings } = useSettingsContext();

  return (
    <Box>
      <p>
        Are you ready to process your {settings.selectedFiles.length} workout
        files and download the optimized ones now?
        <br />
        You can still go through the options if you're unsure.
      </p>
    </Box>
  );
};
