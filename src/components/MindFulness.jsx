import React from "react";
import MindFulnessCard from "./MindFulnessCard";
import { TbBrandSupabase } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";

const MindFulness = () => {
  return (
    <div className="py-10 max-w-6xl mx-auto space-y-5">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#000] text-center max-w-3xl mx-auto">
          Mindfulness Practices
        </h1>
        <p className="text-[16px] text-gray-500 text-center max-w-[85%] mx-auto">
          Simple techniques to cultivate present-moment awareness and inner
          peace
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <MindFulnessCard
          icon={FaRegBell}
          title="Mindful Breathing"
          text="The simplest form of meditation. Focus your attention on your breath—the
        inhale and exhale—without trying to control it."
          olTitle="Practice: Box Breathing"
          li_1="Inhale for 4 counts"
          li_2="Hold for 4 counts"
          li_3="Exhale for 4 counts"
          li_4="Hold for 4 counts"
          li_5="Repeat for 2-5 minutes"
        />
        <MindFulnessCard
          icon={TbBrandSupabase}
          title="Body Scan"
          text="Systematically bring attention to different parts of your
body, noticing sensations without judgment. Helps release
tension and increase body awareness."
          olTitle="Practice: Mini Body Scan"
          li_1="Start at your feet and move upward"
          li_2="Notice sensations in each body part"
          li_3="Breathe into areas of tension"
          li_4="Continue to your head"
          li_5="End with awareness of your whole body"
        />
        <MindFulnessCard
          icon={FiHeadphones}
          title="Mindful Listening"
          text="Fully focus on sounds around you or in music without
labeling or judging. Enhances present-moment awareness
and reduces mental chatter."
          olTitle="Practice: Sound Awareness"
          li_1="Close your eyes or soften your gaze"
          li_2="Notice the most prominent sounds"
          li_3="Expand awareness to subtle sounds"
          li_4="Notice the quality of each sound"
          li_5="Return to sounds when mind wanders"
        />
      </div>
    </div>
  );
};

export default MindFulness;
