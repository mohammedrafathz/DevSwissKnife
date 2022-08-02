# Step 1: Frontend Build
FROM node:14-slim AS frontend-build
WORKDIR /usr/src
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

COPY backend/ ./backend/
RUN cd backend && npm install
RUN ls

EXPOSE 80

CMD ["node", "./backend/app.js"]