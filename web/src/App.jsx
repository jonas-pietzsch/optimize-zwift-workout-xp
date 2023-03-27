import { useState } from "react";
import "./App.css";
import { ZwiftWorkoutParser } from "../../library/ZwiftWorkoutParser.js";
import { download } from "./downloadFile.js";

function App() {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const optimize = async () => {
    const workoutFileContent = await selectedFile.text();
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
      selectedFile.name.replace(".zwo", "-optimized.zwo"),
      optimizedWorkoutFileContent
    );
  };

  return (
    <div className="App">
      <h1>Optimize Zwift workouts for maximum XP</h1>
      <p>
        Chose a .zwo file, click the button and get the optimized workout file
        as download!
        <br />
        The name of the optimized .zwo file is suffixed with ' (optimized)' so
        you can distinguish between original and optimized.
      </p>
      <div className="card">
        <div style={{ marginBottom: 20 }}>
          <input
            accept=".zwo"
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
        <div>
          <button disabled={!selectedFile} onClick={optimize}>
            Optimize now
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
