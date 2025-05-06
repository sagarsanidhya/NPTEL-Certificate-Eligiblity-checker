# 📜 NPTEL Certificate Eligibility Checker

A sleek and responsive web-based tool that helps students determine their eligibility for an NPTEL certificate based on internal assignment marks and exam scores.

![Dark Mode Screenshot](https://i.imgur.com/OZ5HTkE.png)  
<sub><sup>🖼️ Replace this with an actual screenshot of your project</sup></sub>

---

## 🚀 Features

- 🎯 **Eligibility Calculation** based on assignment and exam score rules  
- 🌙 **Dark/Light Mode Toggle** with persistent local storage preference  
- 📱 **Responsive Design** using Tailwind CSS  
- 🧠 **Auto Input Generator** for assignments based on course duration  
- 🧾 Clean separation of concerns (HTML, CSS, JS)  
- 💾 Works offline in browser  

---


---

## 🧮 How the Eligibility is Calculated

> Based on NPTEL’s official criteria.

- ✅ **Assignment Score**: Average of best _N_ weekly assignments  
  - Best 3 of 4-week courses  
  - Best 4 of 6-week courses  
  - Best 8 of 12-week courses  
- ✅ **Final Score Formula**:
Final Score = (25% of Best Assignment Average) + (75% of Exam Score)


- 🎓 **Eligibility Conditions**:
- Minimum 10/25 in assignment component  
- Minimum 30/75 in exam component  

---

## 💡 How to Use

1. **Select course duration** (4, 6, or 12 weeks)  
2. **Enter your assignment scores** week-wise  
3. **Enter your expected exam score**  
4. Click **“Check Eligibility”**  
5. 🎉 Result is displayed with detailed breakdown  

---

## 🌓 Dark Mode Toggle

- Toggle 🌙/☀️ icon at top-right of container  
- Theme preference is saved in `localStorage`  
- Seamlessly switches using Tailwind's `dark:` classes  

---

## 🛠️ Technologies Used

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [JavaScript (Vanilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [Font Awesome](https://fontawesome.com/) (for icons)  

---

## 📸 Screenshots

### 🔆 Light Mode  
![Light Mode Screenshot](https://i.imgur.com/VyMcYrT.png)

### 🌑 Dark Mode  
![Dark Mode Screenshot](https://i.imgur.com/OZ5HTkE.png)

---

## 📌 To-Do / Suggestions

- [ ] Export results as PDF  
- [ ] Add chart visualizations for scores  
- [ ] Add animations with Framer Motion / GSAP  
- [ ] Convert to a Chrome Extension  
- [ ] Store score history in localStorage  

---

## 🤝 Contributing

Feel free to fork and enhance the tool. PRs are welcome!

---

## 📄 License

MIT License – free to use and modify.

---

## ✨ Credits

Made with ❤️ by **Sanidhya Sagar**  
Inspired by real NPTEL grading policies


