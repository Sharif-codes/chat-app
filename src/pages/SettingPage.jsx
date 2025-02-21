import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const PREVIEW_MESSAGE= [
    {id: 1, content: "Hey How's it going?", isSent: false},
    {id: 2, content: "I'm doing great just working on some new feature", isSent: true}
]
const SettingPage = () => {
    const {theme, setTheme}= useThemeStore()
    return (
        <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
           <div className="space-y-6">
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold">Theme</h2>
                <p className="text-sm text-base-content/70">Choose a theme for your interface</p>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {THEMES.map()}
            </div>
           </div>
        </div>
    );
};

export default SettingPage;