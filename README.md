# Color Scheme Switcher

A modern, interactive web application that allows users to dynamically change the background color of the page by clicking on beautifully designed color buttons. Built with vanilla HTML, CSS, and JavaScript for optimal performance and compatibility.

## ✨ Features

- **Interactive Color Switching**: Click on any color button to instantly change the page background
- **Modern UI Design**: Glass-morphism effects, smooth animations, and hover interactions
- **Responsive Layout**: Fully responsive design that works seamlessly across desktop, tablet, and mobile devices
- **5 Color Options**: Red, Blue, Green, Violet, and Aqua themes
- **Smooth Transitions**: Elegant 0.5s ease transitions for all color changes
- **Visual Feedback**: Interactive buttons with hover effects and animations

## 🌐 Live Demo

**[View Live Demo](https://your-vercel-app-url.vercel.app)**

Experience the Color Scheme Switcher in action! Click the link above to access the live deployment hosted on Vercel.

## 🎨 Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| Red | `#ff0000` | Primary red theme |
| Blue | `#0000ff` | Primary blue theme |
| Green | `#008000` | Primary green theme |
| Violet | `rgb(135, 14, 135)` | Custom violet theme |
| Aqua | `#00ffff` | Aqua/cyan theme |

## 🚀 Demo

Simply open the HTML file in any modern web browser to see the color switcher in action. Click on any of the colored buttons to see the background change instantly.

## 📁 Project Structure

```
color-scheme-switcher/
├── color_scheme_switcher.html    # Main HTML file
├── colorswitch.css              # Stylesheet with modern design
├── colorswitch.js               # JavaScript functionality
└── README.md                    # This file
```

## 🛠️ Installation & Usage

### Option 1: Direct Usage
1. Download all three files (`color_scheme_switcher.html`, `colorswitch.css`, `colorswitch.js`)
2. Ensure all files are in the same directory
3. Open `color_scheme_switcher.html` in your web browser
4. Click on any color button to change the background

### Option 2: Clone Repository
```bash
git clone <repository-url>
cd color-scheme-switcher
open color_scheme_switcher.html
```

### Option 3: Live Server (Recommended for Development)
```bash
# Using VS Code Live Server extension
# or any local server setup
python -m http.server 8000
# Navigate to http://localhost:8000
```

## 💻 Technical Details

### HTML Structure
- Semantic HTML5 structure
- Responsive meta viewport tag
- Clean navigation bar
- Color buttons implemented as `<span>` elements with unique IDs

### CSS Features
- **Modern Design**: Glass-morphism effects with backdrop filters
- **Responsive Grid**: Flexbox layout that adapts to different screen sizes
- **Smooth Animations**: CSS transitions for hover effects and color changes
- **Mobile-First**: Responsive breakpoints at 768px and 480px
- **Visual Effects**: Box shadows, gradients, and transform animations

### JavaScript Functionality
- **Event Delegation**: Efficient event handling using `querySelectorAll` and `forEach`
- **Switch Statement**: Clean conditional logic for color selection
- **DOM Manipulation**: Direct style property modification for instant color changes
- **Error Handling**: Default case for unexpected inputs

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Use Cases

- **Web Development Learning**: Perfect for beginners learning DOM manipulation
- **UI/UX Prototyping**: Quick color scheme testing for web projects
- **Portfolio Projects**: Demonstration of interactive web development skills
- **Theme Switching**: Foundation for more complex theme switching systems

## 🔧 Customization

### Adding New Colors
1. **HTML**: Add a new `<span>` element with a unique ID
```html
<span class="button" id="orange"></span>
```

2. **CSS**: Add the background color rule
```css
#orange {
    background-color: orange;
}
```

3. **JavaScript**: Add a new case to the switch statement
```javascript
case 'orange':
    color(ids)
    break;
```

### Styling Modifications
- Modify button dimensions in `.button` class
- Change transition duration in `body` and `.button` selectors
- Customize hover effects in `.button:hover`
- Adjust responsive breakpoints in media queries

## 🚀 Performance

- **Lightweight**: No external dependencies or frameworks
- **Fast Loading**: Minimal CSS and JavaScript footprint
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Memory Efficient**: Clean event handling without memory leaks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-color`)
3. Make your changes
4. Test across different browsers and screen sizes
5. Commit your changes (`git commit -am 'Add new color option'`)
6. Push to the branch (`git push origin feature/new-color`)
7. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- None currently reported

## 📧 Support

For questions, issues, or suggestions, please open an issue in the repository or contact the maintainer.

---

**Made with ❤️ using vanilla HTML, CSS, and JavaScript**
