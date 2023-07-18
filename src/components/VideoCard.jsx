import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AnimatePresence, motion as m } from "framer-motion";

import VideoLength from "../shared/videoLength";

const VideoCard = ({ video }) => {
    return (
        <AnimatePresence>
            
        <Link to={`/video/${video?.videoId}`}>
            <m.div className="flex flex-col mb-8"  id="video"
            initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{duration:0.6, staggerChildren:0.4}} layout
            viewport={{once:false, amount:1}}
            >
                <m.div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden"
                >
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                        />
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                        )}
                </m.div>
                <m.div className="flex text-white mt-3"
                >
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={video?.author?.avatar[0]?.url}
                                />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm font-bold line-clamp-2">
                            {video?.title}
                        </span>
                        <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                    )}
                        </span>
                        <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                            <span>{`${abbreviateNumber(
                                video?.stats?.views,
                                2
                                )} views`}</span>
                            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                                .
                            </span>
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </m.div>
            </m.div>
        </Link>
                                </AnimatePresence>
    );
};

export default VideoCard;
