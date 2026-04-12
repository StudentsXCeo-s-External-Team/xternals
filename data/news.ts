// ============================================================
// ✏️  EDITABLE CONTENT — Add, remove, or edit news items here
// ============================================================

export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  date: string;
  author?: string;
  cover: string;           // shown on homepage card
  hero: string;
  images: string[];        // gallery images on detail page (can be empty [])
  excerpt: string;         // short summary shown on cards / detail hero
  content: string;         // full article — supports basic HTML tags like <b>, <i>, <br/>
};

export const NEWS: NewsItem[] = [
  {
    slug: "onboarding-session",
    category: "INTERNAL EVENT UPDATE",
    title: "StudentsxCEOs Jakarta Batch 14 Officially Kicks Off with Onboarding Session",
    date: "February 28, 2026",
    author: "Data and Technology Division",
    cover: "/news/onboarding-session/cover.jpeg",
    hero: "/news/onboarding-session/hero.jpeg",
    images: [
      "/news/holiday-shopping-2025/gallery-1.jpg",
      "/news/holiday-shopping-2025/gallery-2.jpg",
      "/news/holiday-shopping-2025/gallery-3.jpg",
    ],
    excerpt:
      "After going through the entire recruitment process from BOE to Associate, StudentsxCEOs Jakarta Batch 14 officially held its onboarding session on February 15, 2026.",
    content: `After completing recruitment journey from the BOE stage to Associates, StudentsxCEOs Jakarta Batch 14 officially began its new chapter with an onboarding session held on February 15, 2026. Conducted online, the session marked a significant milestone as the newly accepted members gathered for the first time as an official batch, ready to embark on a year of growth, collaboration, and impact.

The onboarding session opened with a welcoming speech from the CEO of SxC Jakarta. In the address, the CEO shared the organization’s vision, mission, and long-term aspirations, while emphasizing the importance of collaboration, proactiveness, and ownership within each role. The speech set the tone for the session, encouraging every member of Batch 14 to not only contribute professionally but also grow personally throughout their journey in SxC.

Following the opening remarks, the Board of Executives (BOE) was formally introduced. Each member shared their role and responsibilities, providing clarity on the organizational structure and leadership that will guide Batch 14 throughout the term. This introduction helped participants better understand how each function interconnects to support SxC’s broader goals.

The session continued with the CGC announcement, marking another important highlight of the event. This segment reinforced the organization’s commitment to structured governance and operational excellence, ensuring that all members are aligned with the standards and expectations moving forward.

To provide a comprehensive understanding of how SxC operates, representatives from each division presented an overview of their respective teams. These presentations covered the core responsibilities, key objectives, and strategic direction of each division, allowing members to see how their contributions will play a role in achieving collective goals.

The onboarding concluded with division-based discussions, where members gathered with their respective teams to connect on a more personal level. During these sessions, they discussed their scope of work, expectations, and initial plans for the upcoming term. This created a space for open communication, alignment, and the building of early team synergy.

Overall, the onboarding session served as a meaningful starting point for StudentsxCEOs Jakarta Batch 14. More than just an introduction, it was a foundation for commitment, collaboration, and shared ambition. As Batch 14 officially begins its journey, the spirit of unity and purpose established during onboarding sets a promising tone for an impactful year ahead.`,
  },
  {
    slug: "leadership-initiative",
    category: "APPRENTICE PROGRAM",
    title: "Apprentices of SxC Jakarta Kick Off Leadership Initiative with Insightful Webinar",
    date: "February 28, 2026",
    author: "Data and Technology Division",
    cover: "/news/leadership-initiative/cover.jpeg",
    hero: "/news/leadership-initiative/hero.jpeg", 
    images: [
      "/news/holiday-shopping-2025/gallery-1.jpg",
      "/news/holiday-shopping-2025/gallery-2.jpg",
      "/news/holiday-shopping-2025/gallery-3.jpg",
    ],
    excerpt:
      "SxC Jakarta apprentices successfully launched LeadYourShip on February 8, 2026, as the first initiative aligned with the organization’s Leadership value.",
    content: `StudentsxCEOs Jakarta apprentices successfully conducted their first flagship initiative, LeadYourShip, on February 8, 2026. Held virtually, the event marked the beginning of a three-part program series aligned with SxC Jakarta’s core values, starting with Leadership.

Carrying the theme “Leadership Starts With You: Finding Your Leadership Standing” the event encouraged participants to reflect on their personal leadership identity and understand that leadership extends beyond titles or positions. Instead, it emphasized leadership as a reflection of behavior, values, and attitudes demonstrated in various contexts of life.

The interactive webinar featured distinguished speakers, including Humala Septian, Founder & CEO of Future Brand Leaders and former analyst at a London-based consulting firm, as well as Fairuz Mumtaz Abafiyah Putri, CEO of Veteran Conference 2024 and former intern at Bank Indonesia. Both speakers shared their leadership journeys, offering practical insights on navigating challenges, building resilience, and leading with purpose from an early stage.

LeadYourShip was designed as an engaging and dynamic learning experience. The program consisted of several key segments:

LeaderTalks
A talk show session featuring inspiring leaders who shared real-life experiences, personal reflections, and the values that shape their leadership styles. This segment provided participants with authentic perspectives on what it truly means to lead.

LeadQuest
A fun and interactive game session aimed at strengthening participants’ leadership skills through collaborative challenges. The activity encouraged teamwork, critical thinking, and decision-making under dynamic scenarios.

Case for Young Leaders
A case study discussion session where participants analyzed real-world leadership situations. Through guided discussions, they explored problem-solving strategies and leadership approaches relevant to young leaders.

Through these thoughtfully curated sessions, LeadYourShip successfully created a space for reflection, growth, and practical learning. More than just a webinar, the event served as a reminder that leadership begins from within, shaped by mindset, strengthened by experience, and demonstrated through action.

As the first initiative under the Leadership value, LeadYourShip sets the tone for the upcoming apprentice-led programs aligned with SxC Jakarta’s other core values. With strong engagement and meaningful discussions, the event reaffirmed SxC’s commitment to nurturing future leaders who are self-aware, impactful, and purpose-driven.`
},
{
    slug: "preneuries",
    category: "APPRENTICE PROGRAM",
    title: "SxC Jakarta Empowers Aspiring Entrepreneurs to Build Sustainable Ventures with Preneuries",
    date: "February 28, 2026",
    author: "Data and Technology Division",
    cover: "/news/preneuries/cover.jpeg",
    hero: "/news/preneuries/hero.jpeg", 
    images: [
      "/news/holiday-shopping-2025/gallery-1.jpg",
      "/news/holiday-shopping-2025/gallery-2.jpg",
      "/news/holiday-shopping-2025/gallery-3.jpg",
    ],
    excerpt:
      "As part of SxC Jakarta’s second core value, Entrepreneurship, the apprentices presented Preneuries Tangga on February 7, 2026.",
    content: `As part of its commitment to nurturing entrepreneurial mindsets, StudentsxCEOs Jakarta apprentices successfully held Preneuries Tangga on February 7, 2026. Conducted virtually, the program represented the second initiative aligned with SxC Jakarta’s core value of Entrepreneurship.

Carrying the theme “Building Sustainable and Scalable Entrepreneurship in the Modern Economy,” the event aimed to empower aspiring entrepreneurs to develop business models that are not only innovative but also resilient and socially responsible. The program emphasized the importance of long-term impact, encouraging participants to transform ideas into ventures that create meaningful and sustainable change.

The event featured prominent entrepreneurs, including Harry Sipangkar, Founder of Matteo Group, and Firdaus Gazera, Founder of Tens Coffe. Through an engaging insight talk show session, both speakers shared their entrepreneurial journeys, from early challenges and pivotal turning points to lessons learned in scaling their businesses. Their stories highlighted the importance of adaptability, strategic thinking, and resilience in navigating today’s competitive economic landscape.

In addition to the talk show, participants also joined a Masterclass Series workshop designed to provide practical, hands-on learning. Guided by experienced mentors, Priscilla Auleader Napitululu, Commercial Management Trainee at L’Oréal, and Wildan Bagus Maulana, Procurement at Ismaya Group, attendees worked through case study discussions that challenged them to analyze business scenarios and formulate strategic solutions.

The workshop focused on designing sustainable business models, identifying scalable growth opportunities, and ensuring long-term viability in a rapidly evolving market. Participants were encouraged to think critically about innovation, operational efficiency, and social responsibility as integral components of entrepreneurship.

Through a combination of inspiring real-life insights and structured, case-based learning, Preneuries Tangga successfully bridged theory and practice. The program not only strengthened participants’ understanding of entrepreneurship but also equipped them with actionable frameworks to build ventures that are both impactful and future-ready.

As the second initiative under SxC Jakarta’s core values framework, Preneuries Tangga reaffirmed the organization’s mission to cultivate young leaders who are visionary, resilient, and capable of driving sustainable growth in the modern economy.`
},
{
    slug: "sxdigital",
    category: "APPRENTICE PROGRAM",
    title: "SxC Jakarta Connects Students with Digital Industry Professionals Through SxDigital",
    date: "February 28, 2026",
    author: "Data and Technology Division",
    cover: "/news/sxdigital/cover.jpeg",
    hero: "/news/sxdigital/hero.jpeg", 
    images: [
      "/news/holiday-shopping-2025/gallery-1.jpg",
      "/news/holiday-shopping-2025/gallery-2.jpg",
      "/news/holiday-shopping-2025/gallery-3.jpg",
    ],
    excerpt:
      "Aligned with SxC Jakarta’s Partnership value, the apprentices introduced SxDigital on February 7, 2026.",
    content: `As part of the Partnership value initiative, StudentsxCEOsJakarta apprentices successfully organized SxDigital on February 7, 2026. Conducted virtually, the program carried the theme “Inside the Job: Social Media & E-Commerce Unfiltered,” offering participants an in-depth look into the realities of working in today’s digital industry.

Designed to bridge students with industry practitioners, SxDigital aimed to provide transparent and practical insights into career paths within social media and e-commerce. The session highlighted not only the opportunities within the digital ecosystem but also the challenges, responsibilities, and skill sets required to thrive in these fast-paced roles.

The event featured distinguished speakers from diverse professional backgrounds. Vanka Karisa, Social Media Specialist at Schoters, shared insights on content strategy, audience engagement, and the evolving landscape of digital branding. She emphasized the importance of creativity combined with data-driven decision-making in building impactful social media campaigns.

Adding to the discussion, Almidalla Wibowo, E-Commerce Management Associate at Somethinc, provided a comprehensive overview of managing digital storefronts, optimizing performance metrics, and navigating the competitive e-commerce market. Participants gained practical knowledge about business operations behind successful online brands.

Completing the speaker lineup, Nur Syifa Nadiastuti, a content creator with over 100,000 followers and a marketing professional at BRI Group, shared her experience in personal branding, audience growth, and balancing creative work with corporate responsibilities. Her session offered a relatable perspective on building influence while maintaining professionalism in the digital space.

Throughout the event, speakers openly discussed their career journeys, daily responsibilities, industry challenges, and key lessons learned along the way. The interactive format encouraged participants to ask questions, engage in discussions, and gain practical advice directly from experienced professionals.

By fostering meaningful connections between students and industry practitioners, SxDigital successfully embodied SxC Jakarta’s Partnership value. The program reinforced the importance of collaboration, knowledge-sharing, and real-world exposure in preparing young talents for the ever-evolving digital economy.

As the third initiative led by the apprentices, SxDigital completed the trilogy of value-driven programs, further strengthening SxC Jakarta’s commitment to developing future-ready leaders equipped with industry insights and professional networks.`
},
];