import { useEffect } from "react";
function Triangle() {
  useEffect(() => {
    // Force light mode styles
    const root = document.documentElement;
    root.style.setProperty("--triangle-bg-color", "#0A0217");
    root.style.setProperty("--triangle-border-color", "#FAFAFA");
    root.style.setProperty('--tw-border-opacity', '1');
    root.classList.remove("dark"); // Ensure dark class is removed
  }, []);
  return (
    <div className="flex no-dark-mode bg-DarkPurple">
      <div className=" bg-DarkPurple/100 w-0 h-0 border-r-[100vw] border-l-0 border-t-[20vh] border-b-0 border-r-[#FAFAFA]/100 border-t-[#0A0217]/100 triangle "></div>
    </div>
  );
}
export default Triangle;
