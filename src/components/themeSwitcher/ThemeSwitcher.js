import "./ThemeSwitcher.css";
import { themes } from "../../theme";
import { useThemeSwitcher } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
  const { themeName, setThemeName } = useThemeSwitcher();

  return (
    <div className="theme-switcher">
      {themes.map((t) => (
        <button
          key={t.name}
          type="button"
          aria-label={`Switch to ${t.label} theme`}
          aria-pressed={t.name === themeName}
          className={
            "theme-swatch" +
            (t.name === themeName ? " theme-swatch-active" : "")
          }
          style={{ backgroundColor: t.value.splashBg }}
          onClick={() => setThemeName(t.name)}
        />
      ))}
    </div>
  );
}
