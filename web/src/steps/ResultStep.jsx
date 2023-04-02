import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSettingsContext } from "../SettingsContext.jsx";

export const ResultStep = ({ onButtonPress }) => {
  const { settings } = useSettingsContext();
  return (
    <>
      <Typography typography={{ fontWeight: "bold" }}>Finished!</Typography>

      <Typography sx={{ mb: 3 }}>
        The optimized file(s) have been downloaded to your computer. You just
        have to move them into your Zwift custom workouts folder and start
        training.
      </Typography>

      <Typography typography={{ fontWeight: "bold" }} sx={{ mb: 3 }}>
        Here is the optimizations results of your file(s):
      </Typography>

      {settings.results.length ? (
        <OptimizationResultsTables results={settings.results} />
      ) : null}

      <Typography sx={{ mb: 3 }}>Have fun and happy leveling!</Typography>

      <Button variant="contained" onClick={onButtonPress}>
        Start again
      </Button>
    </>
  );
};

const OptimizationResultsTables = ({ results }) => {
  return results.map(({ statistics, optimizationResults, name }) => (
    <TableContainer component={Paper} sx={{ mb: 3 }}>
      <Table size="small" aria-label="Optimization statistics">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={4}>
              {name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Blocks</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">XP</TableCell>
            {/*<TableCell align="right">Improvement</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Warmup
            </TableCell>
            <TableCell align="right">
              {optimizationResults.warmupToIntervals.minutes} min
            </TableCell>
            <TableCell align="right">
              {optimizationResults.warmupToIntervals.xp} XP
            </TableCell>
            {/*<TableCell align="right">*/}
            {/*  {optimizationResults.cooldownOrWarmupToIntervals.xp} XP*/}
            {/*</TableCell>*/}
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Cooldown
            </TableCell>
            <TableCell align="right">
              {optimizationResults.cooldownToIntervals.minutes} min
            </TableCell>
            <TableCell align="right">
              {optimizationResults.cooldownToIntervals.xp} XP
            </TableCell>
            {/*<TableCell align="right">*/}
            {/*  {optimizationResults.cooldownOrWarmupToIntervals.xp} XP*/}
            {/*</TableCell>*/}
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Steady State
            </TableCell>
            <TableCell align="right">
              {optimizationResults.steadyStateToIntervals.minutes} min
            </TableCell>
            <TableCell align="right">
              {optimizationResults.steadyStateToIntervals.xp} XP
            </TableCell>
            {/*<TableCell align="right">%</TableCell>*/}
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <strong>Total</strong>
            </TableCell>
            <TableCell align="right">
              <strong>{optimizationResults.totalMinutes} min</strong>
            </TableCell>
            <TableCell align="right">
              <strong>{optimizationResults.totalXp} XP</strong>
            </TableCell>
            {/*<TableCell align="right">%</TableCell>*/}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ));
};
