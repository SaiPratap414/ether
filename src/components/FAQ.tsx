// FAQ.tsx

import React, { useState, FunctionComponent } from 'react';
import styles from './FAQ.module.css';

// Define a type for FAQ item props
interface FAQItemProps {
  question: string;
  answer: string;
}

// FAQItem component for each FAQ entry
const FAQItem: FunctionComponent<FAQItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.helpMyORBParent}>
      <div className={styles.helpMyORB} >
        <div className={styles.howDoI}>{question}</div>
        {isExpanded && <div className={styles.theDualNature1}>{answer}</div>}
      </div>
      <div className={styles.fAQ} onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? '-' : '+'}</div>
    </div>
  );
};

// Main FAQ component
const FAQ: FunctionComponent = () => {
  
  // FAQ items array
  const faqItems = [
    {
      question: 'How do I start pondering?',
      answer:
        'The The Dual Nature of ORB Tokens is enabled by ERC404, the wizardry behind the ORBs. This allows each NFT to possess inherent liquidity, facilitating a robust wagering system. Buying a full token will auto-mint an ORB NFT into your wallet.',
    },
    {
      question: 'What’s the deal with elemental scores?',
      answer: 'Elemental scores determine your ORBs affinity and power in the game. Each ORB NFT has 3 core elemental traits with inherent scores adding upto 100. In the event of a tie, win is determined based on trait score.',
    },
    {
      question: 'Can I actually win with a strategy?',
      answer: 'Strategy plays a crucial role in the game. By carefully planning your moves and leveraging the unique abilities of your ORBs, you can outmaneuver your opponents and secure victories.',
    },
    {
      question: 'Help! My Orb NFT won’t stop pulsating!',
      answer: 'Ponder the ORB anon, its secrets will be revealed!',
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.fAQParent}>
        <div className={styles.theTechnologyBehindTheMagiWrapper}>
          <div className={styles.theTechnologyBehindContainer}>
            <p className={styles.theTechnologyBehind}>The technology behind the magic</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.theDualNature}>
              The Dual Nature of ORB Tokens is enabled by ERC404, the wizardry behind the ORBs. ERC-404 is a new standard of on-chain coordination, that (in this case) lets you own a piece of the game, both as a fungible asset and a gateway to your own Orb NFT. This allows each NFT to possess inherent liquidity, facilitating a robust wagering system. These token are not just static collectibles but active, liquid assets integral to the game's financial mechanics.
            </p>
          </div>
        </div>
        <img
          className={styles.fAQParentChild}
          loading="eager"
          alt=""
          src="/group-3-2.svg"
        />
        {/* FAQ heading */}
        <h2 className={styles.faqHeading}>FAQ</h2>
        <div className={styles.socialMediaLinks}>
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
