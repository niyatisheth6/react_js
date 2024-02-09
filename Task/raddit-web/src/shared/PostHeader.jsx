import { ReactComponent as Hot } from "../assets/images/hot.svg";
import { ReactComponent as New } from "../assets/images/new.svg";
import { ReactComponent as Top } from "../assets/images/top.svg";
import { ReactComponent as Card } from "../assets/images/card.svg";
import { ReactComponent as Dot } from "../assets/images/dot.svg";
import { ReactComponent as DownArrow } from "../assets/images/downArrow.svg";
import DropDown from "./DropDown";

function PostHeader() {
  return (
    <div className="card flex justify-between items-center">
      <div className="flex gap-2">
        <DropDown image1={<Hot />} title1="Hot" />
        <div>
          <DropDown image1={<DownArrow />} title2="India" />
        </div>
        <DropDown image1={<New />} title1="New" />
        <DropDown image1={<Top />} title1="Top" />
        <DropDown image1={<Dot />} />
      </div>
      <div>
        <DropDown image1={<Card />} image2={<DownArrow />} />
      </div>
    </div>
  );
}

export default PostHeader;
