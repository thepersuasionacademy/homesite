// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react'

interface AssessmentQuestion {
  id: number
  text: string
  category: 'self-awareness' | 'self-regulation' | 'self-motivation' | 'social-awareness' | 'relationship-management'
}

interface CategoryScore {
  name: string
  score: number
  maxScore: number
  description: string
}

interface AssessmentResults {
  totalScore: number
  maxTotalScore: number
  categoryScores: CategoryScore[]
  level: string
  feedback: string
  recommendations: string[]
}

const assessmentQuestions: AssessmentQuestion[] = [
  // Self-Awareness (1-6)
  { id: 1, text: "I notice my emotional reactions as they happen, not hours later", category: 'self-awareness' },
  { id: 2, text: "I understand what specific situations tend to trigger strong emotions in me", category: 'self-awareness' },
  { id: 3, text: "I can identify the difference between feeling frustrated vs. anxious vs. overwhelmed", category: 'self-awareness' },
  { id: 4, text: "I recognize how my moods affect my work performance and decision-making", category: 'self-awareness' },
  { id: 5, text: "I'm aware of my emotional patterns throughout the day and week", category: 'self-awareness' },
  { id: 6, text: "I can predict how I'll likely react to challenging situations based on past experience", category: 'self-awareness' },
  
  // Self-Regulation (7-12)
  { id: 7, text: "I stay calm and composed during high-pressure situations at work", category: 'self-regulation' },
  { id: 8, text: "When I receive criticism, I can listen without becoming defensive", category: 'self-regulation' },
  { id: 9, text: "I can bounce back quickly from setbacks or disappointments", category: 'self-regulation' },
  { id: 10, text: "I think before speaking when I'm upset or frustrated", category: 'self-regulation' },
  { id: 11, text: "I can maintain professional behavior even when dealing with difficult people", category: 'self-regulation' },
  { id: 12, text: "I adapt well to unexpected changes in plans or priorities", category: 'self-regulation' },
  
  // Self-Motivation (13-18)
  { id: 13, text: "I maintain enthusiasm for my work even during challenging periods", category: 'self-motivation' },
  { id: 14, text: "I set goals that align with my values and find intrinsic satisfaction in pursuing them", category: 'self-motivation' },
  { id: 15, text: "I persist through obstacles without needing constant external encouragement", category: 'self-motivation' },
  { id: 16, text: "I look for learning opportunities in failures rather than dwelling on disappointment", category: 'self-motivation' },
  { id: 17, text: "I take initiative to improve processes or solve problems without being asked", category: 'self-motivation' },
  { id: 18, text: "I maintain optimism about outcomes while being realistic about challenges", category: 'self-motivation' },
  
  // Social Awareness (19-24)
  { id: 19, text: "I notice when colleagues are stressed or upset, even when they try to hide it", category: 'social-awareness' },
  { id: 20, text: "I can sense the overall mood or energy level in meetings and team interactions", category: 'social-awareness' },
  { id: 21, text: "I understand the unspoken dynamics between different people in my workplace", category: 'social-awareness' },
  { id: 22, text: "I pick up on nonverbal cues like body language and tone of voice", category: 'social-awareness' },
  { id: 23, text: "I understand what motivates different people and what concerns them", category: 'social-awareness' },
  { id: 24, text: "I can read the political undercurrents in my organization", category: 'social-awareness' },
  
  // Relationship Management (25-30)
  { id: 25, text: "I can influence others to support my ideas without using pressure or manipulation", category: 'relationship-management' },
  { id: 26, text: "I handle conflicts by finding solutions that work for everyone involved", category: 'relationship-management' },
  { id: 27, text: "I build rapport easily with people from different backgrounds and personalities", category: 'relationship-management' },
  { id: 28, text: "I communicate my ideas clearly and persuasively in various situations", category: 'relationship-management' },
  { id: 29, text: "I help others feel heard and valued in conversations and meetings", category: 'relationship-management' },
  { id: 30, text: "I can motivate team members and help them perform at their best", category: 'relationship-management' }
]

const categoryNames = {
  'self-awareness': 'Self-Awareness',
  'self-regulation': 'Self-Regulation', 
  'self-motivation': 'Self-Motivation',
  'social-awareness': 'Social Awareness',
  'relationship-management': 'Relationship Management'
}

const categoryDescriptions = {
  'self-awareness': 'Understanding your emotions and their impact',
  'self-regulation': 'Managing your emotional responses effectively',
  'self-motivation': 'Driving yourself with internal motivation',
  'social-awareness': 'Reading others and social situations',
  'relationship-management': 'Influencing and connecting with others'
}

const getCategoryFeedback = (score: number, maxScore: number, category: keyof typeof categoryNames) => {
  const percentage = (score / maxScore) * 100
  
  const feedbackMap: Record<string, Record<string, string>> = {
    'self-awareness': {
      high: "You have excellent emotional self-awareness and understand your triggers and patterns well.",
      moderate: "You're developing good emotional awareness but could benefit from more consistent self-monitoring.",
      low: "Building stronger emotional awareness will be foundational to all other EQ improvements."
    },
    'self-regulation': {
      high: "You excel at managing your emotions and staying composed under pressure.",
      moderate: "You handle most situations well but could strengthen your emotional control in challenging moments.",
      low: "Learning emotional regulation techniques will dramatically improve your professional interactions."
    },
    'self-motivation': {
      high: "You're naturally driven and maintain motivation even during difficult periods.",
      moderate: "You stay motivated in most situations but could develop stronger internal drive during setbacks.",
      low: "Building internal motivation systems will help you persist through challenges and achieve bigger goals."
    },
    'social-awareness': {
      high: "You read people and situations exceptionally well, picking up on subtle social cues.",
      moderate: "You notice most social dynamics but could sharpen your ability to read emotional undercurrents.",
      low: "Developing your social radar will significantly improve your relationships and influence."
    },
    'relationship-management': {
      high: "You're skilled at influencing others and building strong professional relationships.",
      moderate: "You connect well with people but could enhance your ability to inspire and motivate others.",
      low: "Strengthening your relationship skills will unlock new opportunities for leadership and collaboration."
    }
  }
  
  const categoryFeedback = feedbackMap[category]
  if (!categoryFeedback) {
    return "Assessment feedback not available for this category."
  }
  
  if (percentage >= 80) return categoryFeedback.high
  if (percentage >= 60) return categoryFeedback.moderate
  return categoryFeedback.low
}

export function EQAssessment() {
  const [scores, setScores] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<AssessmentResults | null>(null)

  const handleScoreChange = (questionId: number, score: number) => {
    setScores(prev => ({
      ...prev,
      [questionId]: score
    }))
  }

  const calculateResults = (): AssessmentResults => {
    const categoryScores: CategoryScore[] = []
    let totalScore = 0
    const maxTotalScore = 150 // 30 questions x 5 points each

    // Calculate scores by category
    const categoryEntries = Object.entries(categoryNames) as Array<[keyof typeof categoryNames, string]>
    categoryEntries.forEach(([categoryKey, categoryName]) => {
      const categoryQuestions = assessmentQuestions.filter(q => q.category === categoryKey)
      const categoryScore = categoryQuestions.reduce((sum, question) => {
        return sum + (scores[question.id] || 0)
      }, 0)
      const maxCategoryScore = categoryQuestions.length * 5

      // Type guard to ensure categoryKey is valid
      if (categoryKey in categoryNames) {
        categoryScores.push({
          name: categoryName,
          score: categoryScore,
          maxScore: maxCategoryScore,
          // @ts-ignore - categoryKey is guaranteed to be valid from Object.entries
          description: getCategoryFeedback(categoryScore, maxCategoryScore, categoryKey)
        })
      }

      totalScore += categoryScore
    })

    // Find strongest and weakest categories
    const sortedCategories = [...categoryScores].sort((a, b) => (b.score / b.maxScore) - (a.score / a.maxScore))
    const strongestCategory = sortedCategories[0]
    const weakestCategory = sortedCategories[sortedCategories.length - 1]

    // Determine level and feedback
    let level = ''
    let feedback = ''
    let recommendations: string[] = []

    // Generate personalized next steps based on strongest/weakest areas
    const nextStepsMap: Record<string, string[]> = {
      'self-awareness': [
        'Set 3 daily emotional check-ins using phone alarms',
        'Keep an emotion journal for one week to identify patterns',
        'Practice the "name it to tame it" technique when stressed'
      ],
      'self-regulation': [
        'Learn the 6-7-8 breathing technique for immediate stress relief',
        'Practice the 3-second pause before responding to challenges',
        'Develop your personal stress management toolkit'
      ],
      'self-motivation': [
        'Connect your daily tasks to your core values and purpose',
        'Set up a personal progress tracking system',
        'Practice optimistic reframing of setbacks as learning opportunities'
      ],
      'social-awareness': [
        'Spend 25% of meeting time observing group dynamics instead of just content',
        'Practice reading micro-expressions and body language cues',
        'Conduct "empathy interviews" with colleagues to understand their perspectives'
      ],
      'relationship-management': [
        'Practice giving specific, genuine appreciation to one person daily',
        'Work on adapting your communication style to different personality types',
        'Focus on asking questions and listening more than talking in conversations'
      ]
    }

    if (totalScore >= 120) {
      level = 'High EQ'
      feedback = 'You demonstrate strong emotional intelligence across most situations. You\'re likely seen as a natural leader and someone others turn to during challenging times.'
      recommendations = [
        `Your strongest area is ${strongestCategory.name} - leverage this strength by mentoring others`,
        `Even with high EQ, focus on ${weakestCategory.name} for continued growth`,
        'Take on leadership roles that showcase your emotional intelligence',
        'Consider EQ coaching certification to help others develop these skills'
      ]
    } else if (totalScore >= 90) {
      level = 'Moderate EQ'
      feedback = 'You have a good EQ foundation with clear areas for targeted improvement. Focus on your lowest-scoring domains for breakthrough results.'
      recommendations = [
        `Your strength in ${strongestCategory.name} gives you a solid foundation to build from`,
        `Focus your development on ${weakestCategory.name} - this will have the biggest impact`,
        ...(nextStepsMap[weakestCategory.name.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') as keyof typeof nextStepsMap] || []).slice(0, 2)
      ]
    } else if (totalScore >= 60) {
      level = 'Developing EQ'
      feedback = 'You have significant growth opportunities that will accelerate your career. The good news: EQ can be learned and improved at any age.'
      recommendations = [
        `Start by building on your relative strength in ${strongestCategory.name}`,
        `Your biggest opportunity is developing ${weakestCategory.name}`,
        'Begin with the 90-day EQ transformation plan in this article',
        'Focus on self-awareness as your foundation for all other EQ skills'
      ]
    } else {
      level = 'Early EQ'
      feedback = 'You have a major opportunity for transformation through focused EQ development. Small improvements will yield big results in your career.'
      recommendations = [
        'Start with basic emotional awareness - set 3 daily emotion check-ins',
        'Learn fundamental stress management and breathing techniques',
        'Practice active listening in every conversation this week',
        'Consider professional EQ training or coaching for structured development'
      ]
    }

    // Get the category key for weakest category
    const weakestCategoryKey = Object.entries(categoryNames).find(([_, name]) => name === weakestCategory.name)?.[0]
    if (weakestCategoryKey && nextStepsMap[weakestCategoryKey]) {
      // Replace generic recommendations with specific ones for moderate/developing levels
      if (totalScore >= 60 && totalScore < 120) {
        recommendations = [
          ...recommendations.slice(0, 2),
          ...nextStepsMap[weakestCategoryKey].slice(0, 2)
        ]
      }
    }

    return {
      totalScore,
      maxTotalScore,
      categoryScores,
      level,
      feedback,
      recommendations
    }
  }

  const handleSubmit = () => {
    const completedQuestions = Object.keys(scores).length
    if (completedQuestions < 30) {
      alert(`Please complete all questions. You have ${30 - completedQuestions} questions remaining.`)
      return
    }

    const calculatedResults = calculateResults()
    setResults(calculatedResults)
    setShowResults(true)
    
    // Smooth scroll to results after a brief delay to allow rendering
    setTimeout(() => {
      const resultsElement = document.querySelector('.eq-assessment-results')
      if (resultsElement) {
        resultsElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }, 100)
  }

  const resetAssessment = () => {
    setScores({})
    setShowResults(false)
    setResults(null)
    
    // Smooth scroll back to the top of the assessment
    setTimeout(() => {
      const assessmentElement = document.querySelector('.eq-assessment')
      if (assessmentElement) {
        assessmentElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }, 100)
  }

  const getCompletionPercentage = () => {
    return Math.round((Object.keys(scores).length / 30) * 100)
  }

  if (showResults && results) {
    return (
      <div className="eq-assessment-results">
        <div className="results-header">
          <h3>Your EQ Assessment Results</h3>
          <div className="total-score">
            <div className="score-circle">
              <span className="score-number">{results.totalScore}</span>
              <span className="score-max">/{results.maxTotalScore}</span>
            </div>
            <div className="score-level">{results.level}</div>
          </div>
        </div>

        <div className="results-feedback">
          <p>{results.feedback}</p>
        </div>

        <div className="category-breakdown">
          <h4>Your EQ Profile by Domain</h4>
          {results.categoryScores.map((category, index) => (
            <div key={index} className="category-result">
              <div className="category-header">
                <span className="category-name">{category.name}</span>
                <span className="category-score">{category.score}/{category.maxScore}</span>
              </div>
              <div className="category-bar">
                <div 
                  className="category-fill"
                  style={{ width: `${(category.score / category.maxScore) * 100}%` }}
                />
              </div>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="recommendations">
          <h4>Your Next Steps</h4>
          <ul>
            {results.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>

        <button onClick={resetAssessment} className="reset-button">
          Take Assessment Again
        </button>

        <style jsx>{`
          .eq-assessment-results {
            background: var(--background);
            border: 2px solid var(--border);
            border-radius: 12px;
            padding: 2rem;
            margin: 2rem 0;
          }

          .results-header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .results-header h3 {
            color: var(--foreground);
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .total-score {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .score-circle {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
          }

          .score-number {
            font-size: 2rem;
            line-height: 1;
          }

          .score-max {
            font-size: 1rem;
            opacity: 0.8;
          }

          .score-level {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--foreground);
          }

          .results-feedback {
            background: var(--secondary);
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 2rem;
          }

          .results-feedback p {
            margin: 0;
            color: var(--foreground);
            line-height: 1.6;
          }

          .category-breakdown h4,
          .recommendations h4 {
            color: var(--foreground);
            margin-bottom: 1rem;
          }

          .category-result {
            margin-bottom: 1.5rem;
          }

          .category-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
          }

          .category-name {
            font-weight: 600;
            color: var(--foreground);
          }

          .category-score {
            font-weight: 600;
            color: var(--muted-foreground);
          }

          .category-bar {
            height: 8px;
            background: var(--muted);
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 0.5rem;
          }

          .category-fill {
            height: 100%;
            background: linear-gradient(90deg, #dc2626, #b91c1c);
            transition: width 0.3s ease;
          }

          .category-description {
            font-size: 0.875rem;
            color: var(--muted-foreground);
            margin: 0;
          }

          .recommendations ul {
            list-style: none;
            padding: 0;
          }

          .recommendations li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            color: var(--foreground);
          }

          .recommendations li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: #dc2626;
            font-weight: bold;
          }

          .reset-button {
            background: var(--secondary);
            color: var(--foreground);
            border: 1px solid var(--border);
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            margin-top: 1rem;
            transition: all 0.2s ease;
          }

          .reset-button:hover {
            background: var(--muted);
          }

          @media (max-width: 768px) {
            .eq-assessment-results {
              padding: 1.5rem;
            }

            .score-circle {
              width: 100px;
              height: 100px;
            }

            .score-number {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="eq-assessment">
      <div className="assessment-header">
        <h3>Measure Your EQ: The Professional Assessment</h3>
        <p>Rate each statement from 1 (never true) to 5 (always true). Be honest—this is for your development, not a judgment.</p>
        
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${getCompletionPercentage()}%` }} />
        </div>
        <p className="progress-text">{getCompletionPercentage()}% Complete ({Object.keys(scores).length}/30 questions)</p>
      </div>

      <div className="questions-container">
        {assessmentQuestions.map((question) => (
          <div key={question.id} className="question-item">
            <div className="question-header">
              <span className="question-number">{question.id}.</span>
              <span className="question-text">{question.text}</span>
            </div>
            
            <div className="rating-scale">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className={`rating-button ${scores[question.id] === rating ? 'selected' : ''}`}
                  onClick={() => handleScoreChange(question.id, rating)}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="assessment-footer">
        <button 
          onClick={handleSubmit}
          className="submit-button"
          disabled={Object.keys(scores).length < 30}
        >
          Calculate My EQ Score
        </button>
      </div>

      <style jsx>{`
        .eq-assessment {
          background: var(--background);
          border: 2px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
        }

        .assessment-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .assessment-header h3 {
          color: var(--foreground);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .assessment-header p {
          color: var(--muted-foreground);
          margin-bottom: 1rem;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: var(--muted);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #bf2828, #991b1b);
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 0.875rem;
          color: var(--muted-foreground);
          margin: 0;
        }

        .questions-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .question-item {
          background: var(--secondary);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .question-header {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .question-number {
          color: var(--muted-foreground);
          font-weight: 600;
          min-width: 2rem;
        }

        .question-text {
          color: var(--foreground);
          line-height: 1.5;
        }

        .rating-scale {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .rating-button {
          width: 40px;
          height: 40px;
          border: 2px solid var(--border);
          background: var(--background);
          color: var(--foreground);
          border-radius: 50%;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .rating-button:hover {
          border-color: #dc2626;
          background: var(--secondary);
        }

        .rating-button.selected {
          background: #dc2626;
          border-color: #dc2626;
          color: white;
        }

        .assessment-footer {
          text-align: center;
          margin-top: 2rem;
        }

        .submit-button {
          background: linear-gradient(135deg, #bf2828, #991b1b);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .eq-assessment {
            padding: 1.5rem;
          }

          .question-item {
            padding: 1rem;
          }

          .rating-button {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
          }

          .submit-button {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
