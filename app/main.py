from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mount the storybook-static directory to serve static files
app.mount("/", StaticFiles(directory="storybook-static"), name="storybook")