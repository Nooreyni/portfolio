import useScrollProgress from "../hooks/useScrollProgress";

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress * 100}%` }} />;
}

export default ScrollProgressBar;
