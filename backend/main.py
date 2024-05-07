import os

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

app = FastAPI()

app.mount("/public", StaticFiles(directory=os.path.join(BASE_DIR, "static/public")), name='static')

origins = ["http://localhost:8080",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter()

@api_router.get("/post/{pk}")
def index(pk: int):
    return {"data": pk}

app.include_router(api_router, prefix="/api")
