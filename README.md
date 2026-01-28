# Quiz Master 🎯

An interactive, feature-rich quiz application built with vanilla HTML, CSS, and JavaScript. Perfect for testing knowledge across multiple categories and difficulty levels.

## Features

- **Three Difficulty Levels**: Easy, Medium, and Hard questions
- **30-Second Timer**: Each question has a countdown timer with visual warnings
- **Instant Feedback**: Get immediate feedback on correct/incorrect answers
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Detailed Results**: 
  - Score percentage and breakdown
  - Correct/Incorrect answer count
  - Accuracy percentage
  - Full answer review with explanations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations and transitions

## Project Structure

```
quiz-master/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript logic
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. Clone the repository or download the files:
```bash
git clone https://github.com/yourusername/quiz-master.git
cd quiz-master
```

2. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# Or simply double-click the index.html file
```

## How to Use

1. **Select Difficulty**: Choose from Easy, Medium, or Hard difficulty levels
2. **Click Start**: Click the "Start Quiz" button to begin
3. **Answer Questions**: Select one of the four options for each question
4. **Time Management**: You have 30 seconds per question (timer auto-advances if time runs out)
5. **Review Results**: After completing the quiz, review your performance and answers
6. **Retake Quiz**: Click "Take Quiz Again" to start over with a different difficulty level

## Question Categories

The quiz includes questions from various categories:

- **Geography**: Capital cities, oceans, countries
- **Science**: Elements, planets, chemistry
- **Math**: Basic arithmetic and prime numbers
- **Literature**: Famous authors and works
- **History**: Historical events and dates
- **Biology**: Animals, human anatomy, genetics
- **Physics**: Speed of light, temperature conversions
- **Art**: Famous artists and artworks
- **Music**: Musical instruments
- **Astronomy**: Planets and space

## Customization

### Adding New Questions

Edit `script.js` and add questions to the `quizzes` object:

```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0,  // Index of correct answer (0-3)
    category: "Category Name"
}
```

### Changing Colors

Edit `style.css` to modify the color scheme:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Difficulty button colors */
.difficulty-btn.easy { color: #27ae60; }
.difficulty-btn.medium { color: #f39c12; }
.difficulty-btn.hard { color: #e74c3c; }
```

### Adjusting Timer Duration

In `script.js`, modify the timer initialization:

```javascript
timeLeft = 30; // Change 30 to your desired number of seconds
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight: Single-page application with no external dependencies
- Fast Load Time: All resources are inline or local
- Responsive: Optimized for all screen sizes

## File Descriptions

### index.html
Contains the HTML structure with three main screens:
- Start Screen: Difficulty selection
- Quiz Screen: Question and answer interface
- Results Screen: Performance summary and review

### style.css
Complete styling including:
- Responsive layout
- Smooth animations and transitions
- Color-coded feedback (correct/incorrect)
- Mobile-first responsive design

### script.js
Core application logic:
- Quiz data and question management
- Timer functionality
- Score calculation
- Answer review generation

## Contributing

Feel free to fork this project and submit pull requests with improvements!

## License

This project is open source and available under the MIT License.

## Author

Created as an educational tool for testing knowledge and assessment.

## Future Enhancements

- [ ] LocalStorage to save quiz progress
- [ ] More question categories
- [ ] User profile and score history
- [ ] Difficulty-based scoring multipliers
- [ ] Leaderboard functionality
- [ ] Question randomization
- [ ] Multiple question types (true/false, matching, etc.)
- [ ] Timed quiz mode with pauses
- [ ] Export results as PDF

## Troubleshooting

**Timer not working?**
- Ensure JavaScript is enabled in your browser
- Check browser console for errors (F12)

**Styling looks off?**
- Ensure `style.css` is in the same directory as `index.html`
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

**Questions not showing?**
- Verify `script.js` is in the same directory
- Check that the file is not corrupted

## Contact & Support

For issues or suggestions, please create an issue in the repository.

---

**Happy Quizzing! 🎓**
