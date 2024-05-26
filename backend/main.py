import os

import httpx
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv

load_dotenv()  # .env 파일을 불러와 환경 변수 설정

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

api_token = os.getenv('TMDB_API_TOKEN') # 환경 변수에서 API TOKEN 가져오기

# 장르 id를 장르명으로 변환하는 딕셔너리
genres = {
    28: '액션',
    12: '모험',
    16: '애니메이션',
    35: '코미디',
    80: '범죄', 
    99: '다큐멘터리',
    18: '드라마',
    10751: '가족',
    14: '판타지',
    36: '역사',
    27: '공포',
    10402: '음악',
    9648: '미스터리',
    10749: '로맨스',
    878: 'SF',
    10770: 'TV 영화',
    53: '스릴러',
    10752: '전쟁',
    37: '서부'
}

api_router = APIRouter()  # API 경로를 관리할 APIRouter 인스턴스 생성

# moonsoo

@api_router.get("/search")
# 키워드 검색 API
# referecne link: https://developer.themoviedb.org/reference/search-movie
async def search(query: str):
    # 사용 방법: http://127.0.0.1:8000/api/search?query=검색어

    # 검색어를 입력했을 때 정보를 가져올 URL   
    url = f"https://api.themoviedb.org/3/search/movie?query={query}&include_adult=false&language=ko-kr&page=1"

    # API 요청 헤더
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_token}"
    }

    async with httpx.AsyncClient() as client: # 비동기 HTTP 클라이언트 생성
       
       # API 요청을 보내고 응답 저장
       response = await client.get(url, headers=headers)
    
    if response.status_code != 200: 
        # 응답이 성공적이지 않은 경우
        return {"Error": "Failed to fetch movie information data"}

    # 결과를 저장할 새로운 리스트 선언 및 API로 호출한 결과값을 results 변수에 저장
    results_return = []
    results = response.json()['results']
    for result in results:
        # 반환받은 영화들을 하나씩 반복하면서 장르 id를 장르명으로 변환

        # 장르명을 저장할 리스트 선언
        genre_names = []
        # 호출 결과에서 장르 id 담은 리스트 불러오기
        genre_ids = result['genre_ids']


        # 장르 id를 장르명으로 변환
        for genre_id in genre_ids:
            try:
                # 장르 id를 key로 하여 genres 딕셔너리 조회 후 genre_names에 추가
                genre_name = genres[genre_id]
                genre_names.append(genre_name)
            except:
                # 장르 id에 해당하는 장르명이 존재하지 않을 경우, 에러 메시지 출력
                print("Error genre id:", genre_id)

        # 반환된 결과값에 새로 genre_names을 추가
        result['genre_names'] = genre_names
        

        # 최종적으로 반환할 리스트에 결과 추가
        results_return.append(result)

    """
    리턴하는 결과값과 설명

    "adult": 현재 요청할 때 false이기 때문에 모두 false값만 나옴,
    "backdrop_path": 영화 한 장면의 캡쳐본의 경로,
    "genre_ids": 장르 아이디들의 리스트 (여러 장르를 가질 수 있음),
    "id": 영화 id,
    "original_language": 원본 언어,
    "original_title": 원어 제목,
    "overview": 간략한 줄거리,
    "popularity": 인기도,
    "poster_path": 영화 포스터 이미지의 경로,
    "release_date": 출시일,
    "title": 한글 제목,
    "video": 전부 false 반환,
    "vote_average": 평균 평점,
    "vote_count": 투표 수
    """

    # API 응답 중 'results' 키의 값과 장르 id를 장르명으로 매핑한 결과값 반환
    return results_return

@api_router.get("/popular_movies")  # /popular_movies 경로에 GET 요청을 처리하는 엔드포인트 정의
#인기 영화들의 정보를 json 형식으로 반환하는 함수
async def popular_movies(limit: int = 3): # 가져올 개수 매개변수를 받는 함수 정의
    url = "https://api.themoviedb.org/3/movie/popular?include_adult=false&language=ko-kr&page=1" # 영화 정보를 가져올 API URL
    headers = { # API 요청 헤더
        "accept": "application/json",
        "Authorization": f"Bearer {api_token}"
    } # API 요청 헤더에는 API 읽기 엑세스 토큰을 포함
    
    async with httpx.AsyncClient() as client: # 비동기 HTTP 클라이언트 생성
       response = await client.get(url, headers=headers) # API 요청을 보내고 응답 저장
    
    if response.status_code != 200: # 응답이 성공적이지 않은 경우
        return {"Error": "Failed to fetch data"}

    return response.json()['results'][:limit] # API 응답 중 'results' 키의 값 json 형식으로 변환시켜 반환

app.include_router(api_router, prefix="/api")  # api_router를 /api 경로에 포함
