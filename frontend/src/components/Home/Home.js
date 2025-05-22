//import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const getWelcomeMessage = () => {
    const timeOfDay = getCurrentTimeOfDay();
    const messages = {
      morning: "Start your day with intention and mindfulness.",
      afternoon: "Take a moment to center yourself and reflect.",
      evening: "Wind down and reflect on your day's journey."
    };
    return messages[timeOfDay];
  };

  const getRecommendedAction = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) {
      return {
        title: "Morning Affirmation",
        description: "Begin your day with positive intentions",
        link: "/morning",
        icon: "🌅",
        primary: true
      };
    } else if (hour >= 18 || hour < 5) {
      return {
        title: "Evening Reflection",
        description: "Reflect on your day and set peaceful intentions",
        link: "/evening",
        icon: "🌙",
        primary: true
      };
    } else {
      return {
        title: "Journal Entry",
        description: "Capture your thoughts and feelings",
        link: "/journal",
        icon: "📝",
        primary: true
      };
    }
  };

  const quickActions = [
    {
      title: "Morning Affirmations",
      description: "Start your day with positive energy",
      link: "/morning",
      icon: "🌅",
      color: "sunrise"
    },
    {
      title: "Evening Reflection",
      description: "Wind down with mindful thoughts",
      link: "/evening",
      icon: "🌙",
      color: "sunset"
    },
    {
      title: "Journal",
      description: "Write down your thoughts",
      link: "/journal",
      icon: "📝",
      color: "journal"
    },
    {
      title: "View History",
      description: "Review your past entries",
      link: "/journal-history",
      icon: "📚",
      color: "history"
    }
  ];

  const recommendedAction = getRecommendedAction();

  return (
    <div className={styles.home}>
      {/* Welcome Section */}
      <section className={styles.welcome}>
        <div className={styles.welcomeContent}>
          <h1 className={styles.welcomeTitle}>Welcome to Your Mindful Journey</h1>
          <p className={styles.welcomeMessage}>{getWelcomeMessage()}</p>
        </div>
      </section>

      {/* Recommended Action */}
      <section className={styles.recommended}>
        <h2 className={styles.sectionTitle}>Recommended for You</h2>
        <Link to={recommendedAction.link} className={`${styles.recommendedCard} ${styles.primary}`}>
          <div className={styles.cardIcon}>{recommendedAction.icon}</div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{recommendedAction.title}</h3>
            <p className={styles.cardDescription}>{recommendedAction.description}</p>
          </div>
          <div className={styles.cardArrow}>→</div>
        </Link>
      </section>

      {/* Quick Actions Grid */}
      <section className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>Quick Actions</h2>
        <div className={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <Link 
              key={index} 
              to={action.link} 
              className={`${styles.actionCard} ${styles[action.color]}`}
            >
              <div className={styles.actionIcon}>{action.icon}</div>
              <h3 className={styles.actionTitle}>{action.title}</h3>
              <p className={styles.actionDescription}>{action.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Daily Quote */}
      <section className={styles.dailyQuote}>
        <div className={styles.quoteCard}>
          <blockquote className={styles.quote}>
            "The present moment is the only time over which we have dominion."
          </blockquote>
          <cite className={styles.quoteAuthor}>— Thích Nhất Hạnh</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;