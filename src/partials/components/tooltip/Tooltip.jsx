import "./tooltip.css";
const Tooltip = ({ desc, style }) => {
  return (
    <div
      style={style || {}}
      dangerouslySetInnerHTML={{ __html: desc }}
      className="p-2 shadow-[0_0_20px_rgba(0,0,0,0.1)] tooltip text-slate break-words"
    ></div>
  );
};

export default Tooltip;
