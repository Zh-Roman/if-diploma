const useExecuteRef = (ref) =>
  ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });

export default useExecuteRef;
