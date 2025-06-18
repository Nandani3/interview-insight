#  Interview Insight

**Interview Insight** is a smart web-based platform designed to help job seekers prepare efficiently for interviews by simulating HR and technical interview rounds, generating personalized questions, and offering insightful feedback based on answers using AI and machine learning techniques.

---

## Features

-  **HR Interview Simulation** – Practice common HR questions with smart suggestions and follow-up prompts.
-  **Technical Interview Questions** – Generate domain-specific technical questions (like DSA, ML, Web Dev, etc.).
-  **Answer Evaluation** – Analyze and score user responses using NLP and ML techniques.
-  **AI Feedback** – Receive improvement tips for each answer based on tone, completeness, and relevance.
-  **Performance Tracking** – View a summary of your mock interview scores and insights over time.

---

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Backend**: Flask (Python)
- **AI/ML**: OpenAI / Gemini APIs for generating and evaluating interview answers
- **Database**: SQLite / Firebase (customizable)
- **Deployment**: Ngrok / Render / Heroku (for demo purposes)

---

##  Installation Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nandani3/interview-insight.git
   cd interview-insight
   
2. **Create a virtual environment**
   python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate

3. **Install dependencies**
 pip install -r requirements.txt

4. **Run the app**
   flask run

5. **Access locally**
    Open http://127.0.0.1:5000/ in your browser

   **FOLDER STRUCTURE **
interview-insight/
│
├── static/              # CSS, JS, images
├── templates/           # HTML templates (home, interview page, result, etc.)
├── app.py               # Main Flask application
├── model/               # ML models or APIs integration
├── utils.py             # Helper functions
├── requirements.txt     # Python dependencies
└── README.md            # Project documentation


**TroubleShooting**

| Issue                      | Possible Cause                                  | Solution                                                                          |
| -------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| **Flask app not starting** | Virtual environment not activated               | Activate the virtual environment and try `flask run` again                        |
| **ModuleNotFoundError**    | Missing dependencies                            | Run `pip install -r requirements.txt` to install all packages                     |
| **API key errors**         | Missing or incorrect API keys for OpenAI/Gemini | Ensure your `.env` or `config.py` has valid keys properly set                     |
| **CSS not loading**        | Static folder not linked correctly              | Make sure `{{ url_for('static', filename='...') }}` is used properly in templates |
| **Ngrok not working**      | Token not set or tunnel expired                 | Run `ngrok config add-authtoken <your_token>` and restart Ngrok                   |
| **Answer evalu**           |                                                 |                                                                                   |




   




