"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ProductLoop.module.css";

const steps = [
  {
    title: "Discover",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    ),
    desc: "High-leverage opportunities are identified through customer discovery, stakeholder alignment, and the synthesis of empirical evidence. This phase focuses on isolating critical variables and validating the core vision through hypothesis testing before significant capital is committed.",
    details: (
      <div className={styles.detailContent}>
        <h3>Write the Brief</h3>
        <p>
          Before anything gets built, the problem needs to be understood well
          enough to write down clearly. That means capturing not just what a
          user is trying to accomplish, but the tradeoffs they're willing to
          make, the alternatives they're currently using instead, and what's
          actually stopping them from getting the outcome they want.
        </p>
        <p>
          The brief is that write-up. It turns a messy, half-understood problem
          into something the team can build against, and becomes the reference
          point to return to when scope starts to drift.
        </p>
        <h3>What Discovery Should Answer</h3>
        <ul>
          <li>What's the current state, and where is it falling short</li>
          <li>Where are users or systems hitting friction</li>
          <li>
            What are people explicitly asking for, without assuming the fix
          </li>
          <li>Who's affected, and how concerned are they</li>
          <li>What outcome would confirm this actually got solved</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    desc: "This phase ensures strategic intent is translated into a defined solution through cross-functional shaping and outcome-based metrics. By optimizing for user viability, technical feasibility, and business alignment, the product is structured to solve core needs while remaining technically sound and commercially sustainable.",
    details: (
      <div className={styles.detailContent}>
        <h3>Shape the Solution as a Team</h3>
        <ul>
          <li>
            Bring the team in early to weigh solution options, not just execute
            one
          </li>
          <li>
            Set a clear vision and a shared definition of what success looks
            like
          </li>
          <li>Define outcomes in both qualitative and quantitative terms</li>
          <li>Anchor decisions to measurable business and user impact</li>
          <li>Rough out effort and timing to sequence realistically</li>
          <li>Treat milestone and task estimates as inputs, not commitments</li>
        </ul>
        <h3>Plan in Small Bets</h3>
        <p>
          Break the plan into pieces small enough to test independently. Each
          one should target a single outcome, for a single persona, through a
          single feature. Trying to validate more than one variable at a time
          makes it nearly impossible to know what actually moved the needle.
        </p>
      </div>
    ),
  },
  {
    title: "Deliver",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    desc: "Execution is focused on high-integrity delivery and the rapid deployment of incremental value. The primary focus is maintaining the strategic intent of the solution throughout the build cycle, leveraging incremental improvements to accelerate time-to-learning and gather empirical feedback.",
    details: (
      <div className={styles.detailContent}>
        <h3>Direct the Work</h3>
        <p>
          Everyone moves from executing the work to directing and judging what
          comes back. What gets handed to an agent is a goal and its guardrails,
          instead of step by step instructions. Some guardrails are perpetual,
          encoded once into the skills and instructions an agent works from.
          Others only make sense in the moment, applied during review when a
          specific case calls for a bespoke judgment.
        </p>
        <ul>
          <li>
            Write goals an agent can act on without checking in constantly
          </li>
          <li>
            Separate guardrails that apply across tasks from ones that only make
            sense in context
          </li>
          <li>
            Let agents generate more than one direction where the cost of
            divergence is low
          </li>
          <li>
            Save the knowledge and its guardrails to the second brain, so agents
            and people draw from the same source
          </li>
        </ul>
        <h3>Diverge, Then Converge</h3>
        <p>
          Cheap execution means more directions can be explored before
          committing to one. Real alternatives surface first, then converge on
          the version that holds up best once insight, intuition, and taste are
          applied.
        </p>
        <h3>Coordinate Through Review</h3>
        <p>
          Agents flag a guardrail the moment they hit one. Coordination happens
          as ongoing review: what did the work produce, where did it hit a
          guardrail, and what needs a human's judgment before it moves forward.
          Scheduled check-ins remain the place for decisions people work through
          together.
        </p>
        <ul>
          <li>
            Track how much is awaiting review alongside how much is being built
          </li>
          <li>
            Cap what's in flight based on how much can be reviewed with real
            attention
          </li>
          <li>
            Let the second brain carry the shared context agents and people both
            draw from and add to
          </li>
          <li>
            Revisit guardrails and instructions regularly, the same way process
            gets revisited today
          </li>
        </ul>
        <h3>The Time Shift Is the Win</h3>
        <p>
          Review volume may grow as execution gets cheaper. Time that was spent
          writing and building shifts to reading and judging, where quality
          actually comes from. Even without a net reduction in hours, that shift
          alone is the improvement.
        </p>
      </div>
    ),
  },
  {
    title: "Operate",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18"></path>
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
      </svg>
    ),
    desc: "The loop is completed by evaluating how the product performs in a real-world environment. By synthesizing quantitative usage data with qualitative insights from surveys and interviews, the actual user experience is measured against the initial hypothesis to calibrate the next sequence of strategic product bets.",
    details: (
      <div className={styles.detailContent}>
        <h3>Check the Data Against Reality</h3>
        <p>
          Usage numbers show what happened; interviews and surveys explain why.
          Both should be weighed together before drawing conclusions about what
          to prioritize next.
        </p>
        <h3>Close the Loop</h3>
        <p>
          Operational signals like error rates, churn, adoption should feed
          directly back into the discovery backlog, not sit in a dashboard no
          one revisits.
        </p>
        <h3>Validate the Outcome</h3>
        <p>
          The real test isn't whether the feature shipped,it's whether user
          behavior actually changed the way the original hypothesis predicted.
        </p>
        <h3>Shift From Learning to Scaling</h3>
        <p>
          Once something's validated, the focus moves from proving it works to
          making it efficient to run at scale.
        </p>
      </div>
    ),
  },
];

export default function ProductLoop() {
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (activeStep === null) return;

    const timer = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeStep]);

  const handleBack = () => {
    setActiveStep(null);
  };

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        {activeStep === null ? (
          <div className={styles.fadeIn}>
            <h2 className={styles.title}>The Product Loop</h2>
            <div className={styles.subtitle}>
              A cycle of perpetual validation of customer value driving business
              outcomes by strengthening product-market fit through purposeful
              iteration.
            </div>
            <div className={styles.grid}>
              {steps.map((step, index) => (
                <button
                  key={index}
                  type="button"
                  className={styles.stepButton}
                  onClick={() => {
                    setActiveStep(index);
                  }}
                >
                  <div className={styles.stepHeader}>
                    <div className={styles.iconWrapper}>{step.icon}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={`${styles.detailView} ${styles.fadeIn}`}>
            <button className={styles.backButton} onClick={handleBack}>
              ← Back to Loop
            </button>
            <div className={styles.detailHeader}>
              <div className={styles.iconWrapper}>{steps[activeStep].icon}</div>
              <h2 className={styles.detailTitle}>{steps[activeStep].title}</h2>
            </div>
            {steps[activeStep].details}
            <button
              className={`${styles.backButton} ${styles.bottomBackButton}`}
              onClick={handleBack}
            >
              ← Back to Loop
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
