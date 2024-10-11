import Tooltip from "../../../../../../../partials/components/tooltip/Tooltip";
import textFormatter from "../../../../../../../utils/textFormatter";

const MainItem = ({ feat }) => {
  return (
    <div className="tooltip-container text-sm w-full text-slate track">
      <p className="text-nowrap">{textFormatter(feat.title)}</p>
      <Tooltip desc={feat.text} />
    </div>
  );
};

export default MainItem;
