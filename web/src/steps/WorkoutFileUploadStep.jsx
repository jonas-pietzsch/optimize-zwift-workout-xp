import { useSettingsContext } from "../SettingsContext.jsx";

export const WorkoutFileUploadStep = () => {
  const { settings, setSettings } = useSettingsContext();

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        {settings.selectedFiles.length ? (
          <p>
            <strong>
              You selected {settings.selectedFiles.length} .zwo files
            </strong>
            . If that's your final choice, hit the blue button – or refine your
            file selection until you're satisfied.
          </p>
        ) : (
          <p>
            Choose one or multiple Zwift workout files (.zwo) that you want to
            optimize at once. You can learn how to find your workout files using{" "}
            <a
              target="_blank"
              href="https://zwiftinsider.com/load-custom-workouts/#:~:text=Zwift%20workout%20files%20are%20saved,)%2C%20then%20start%20up%20Zwift."
            >
              this article on ZwiftInsider.com
            </a>
            .
          </p>
        )}
        <input
          accept=".zwo"
          multiple
          type="file"
          onChange={(e) =>
            setSettings({ ...settings, selectedFiles: e.target.files })
          }
        />
      </div>
    </>
  );
};
