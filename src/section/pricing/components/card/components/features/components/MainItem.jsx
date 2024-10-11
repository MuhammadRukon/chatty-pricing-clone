import Tooltip from "../../../../../../../partials/components/tooltip/Tooltip";
import textFormatter from "../../../../../../../utils/textFormatter";

const MainItem = ({ feat }) => {
  return (
    <div className="tooltip-container text-sm w-full text-slate track">
      {textFormatter(feat.title)}
      <Tooltip desc={feat.text} />
    </div>
  );
};

export default MainItem;
