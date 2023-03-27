import { useState } from "react";
import "./App.css";
import { ZwiftWorkoutParser } from "../../library/ZwiftWorkoutParser.js";
import { download } from "./downloadFile.js";

function App() {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const optimize = async () => {
    for (const file of selectedFiles) {
      const workoutFileContent = await file.text();
      const workout =
        ZwiftWorkoutParser.parseZwiftWorkoutFile(workoutFileContent);
      workout.optimize({
        minimumDuration: 60,
        intervalsDuration: 30,
        recoveryIntervalDuration: 60,
      });
      const optimizedWorkoutFileContent =
        ZwiftWorkoutParser.assembleZwiftWorkoutFile(workout);
      download(
        file.name.replace(".zwo", "-optimized.zwo"),
        optimizedWorkoutFileContent
      );
    }
  };

  return (
    <div className="App">
      <h1>Optimize Zwift workouts for maximum XP</h1>
      <p>
        Chose one or multiple .zwo files, click the button and get the optimized
        workout file(s) as download!
        <br />
        Names of optimized file names are suffixed with ' (optimized)' so you
        can distinguish between original and optimized within Zwift.
      </p>
      <div className="card">
        <div style={{ marginBottom: 20 }}>
          <input
            accept=".zwo"
            multiple
            type="file"
            onChange={(e) => setSelectedFiles(e.target.files)}
          />
        </div>
        <div>
          <button disabled={!selectedFiles} onClick={optimize}>
            Optimize {(selectedFiles || []).length} workouts now
          </button>
        </div>
      </div>
      <p>
        <small>
          PS: This is happening all on your client in the browser, no
          server-side involved. This application is not interested in your
          workouts :-)
        </small>
      </p>
    </div>
  );
}

export default App;
