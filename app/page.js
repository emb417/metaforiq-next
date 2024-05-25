import React from 'react';
import MessagesToCanvas from '@/components/MessagesToCanvas';
import ForceRainOnCanvas from '@/components/ForceRainOnCanvas';

export const metadata = {
  title: 'Home',
}

const welcomeMessages = [
  "welcome to metaforiq",
  "a collection of wise and thought provoking quotes",
  "a personal portfolio of projects"
];

const inspirationalMessages = [ // from:sw:tcw
  "great leaders inspire greatness in others",
  "great leaders inspire greatness in others",
  "belief is not a matter of choice, but of conviction",
  "easy is the path to wisdom for those not blinded by ego",
  "a plan is only as good as those who see it through",
  "the best confidence builder is experience",
  "trust in your friends, and they’ll have reason to trust in you",
  "you hold onto friends by keeping your heart a little softer than your head",
  "heroes are made by the times",
  "fail with honor rather than succeed by fraud",
  "greed and fear of loss are the roots that lead to the tree of evil",
  "arrogance diminishes wisdom",
  "truth enlightens the mind, but won’t always bring happiness to your heart",
  "fear is a disease; hope is its only cure",
  "it is a rough road that leads to the heights of greatness",
  "compromise is a virtue to be cultivated, not a weakness to be despised",
  "a secret shared is a trust formed",
  "a lesson learned is a lesson earned",
  "overconfidence is the most dangerous form of carelessness",
  "the first step to correcting a mistake is patience",
  "a true heart should never be doubted",
  "believe in yourself or no one else will",
  "no gift is more precious than trust",
  "sometimes, accepting help is harder than offering it",
  "attachment is not compassion",
  "it is the quest for honor that makes one honorable",
  "if you ignore the past, you jeopardize the future",
  "a wise leader knows when to follow",
  "where there’s a will, there’s a way",
  "the challenge of hope is to overcome corruption",
  "those who enforce the law must obey the law",
  "the future has many paths, choose wisely",
  "a failure in planning is a plan for failure",
  "he who seeks to control fate shall never find peace",
  "adaptation is the key to survival",
  "anything that can go wrong will",
  "without honor, victory is hollow",
  "without humility, courage is a dangerous game",
  "a great student is what the teacher hopes to be",
  "when destiny calls, the chosen have no choice",
  "who a person truly is cannot be seen with the eye",
  "understanding is honoring the truth beneath the surface",
  "who’s the more foolish, the fool or the fool who follows him?",
  "the first step towards loyalty is trust",
  "the path of ignorance is guided by fear",
  "the wise man leads, the strong man follows",
  "our actions define our legacy",
  "where we are going always reflects where we came from",
  "keep your friends close, but keep your enemies closer",
  "trust is the greatest of gifts, but it must be earned",
  "who we are never changes, who we think we are does",
  "to seek something is to believe in its possibility",
  "struggles often begin and end with the truth",
  "disobedience is a demand for change",
  "when we rescue others, we rescue ourselves",
  "choose your enemies wisely, as they may be your last hope",
  "humility is the only defense against humiliation",
  "you must trust in others or success is impossible",
  "one vision can have many interpretations",
  "courage begins by trusting oneself",
  "never become desperate enough to trust the untrustworthy",
  "never give up hope, no matter how dark things seem",
  "the truth about yourself is always the hardest to accept",
  "the wise benefit from a second opinion",
  "when in doubt, go to the source",
  "the popular belief isn’t always the correct one",
  "to love, is to trust. to trust is to believe",
  "jealousy is the path to chaos",
  "facing all that you fear will free you from yourself",
];

const HomePage = () => {
  return (
    <div>
      <MessagesToCanvas
        id="welcome"
        bgColor="transparent"
        canvasMaxHeight={100}
        fontSize={20}
        messages={welcomeMessages}
        messageInterval={12000}
        x={50}
        y={30}
        zIndex={20}
      />
      <MessagesToCanvas
        id="main"
        bgColor="transparent"
        fontSize={36}
        messages={inspirationalMessages}
        zIndex={10}
      />
      <ForceRainOnCanvas />
    </div>
  );
};

export default HomePage;