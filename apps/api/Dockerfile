FROM python:3.12-slim

# Install uv (fast dependency manager)
RUN pip install uv

WORKDIR /app/app

# Copy lock + pyproject first (to leverage Docker cache)
COPY pyproject.toml uv.lock ./

# Install deps into .venv
RUN uv sync --frozen

# Copy the rest of the code
COPY . .

# Run FastAPI with uvicorn through uv-managed env
CMD ["uv", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
