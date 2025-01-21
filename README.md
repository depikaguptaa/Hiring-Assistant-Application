# QuizMaster

Live Demo: [QuizMaster](https://quiz-master-peach.vercel.app/)

## Overview

QuizMaster is a modern, responsive quiz application built with React and Tailwind CSS. The application features a clean, intuitive interface with dark mode support and smooth animations.

### Key Features
- Dynamic quiz questions with shuffled options
- Real-time progress tracking
- Interactive question navigation
- Dark mode support
- Timer with auto-submit
- Detailed score report
- Responsive design

## Task Completion Checklist

| Required Feature | Status |
|-----------------|--------|
| **Quiz Layout & Flow** | |
| Email Submit Page | ✅ Done |
| 15 Questions Display | ✅ Done |
| 30-minute Timer | ✅ Done |
| **Navigation** | |
| Question Navigation | ✅ Done |
| Overview Panel | ✅ Done |
| Question Status Tracking | ✅ Done |
| **End of Quiz** | |
| Report Page | ✅ Done |
| Answer Comparison | ✅ Done |
| **Data Source** | |
| OpenTDB API Integration | ✅ Done |
| Option Shuffling | ✅ Done |

### Components

1. **QuizPage**: Main component handling quiz state and navigation
   - Manages question loading and shuffling
   - Handles answer selection and submission
   - Implements previous/next navigation

2. **Timer**: Fixed header component
   - 30-minute countdown
   - Progress bar showing completion status
   - Auto-submits when time expires

3. **QuestionOverview**: Navigation component
   - Visual representation of answered/unanswered questions
   - Quick navigation between questions
   - Animated current question indicator

4. **QuizQuestion**: Question display component
   - Renders question and options
   - Handles answer selection
   - Implements animations for transitions

5. **ReportPage**: Results component
   - Displays final score
   - Shows detailed question-wise analysis
   - Color-coded correct/incorrect answers

## Installation

1. Clone the repository:

```bash
   git clone <repository-url>
   ```

2. Install dependencies:

```bash
   cd quiz-master
   npm install
   ```

3. Start the development server:

```bash
   npm start
   ```

## Environment Setup

1. Create a `.env` file in the root directory:
```bash
REACT_APP_QUIZ_API_URL=https://opentdb.com/api.php
REACT_APP_QUIZ_AMOUNT=15
```


The application uses the following environment variables:
- `REACT_APP_QUIZ_API_URL`: OpenTDB API endpoint
- `REACT_APP_QUIZ_AMOUNT`: Number of questions to fetch

Note: A `.env.example` file is provided as a template.

## Assumptions

1. Questions API:
   - Returns 15 questions per quiz
   - Each question has one correct answer
   - Questions include both correct and incorrect options

2. User Experience:
   - Users can navigate freely between questions
   - Answers can be changed until final submission
   - 30 minutes is sufficient for 15 questions

## Technical Challenges & Solutions

1. **HTML Entity Decoding**
   - Challenge: Questions and answers contained HTML entities
   - Solution: Implemented a decodeHTML utility function

2. **Option Shuffling**
   - Challenge: Needed to randomize options while maintaining consistency
   - Solution: Implemented shuffling at question load and stored in state

3. **State Management**
   - Challenge: Complex state with answers, navigation, and timer
   - Solution: Used React's useState and useEffect with proper dependencies

4. **Animations**
   - Challenge: Smooth transitions between questions
   - Solution: Implemented custom Tailwind animations with proper timing

5. **Dark Mode**
   - Challenge: Consistent styling across themes
   - Solution: Utilized Tailwind's dark mode with custom color schemes

## Future Improvements

1. Add user authentication
2. Implement different quiz categories
3. Add difficulty levels
4. Include a leaderboard system
5. Add question bookmarking feature

## Technologies Used

- React
- Tailwind CSS
- React Router
- Vercel (Deployment)