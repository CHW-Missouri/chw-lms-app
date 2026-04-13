export const shuffleArray = (array) =>
  [...array].sort(() => Math.random() - 0.5);

const createQuestion = (
  question,
  correct,
  incorrect,
  competency,
  explanation
) => ({
  question,
  options: shuffleArray([correct, ...incorrect]),
  answer: correct,
  competency,
  explanation,
});

export const backgroundContent = {
  addiction:
    "Missouri experiences high rates of opioid and methamphetamine use, particularly in rural counties with limited treatment access and transportation barriers. Urban regions such as St. Louis face concentrated overdose risk and fragmented behavioral health systems.",

  food:
    "Food deserts in Missouri are driven by rural grocery shortages, urban disinvestment, and transportation limitations, contributing to higher rates of diabetes, hypertension, and chronic disease.",
};

/* =========================
   ADDICTION (20 TOTAL)
========================= */

export const addictionModule = Array.from({ length: 10 }).map((_, i) =>
  createQuestion(
    `(${i + 1}) Standard Missouri addiction case: client needs CHW support.`,
    "Coordinate care navigation and connect to local support services",
    ["No action taken", "Provide pamphlet only", "Delay referral"],
    "Care Navigation",
    "CHWs must address system barriers, not just provide information."
  )
);

export const addictionComplexModule = Array.from({ length: 10 }).map((_, i) =>
  createQuestion(
    `(${i + 11}) Complex Missouri addiction case: multi-barrier client with housing, transport, and relapse risk.`,
    "Coordinate integrated MAT access, housing support, transportation, and behavioral health services",
    [
      "Single referral to clinic only",
      "General education only",
      "Wait until stability improves",
      "Self-directed recovery only",
    ],
    "Integrated Care Systems",
    "Complex cases require multi-sector coordination."
  )
);

/* =========================
   FOOD (20 TOTAL)
========================= */

export const foodModule = Array.from({ length: 10 }).map((_, i) =>
  createQuestion(
    `(${i + 1}) Standard Missouri food access case: limited grocery access.`,
    "Connect SNAP benefits and food access resources",
    ["No intervention", "Diet restriction only", "Generic advice only"],
    "Food Access",
    "Food insecurity requires structural intervention."
  )
);

export const foodComplexModule = Array.from({ length: 10 }).map((_, i) =>
  createQuestion(
    `(${i + 11}) Complex Missouri food desert case: rural/urban hybrid with chronic disease impact.`,
    "Coordinate SNAP optimization, mobile food delivery, transportation support, and nutrition planning",
    [
      "Diet pamphlets only",
      "No action required",
      "Self-planning only",
      "Generic nutrition advice only",
    ],
    "Food Systems",
    "Food access requires integrated structural solutions."
  )
);