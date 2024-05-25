import os
import httpx
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv


load_dotenv()  # .env 파일을 불러와 환경 변수 설정

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

api_token = os.getenv('TMDB_API_TOKEN') # 환경 변수에서 API TOKEN 가져오기

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



api_router = APIRouter()

@api_router.get("/post/{pk}")
def index(pk: int):
    return {"data": pk}




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


    results_return = []
    results = response.json()['results']
    for result in results:
        genre_names = []
        genre_ids = result['genre_ids']

        # print(genre_ids)
        # convert id to film name

        for genre_id in genre_ids:
            try:
                genre_name = genres[genre_id]
                genre_names.append(genre_name)
            except:
                print("Error genre id:", genre_id)

        result['genre_name'] = genre_names

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

    return results_return # API 응답 중 'results' 키의 값 json 형식으로 변환시켜 반환


app.include_router(api_router, prefix="/api")
