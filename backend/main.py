import os 
import requests
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

BASE_DIR = os.path.dirname(os.path.realpath(__file__))  # 현재 파일 경로를 기준으로 BASE_DIR 설정

app = FastAPI()  # FastAPI app 인스턴스를 생성

app.mount("/public", StaticFiles(directory=os.path.join(BASE_DIR, "static/public")), name='static')  # /public 경로로 정적 파일 제공

origins = ["http://localhost:8080",]  # 허용할 출처 목록 설정

app.add_middleware(  # 프론트엔드와 백엔드의 출처가 다르기 때문에 CORS 설정
    CORSMiddleware,  # CORS 미들웨어 추가
    allow_origins=origins,  # 설정한 출처만 허용
    allow_credentials=True,  # 자격 증명 허용
    allow_methods=["*"],  # 모든 HTTP 메서드 허용
    allow_headers=["*"],  # 모든 헤더 허용
)

api_router = APIRouter()  # API 경로를 관리할 APIRouter 인스턴스 생성

@api_router.get("/post/{pk}")  # /post/{pk} 경로에 GET 요청을 처리하는 엔드포인트 정의
def index(pk: int):  # pk라는 정수형 경로 매개변수를 받는 함수 정의
    return {"data": pk}  # pk 값을 반환

@api_router.get("/")  # / 경로에 GET 요청을 처리하는 엔드포인트 정의
def popular_movies(limit: int = 3): # 가져올 인기 영화 개수를 제한하는 limit 정수형 쿼리 매개변수를 받는 함수 정의
    url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" # 영화 정보를 가져올 API URL
    headers = { # API 요청 헤더
        "accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzBkODQ3NTkxNTE5MWY4MDIzNjk4ZDYzZmQ0NTFmYSIsInN1YiI6IjY2NDMxMjg0MWIwZTliMWQ0OTE4NGFlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fGmyqhdUVVa3IaIzZbHkqyxncNlYxFkUFhzPA0soXKo"
    } # API 요청 헤더에는 API 읽기 엑세스 토큰을 포함
    
    response = requests.get(url, headers=headers)  # API 요청을 보내고 응답을 저장
    
    

    return response.json()['results'][:limit] # API 응답 중 'results' 키의 값 json 형식으로 변환시켜 반환

app.include_router(api_router, prefix="/api")  # api_router를 /api 경로에 포함
