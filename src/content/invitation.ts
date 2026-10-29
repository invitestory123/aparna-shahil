/**
 * All copy for the invitation lives here.
 * Wedding details for Aparna & Sahil.
 */

export const invitation = {
  couple: {
    bride: "Aparna",
    groom: "Sahil",
    initials: "A & S",
  },
  parents: {
    bride: "Smt. Sangeeta Gupta & Shri Sarwan Gupta",
    groom: "Smt. Sushila Gupta & Shri Pramod Kumar Gupta",
    blessingText: "With the heavenly blessings of our elders and the affectionate love of our families",
  },
  /** ISO date-time of the ceremony, used by the countdown and calendar file. */
  dateISO: "2026-11-30T20:00:00+05:30",
  dateLabel: "Monday, 30 November 2026",
  timeLabel: "8:00 PM onwards",
  functionName: "Wedding Ceremony",
  venue: {
    name: "Galaxy Garden",
    address: "Bhatipura, Near Veerbhumi Degree College, Mahoba - 210427",
    mapsUrl: "https://share.google/ZKZKk1dBM7wY8wbkM",
    mapsQuery: "Galaxy Garden Bhatipura Mahoba",
  },
  dressCode: "Traditional Indian / Festive Elegance",
  hero: {
    kicker: "Together with our families",
    eyebrow: "Save the Date",
    blessing: "Two souls, two families, one sacred journey",
  },
  story: {
    title: "Aparna & Sahil",
    subtitle: "A union of hearts, blessed by both families",
    bride: {
      name: "Aparna",
      role: "The Bride",
      parents: "D/o Smt. Sangeeta Gupta & Shri Sarwan Gupta",
      text: "With grace, kindness, and an infectious smile that brings warmth wherever she goes, Aparna is ready to step into this blessed new chapter of life.",
    },
    groom: {
      name: "Sahil",
      role: "The Groom",
      parents: "S/o Smt. Sushila Gupta & Shri Pramod Kumar Gupta",
      text: "Steadfast, affectionate, and full of heartfelt devotion, Sahil steps forward with joy and promises of a lifetime together.",
    },
  },
  chapters: [
    {
      no: "I",
      title: "The Auspicious Beginning",
      when: "The Meeting of Families",
      text: "With shared smiles, mutual blessings, and two families uniting with joy, a cherished lifelong bond was formed.",
    },
    {
      no: "II",
      title: "Shared Conversations & Dreams",
      when: "Growing Closer",
      text: "Countless heartfelt moments and quiet understandings that turned friendship into an unbreakable lifelong promise.",
    },
    {
      no: "III",
      title: "The Sacred Decision",
      when: "With Families' Blessings",
      text: "With hearts aligned and the loving encouragement of both families, two souls decided on forever.",
    },
    {
      no: "IV",
      title: "The Wedding Ceremony",
      when: "30 November 2026",
      text: "Under the starlit sky and sacred mantras, we take our pheras and unite our lives, surrounded by the people we cherish most.",
    },
  ],
  footer: {
    line1: "Come celebrate our joyous day with us.",
    line2: "Your presence and blessings mean the world to us.",
    signoff: "With love & regards, Gupta Family, Aparna & Sahil",
  },
} as const;

export const wishes = [
  {
    from: "Gupta Family",
    text: "May your married life be filled with everlasting joy, harmony, and prosperity.",
  },
  {
    from: "Family & Friends",
    text: "Wishing Aparna & Sahil a lifetime of shared laughter and unending love.",
  },
  {
    from: "Well-wishers",
    text: "May your home always be blessed with love, peace, and abundance.",
  },
] as const;
