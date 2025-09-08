@echo off
echo Starting Portfolio Development Environment...
echo.

echo Starting FastAPI Backend...
start "FastAPI Backend" cmd /k "cd backend && python -m venv venv && venv\Scripts\activate && pip install -r requirements.txt && python main.py"

echo Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo Starting Next.js Frontend...
start "Next.js Frontend" cmd /k "npm install && npm run dev"

echo.
echo Development servers are starting...
echo.
echo Frontend: http://localhost:3000
echo Backend: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.
echo Press any key to exit this launcher...
pause > nul
