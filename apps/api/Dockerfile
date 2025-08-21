FROM python:3.11-slim

# Install uv (fast dependency manager)
RUN pip install uv

WORKDIR /app
COPY pyproject.toml ./
RUN uv sync --frozen  # install dependencies

COPY . .

CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
