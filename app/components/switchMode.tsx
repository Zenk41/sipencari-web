import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "@/lib/slices/uiSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { Switch } from "@headlessui/react";

const SwitchMode = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={darkMode}
          onChange={() => dispatch(toggleMode())}
          className={`${
            darkMode ? "bg-black" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`}
        >
          {darkMode ? (
            <MdDarkMode
              className={`${
                darkMode ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          ) : (
            <CiLight
              className={`${
                darkMode ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          )}
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default SwitchMode;
