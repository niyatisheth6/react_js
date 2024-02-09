import React from "react";
import { ReactComponent as Down } from "../assets/images/down.svg";
import { ReactComponent as Up } from "../assets/images/up.svg";
import { ReactComponent as Comment } from "../assets/images/comment.svg";
import { ReactComponent as ShareBtn } from "../assets/images/share.svg";
import { ReactComponent as Save } from "../assets/images/save.svg";
import { ReactComponent as Dot } from "../assets/images/dot.svg";
import PostShare from "./PostShare";
function PostContent({dataObj}) {
 const hours = Math.floor(( dataObj.data.created_utc / 1000 / 60 / 60) % 24);
  return (
    <div className="mt-2 card flex gap-2 p-0">
      <div className="bg-cultured p-3 flex flex-col gap-2 items-center">
        <button>
          {" "}
          <Up />
        </button>
        <span>877</span>
        <button>
          {" "}
          <Down />
        </button>
      </div>
      <div className="p-2 ">
        <span className="text-sm text-gray-500 inline-block">
          Posted by u/{dataObj.data.author} {hours} hours ago
        </span>
        <h3 className="text-[18px] leading-[22px] font-medium my-2">
         {dataObj.data.title}
        </h3>
        <p className="text-sm leading-[21px] overflow-auto mb-3">
         {dataObj.data.selftext}
        </p>
        <div className="flex gap-3">
          <PostShare num={dataObj.data.num_comments} title="Comment" img={<Comment />} />
          <PostShare title="Share" img={<ShareBtn />} />
          <PostShare title="Save" img={<Save />} />
          <PostShare img={<Dot />} />
        </div>
      </div>
    </div>
  );
}

export default PostContent;
