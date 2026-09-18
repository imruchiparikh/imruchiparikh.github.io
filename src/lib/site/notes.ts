export type NoteSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  placeholder?: boolean;
};

export type NoteSource = {
  label: string;
  detail?: string;
  url?: string;
};

export type Note = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  kind: "source" | "original" | "book" | "podcast" | "qa" | "program" | "link";
  kindLabel: string;
  tag: NoteTag;
  date: string;
  readTime: string;
  draft?: boolean;
  featured?: boolean;
  linkTo?: string;
  source?: NoteSource;
  sections: NoteSection[];
};

export type NoteTag = "Product Management" | "AI/ML" | "QA" | "Book" | "Product Teardown";

export const notes: Note[] = [
  {
    slug: "dont-copy-the-feature",
    number: "01",
    title: "Don't Copy the Feature. Understand the Mechanism.",
    subtitle:
      "What the Duolingo growth story changed about how I think about product ideas.",
    kind: "source",
    kindLabel: "Inspired by a newsletter essay",
    tag: "Product Management",
    date: "Jun 18, 2025",
    readTime: "8 min read",
    featured: true,
    source: {
      label: "Jorge Mazal — “How Duolingo reignited user growth”",
      detail: "Lenny's Newsletter",
      url: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
    },
    sections: [
      {
        heading: "What caught my attention",
        paragraphs: [
          "Not the streaks. The part before the streaks.",
          "In the Duolingo story, the team borrowed ideas from other products, watched most of them fail, and — this is the part that stuck with me — went back and asked why they failed. Over time they stopped treating “it worked for them” as evidence, and started studying the mechanism underneath: what behavior the feature depends on, whether their product already had that behavior, and what the feature was actually rewarding.",
          "The streak didn't come from copying a streak. It came from understanding that Duolingo had millions of people with a daily habit worth protecting, and building something that made that habit visible and harder to abandon.",
        ],
      },
      {
        heading: "What I took away",
        paragraphs: [
          "A feature is not a strategy. The visible artifact — a leaderboard, a streak flame, a badge — is the least interesting part of the idea. What transfers (when anything does) is the mechanism: the motivation it taps, the cadence it fits, the fear of loss it creates, and the context that makes all of that true.",
          "So the question I'd ask about any successful feature isn't “could we build that?” It's “what conditions make this work — and do we have them?”",
        ],
      },
      {
        heading: "Where I think people get this wrong",
        paragraphs: [
          "You can follow the checklist and still miss the point. “Duolingo has streaks, we should have streaks” skips every question that made the streak work in the first place.",
          "The failure mode is copying the artifact while ignoring the conditions underneath it. There's a sneakier version too: copying the feature before understanding which problem it solved for the original product. If you don't know what it was fixing, you can't tell whether it's working here — you'll just ship it, watch a dashboard, and eventually quietly delete it.",
        ],
      },
      {
        heading: "A fictional example",
        paragraphs: [
          "Imagine a meditation app borrowing Duolingo's leaderboard. Sessions there are long, private, and irregular on purpose — people meditate partly to get away from comparison. A leaderboard adds social pressure to a product whose whole value is the absence of pressure. The mechanics transfer; the context doesn't.",
          "Now imagine the same team asking the mechanism question instead: what's our version of “showing up daily”? Maybe it's a gentle “you've meditated 4 of the last 7 days” signal. Same underlying mechanism — making consistency visible — but shaped for a context where the win is calm, not competition.",
        ],
      },
      {
        heading: "What I would ask before copying a feature",
        list: [
          "What behavior is this feature actually rewarding?",
          "Does our product already have that behavior, or would the feature have to create it?",
          "What did the original team believe about their users that made this work?",
          "What did they try and discard before landing on this? (Often the most useful part of the story.)",
          "If it fails here, will we know why — or will we just remove it and move on?",
        ],
      },
      {
        heading: "What I would measure",
        list: [
          "Behavior change, not just activity — sessions started vs. sessions that matter.",
          "Retention of the cohort that touches the feature vs. a matched cohort that doesn't.",
          "Whether it cannibalizes an existing loop that was already working.",
          "Early signals the feature is attracting the wrong behavior — people gaming it, or showing up for the reward and not the product.",
        ],
      },
      {
        heading: "Why this is the first note here",
        paragraphs: [
          "I keep coming back to this idea because it's less about growth tactics and more about intellectual honesty: “it worked for them” is the beginning of a question, not the end of an argument.",
        ],
      },
    ],
  },
  {
    slug: "feature-request-is-not-the-problem",
    number: "02",
    title: "A Feature Request Is Not Always the Problem",
    subtitle:
      "The request is usually a solution someone already imagined. The problem is one level down.",
    kind: "original",
    kindLabel: "Original thinking",
    tag: "Product Management",
    date: "Jul 10, 2025",
    readTime: "5 min read",
    sections: [
      {
        heading: "The trap",
        paragraphs: [
          "Someone asks for an export button. It's tempting to file it, size it, ship it. But “export to Excel” is rarely the problem — the problem is whatever they do with the export afterwards: hand a report to a manager, reconcile two systems, keep a backup because they don't quite trust the tool.",
          "Solve the actual job and the request either gets smaller or disappears entirely. That's the difference between a backlog that grows forever and one that actually shrinks.",
        ],
      },
      {
        heading: "What I'd ask instead",
        list: [
          "What are you trying to get done when you reach for this?",
          "What do you do today, step by step?",
          "If this existed tomorrow, what would change about your week?",
          "What have you already tried or worked around?",
        ],
      },
      {
        heading: "The uncomfortable version",
        paragraphs: [
          "Sometimes the honest answer to “what would you do with it?” is “nothing, it just feels like it should be there.” That's useful information too — it usually means the request is really about confidence or reassurance, and there may be a much cheaper way to provide that.",
        ],
      },
      {
        heading: "Where this comes from",
        paragraphs: [
          "Years of reading bug reports trained me to assume the reported symptom is not the defect. Feature requests work the same way — the request is the symptom. “Reproduction steps before the fix” is a habit I don't plan to give up.",
        ],
      },
    ],
  },
  {
    slug: "what-makes-an-ai-feature-useful",
    number: "03",
    title: "What Makes an AI Feature Actually Useful?",
    subtitle:
      "A demo impresses in thirty seconds. A feature has to survive week three.",
    kind: "original",
    kindLabel: "Original thinking",
    tag: "AI/ML",
    date: "Aug 7, 2025",
    readTime: "7 min read",
    sections: [
      {
        heading: "The bar I keep coming back to",
        paragraphs: [
          "An AI feature is useful when it does one of two things: removes real drudgery, or makes a judgment call the user couldn't easily make themselves — and does it at a quality level you'd accept from a slightly distracted human.",
          "Everything else is a demo. Demos are fun, but they get replayed, not used.",
        ],
      },
      {
        heading: "Where I've seen this play out",
        paragraphs: [
          "In the AI and RAG-adjacent work I've been close to, the gap between a convincing demo and a trustworthy feature was almost never the model. It was the edges: what happens when the source data is stale, when the honest answer is “I don't know,” when two documents disagree.",
          "Products that handle those edges feel reliable. Products that don't feel like roulette — and people can tell the difference surprisingly fast, even if they can't articulate why.",
        ],
      },
      {
        heading: "Questions I'd ask before shipping one",
        list: [
          "What does the user do today when this feature is wrong?",
          "Is being wrong cheap to undo, or expensive?",
          "Would the user notice the difference between this and a simpler, dumber rule?",
          "What's the cost of a wrong answer versus the cost of no answer?",
        ],
      },
      {
        heading: "A rough heuristic",
        paragraphs: [
          "If you took the AI out and left a template, would anyone complain? If not, the AI is decoration — and decoration is fine, as long as you're honest with yourself about what you're building.",
        ],
      },
    ],
  },
  {
    slug: "the-metric-you-choose",
    number: "04",
    title: "The Metric You Choose Changes What You Build",
    subtitle: "Metrics aren't measurement so much as a bet on what matters.",
    kind: "original",
    kindLabel: "Original thinking",
    tag: "Product Management",
    date: "Sep 4, 2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "The metric is an instruction",
        paragraphs: [
          "Choose “time in app” and you'll build things that hold attention. Choose “time to first success” and you'll build things that get people out of the app faster. Same product, same team, opposite roadmaps.",
          "That's why I've stopped thinking of metrics as passive readouts. The moment you put a number on a wall, it becomes an instruction — whether you meant it that way or not.",
        ],
      },
      {
        heading: "The shadow every metric casts",
        paragraphs: [
          "Every metric gets optimized past the point where it means what it meant. The tell is the moment the number improves while the experience gets worse. That's not a data problem — it's a definition problem, and it usually means the metric quietly became the goal instead of the proxy.",
        ],
      },
      {
        heading: "What I'd do before committing",
        paragraphs: [
          "Before settling on a metric, I'd write down what behavior it's supposed to encourage and what behavior it might accidentally punish. If I can't name the distortion, I don't understand the metric yet.",
        ],
      },
      {
        heading: "From testing",
        paragraphs: [
          "In performance testing, the number you optimize — p95 latency, throughput, cost per request — changes what “good” architecture even is. I suspect product metrics work exactly the same way.",
        ],
      },
    ],
  },
  {
    slug: "what-testing-taught-me",
    number: "05",
    title: "What Testing Software Taught Me About Testing Ideas",
    subtitle:
      "Six years in quality engineering turned out to be product training in disguise.",
    kind: "qa",
    kindLabel: "From my QA background",
    tag: "QA",
    date: "Oct 16, 2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "Assume the happy path is a lie",
        paragraphs: [
          "The core skill of QA isn't finding bugs — it's assuming the happy path is a lie. You learn to ask what happens with an empty cart, a double click, a network blip mid-save.",
          "Translated to product: what happens to this plan when the user is tired, in a hurry, or on a cheap phone at 11pm? Most product ideas are tested in the mental equivalent of a clean lab. Real usage is a field test.",
        ],
      },
      {
        heading: "Reproduce before you fix",
        paragraphs: [
          "In software, a fix without a reproduction is a guess wearing confidence. I'd treat product hypotheses the same way: state the assumption, make it observable, then act on it. “We think users want X” is not a reproduction — “we watched five users do Y instead of X” is getting closer.",
        ],
      },
      {
        heading: "Validate the signal first",
        paragraphs: [
          "Data validation instincts carry over directly. Before trusting a dashboard, check whether the anomaly is a tracking bug or a real behavior change — in my experience, a good share of “weird metric spikes” turn out to be pipeline problems, not user problems.",
          "I suspect the same discipline applies to research: verify the signal before acting on it. An enthusiastic quote from one user is not a market.",
        ],
      },
      {
        heading: "What I want to be clear about",
        paragraphs: [
          "I'm not trying to be “the QA person on a product team.” I want to be a product thinker who happens to be unusually hard to fool.",
        ],
      },
    ],
  },
  {
    slug: "the-mom-test",
    number: "06",
    title: "The Mom Test Ruined Small Talk for Me",
    subtitle: "In a good way. Compliments are data about manners, not about demand.",
    kind: "book",
    kindLabel: "From a book",
    tag: "Book",
    date: "Nov 20, 2025",
    readTime: "5 min read",
    source: {
      label: "The Mom Test",
      detail: "Rob Fitzpatrick",
      url: "https://www.momtestbook.com/",
    },
    sections: [
      {
        heading: "What the book is about, briefly",
        paragraphs: [
          "The core idea is almost embarrassingly simple: people — including people who love you — will protect your feelings about your idea. So don't ask what they think of it. Ask about their life.",
        ],
      },
      {
        heading: "What I took away",
        paragraphs: [
          "“That sounds cool!” carries almost no information. “Ugh, I spent three hours fighting that last week” is worth a hundred polite nods.",
          "The book moved my default question from “would you use this?” to “how did you handle this last time?” Past behavior, specific and dated, beats prediction every time — and it's much harder to say politely.",
        ],
      },
      {
        heading: "Where I might get it wrong",
        paragraphs: [
          "I could turn every conversation into an interrogation. The book warns against pitching, but there's a difference between a conversation and a survey with feelings. I'd want to keep some warmth in it — people share specifics with people they trust, not with intake forms.",
        ],
      },
      {
        heading: "How I'd apply it",
        paragraphs: [
          "Before building anything — even a small internal tool — collect specific past behavior, not future promises. If nobody has ever hacked together a workaround, that's an answer too, and it's probably “no.”",
        ],
      },
    ],
  },
  {
    slug: "smart-brevity",
    number: "07",
    title: "Smart Brevity, and Why I'm Skeptical of My Own Long Paragraphs",
    subtitle: "Structure beats prose. Front-load the point so readers can leave when they've got it.",
    kind: "book",
    kindLabel: "From a book",
    tag: "Book",
    date: "Jan 15, 2026",
    readTime: "4 min read",
    source: {
      label: "Smart Brevity",
      detail: "Jim VandeHei, Mike Allen, Roy Schwartz",
      url: "https://www.smartbrief.com/original/smart-brevity-book",
    },
    sections: [
      {
        heading: "The argument, compressed",
        paragraphs: [
          "The book's case: attention is the scarcest resource, so respect it structurally — headline first, one strong lede, then “go deeper” for the few who want more. Most writing buries the point and hopes the reader digs.",
          "As someone who writes long paragraphs, I felt seen. Not flattered — seen.",
        ],
      },
      {
        heading: "My interpretation",
        paragraphs: [
          "This isn't really about writing less. It's about respect for the reader's time: give the point up front so people can leave the moment they've got it. Length that earns its place is fine; length that delays the point is decoration.",
        ],
      },
      {
        heading: "Where it applies to product work",
        paragraphs: [
          "Specs, update emails, release notes, prioritization docs. If the first sentence doesn't carry the decision, the document is mostly decoration with a header on it.",
        ],
      },
      {
        heading: "Full disclosure",
        paragraphs: [
          "You'll notice I'm trying to practice this on this site. With mixed success.",
        ],
      },
    ],
  },
  {
    slug: "just-ask-users",
    number: "08",
    title: "“Just Ask Users” Is Harder Than It Sounds",
    subtitle:
      "The most repeated advice in product is also the most mangled in practice.",
    kind: "podcast",
    kindLabel: "Inspired by a podcast",
    tag: "Product Management",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    source: {
      label: "Recurring theme on Lenny's Podcast",
      detail: "and pretty much anywhere product people talk",
      url: "https://www.lennyspodcast.com/",
    },
    sections: [
      {
        heading: "The advice, and how it gets mangled",
        paragraphs: [
          "“Talk to users” is the most repeated advice in product — and the most mangled in practice. People don't remember their own behavior. They rationalize. They perform a little. They tell you what would make them look reasonable.",
        ],
      },
      {
        heading: "My interpretation",
        paragraphs: [
          "The advice is right but incomplete. The craft isn't in talking to users — it's in asking about the past instead of the future, watching behavior when you can, and treating enthusiasm with friendly suspicion.",
        ],
      },
      {
        heading: "A test I'd use",
        paragraphs: [
          "If a conversation would produce the same answers for a competitor's product, it wasn't really about your product.",
        ],
      },
      {
        heading: "Honest caveat",
        paragraphs: [
          "Everything above is my current reading of the theme, formed from listening and reading. I'd want to pressure-test it in real research before calling it a belief — which is, I suppose, exactly the point of the note.",
        ],
      },
    ],
  },
  {
    slug: "pm-program-reflections",
    number: "09",
    title: "What I Learned From My PM Program",
    subtitle:
      "What four months of supported product exposure at Curinos made concrete for me.",
    kind: "program",
    kindLabel: "From my own experience",
    tag: "Product Management",
    date: "Sep 4, 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "Learning through contribution",
        paragraphs: [
          "From May 6 through August 31, Curinos gave me four months of supported exposure to product work. It was not an internship and I was not acting as a Product Manager. I was learning by contributing alongside people already doing the work, with guidance and room to ask questions.",
          "I joined client meetings and demonstrated app features directly to clients. I led two features with support and contributed to others, presented in product roadmap review meetings, and participated in problem and solution discovery. Each experience made product management feel less like a collection of frameworks and more like a discipline of connected decisions.",
        ],
      },
      {
        heading: "The work behind the visible feature",
        paragraphs: [
          "I conducted stakeholder interviews, made synthesis documents, created user flows and PRDs, and worked with UI/UX on prototype feedback. I also collaborated with engineering and data science through delivery. Desktop research on omnichannel experiences widened the questions I was asking beyond the feature in front of me.",
          "The most useful lesson was how much translation the work requires: client language into a problem, research into a pattern, a pattern into a flow, and a flow into something design and engineering can challenge together.",
        ],
      },
      {
        heading: "What the training added",
        paragraphs: [
          "A two-day product training workshop strengthened the practical side of the experience. I learned methodologies I could apply to discovery, prioritization, and delivery rather than simply recognize by name.",
          "I came away with a clearer understanding of product management as a discipline: not owning every answer, but creating enough shared clarity for a team to make better choices. I am still building that judgment, and these four months gave me real situations to reflect on instead of only hypothetical ones.",
        ],
      },
    ],
  },
  {
    slug: "spotify-product-teardown",
    number: "10",
    title: "Spotify: Discovery, Habit, and the Cost of Staying Familiar",
    subtitle: "An outside-in teardown of what works, where I see friction, and what I would test.",
    kind: "original",
    kindLabel: "Product teardown",
    tag: "Product Teardown",
    date: "Sep 17, 2026",
    readTime: "9 min read",
    sections: [
      {
        heading: "What I can observe",
        paragraphs: [
          "Spotify gets a listener from opening the app to hearing music remarkably quickly. Search is direct, playlists remove decisions, and playback continues across devices without much ceremony. The free tier also teaches the habit before asking for an upgrade.",
          "The friction appears later. Discovery can begin to feel like a loop that keeps serving the person you were last month, while playlists accumulate without a useful way to prune them.",
        ],
      },
      {
        heading: "My hypothesis",
        paragraphs: [
          "I suspect Spotify's durable advantage is less about catalog size and more about the accumulated model of a listener's taste plus the habit built around it. The switching cost feels psychological rather than technical.",
          "I also suspect recommendations may favor a safe next track over an interesting one. That could support short-term listening while gradually making discovery feel less alive.",
        ],
      },
      {
        heading: "What I would test",
        list: [
          "Whether an intentionally adventurous discovery mode improves longer-term retention, even if short-term skip rates rise.",
          "Whether lightweight archive and cleanup tools reduce playlist abandonment.",
          "Whether different interruption patterns on the free tier improve conversion without damaging the listening habit.",
        ],
      },
      {
        heading: "What I would measure",
        list: [
          "Discovery diversity alongside 60–90 day retention.",
          "Playlist creation alongside later playlist reuse.",
          "Free-tier session completion and upgrade conversion by acquisition cohort.",
        ],
      },
      {
        heading: "What I don't know",
        paragraphs: [
          "I do not know Spotify's internal data, recommendation weights, or actual upgrade funnel. This is outside-in reasoning based on publicly observable product behavior—not insider knowledge. I would want to validate every hypothesis before treating it as a finding.",
        ],
      },
    ],
  },
];

export const notesIndexEntry: Note = {
  slug: "what-i-changed-my-mind-about",
  number: "10",
  title: "What I Changed My Mind About",
  subtitle: "An ongoing section — beliefs I've updated, honestly and slowly.",
  kind: "link",
  kindLabel: "Ongoing section",
  tag: "Product Management",
  date: "Sep 17, 2026",
  readTime: "6 min read",
  linkTo: "/changed-my-mind",
  sections: [],
};

export function getNote(slug: string): Note | undefined {
  if (slug === notesIndexEntry.slug) return undefined;
  return notes.find((n) => n.slug === slug);
}

export function featuredNote(): Note {
  // The first note is always the featured one; the array is non-empty by construction.
  return notes[0]!;
}
