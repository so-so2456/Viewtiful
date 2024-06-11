# Viewtiful

영화의 정보를 알려주는 위키 사이트

## Function

1. 영화 제목을 검색하여 해당 영화의 정보를 보여줍니다.
2. 인기 영화 Top 3를 보여주며, 클릭하면 해당 영화의 정보를 보여줍니다.
3. 영화 정보는 제목, 포스터, 평점, 장르, 개봉일, 개요, 리뷰입니다.

## Screen

![image](https://github.com/so-so2456/Viewtiful/assets/65073648/c8e05598-3ade-415f-9b99-e6c1b9829c7f)
<img width="452" alt="image" src="https://github.com/so-so2456/Viewtiful/assets/65073648/d8f677a0-1bd2-4374-95eb-b6c1e215fa0c">
![image](https://github.com/so-so2456/Viewtiful/assets/65073648/88853935-0364-4209-a0dd-3cfcf3769b8a)

## Language

프론트엔드는 Svelte(JS 기반)

![image](https://github.com/so-so2456/Viewtiful/assets/65073648/12ae2f0b-275b-476c-bf0a-6040d4bb10d8)

No Virtual Dom!! 🫢

스벨트는 실행 시점이 아닌 빌드 시점에 모든 코드들을 바닐라 js로 변경

백엔드는 FastAPI(python 기반)

![image](https://github.com/so-so2456/Viewtiful/assets/65073648/8c852446-3f0a-4725-977e-ebd1a2f8fd36)

FastAPI >> Flask (성능도 좋고, 만들기도 쉬우니 "Fast"API)

Swagger UI 등 자동 문서화("{url}/docs")

## Deployment

Heroku(backend) & Vercel(frontend)

[Viewtiful](https://viewtiful-eta.vercel.app)

## Dependency

```
// frontend
$ npm --version
10.1.0

"devDependencies": {
  "@rollup/plugin-commonjs": "^24.0.0",
  "@rollup/plugin-node-resolve": "^15.0.0",
  "@rollup/plugin-replace": "^5.0.7",
  "@rollup/plugin-terser": "^0.4.0",
  "dotenv": "^16.4.5",
  "rollup": "^3.15.0",
  "rollup-plugin-css-only": "^4.3.0",
  "rollup-plugin-livereload": "^2.0.0",
  "rollup-plugin-svelte": "^7.1.2",
  "svelte": "^3.55.0"
},
"dependencies": {
  "sirv-cli": "^2.0.0"
}


// backend
python = "^3.12"
fastapi = "^0.111.0"
uvicorn = "^0.29.0"
jinja2 = "^3.1.4"
aiofiles = "^23.2.1"
python-dotenv = "^1.0.1"
httpx = "^0.27.0"
```

## Command

```
git clone https://github.com/so-so2456/Viewtiful.git

// frontend(you should install npm!!)
$ cd frontend
$ npm install
$ npm run dev
// http://localhost:8080

//backend(you should install python!!)
$ cd backend
$ pip install -r requirements.txt
$ uvicorn main:app --reload
// http://localhost:8000
```
