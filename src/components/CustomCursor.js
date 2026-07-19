import useCustomCursor from "../hooks/useCustomCursor";

function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor();
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

export default CustomCursor;
