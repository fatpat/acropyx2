import logging
import core.logging
from fastapi import FastAPI, Request
from starlette.middleware.cors import CORSMiddleware
import time
from fastapi_cache import FastAPICache
from fastapi_cache.backends.inmemory import InMemoryBackend

from core.config import settings
from core.database import clean_database
from routers.api import router
from controllers.judges import JudgeCtrl
from controllers.pilots import PilotCtrl
from controllers.teams import TeamCtrl
from controllers.tricks import TrickCtrl
from controllers.competitions import CompCtrl

log = logging.getLogger(__name__)
app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.PROJECT_DESCRIPTION,
    version=settings.VERSION,
    contact={
        "name": "Jérôme Loyet",
        "url": "https://github.com/fatpat",
        "email": "jerome@loyety.net",
    },
    license_info= {
        "name": "WTFPL 2",
        "url": "http://www.wtfpl.net/txt/copying/"
    }
)

origins = [
    'http://127.0.0.1:3001',
    'http://localhost:3001',
    'https://acropyx.herokuapp.com',
    'https://preprod-acropyx.herokuapp.com',
    'https://manager-acropyx.herokuapp.com',
    'https://preprod-manager-acropyx.herokuapp.com',
    'https://fatpat.github.io',
    'https://acropyx.lukedeweert.nl',
    'https://acroworldtour.com',
    'http://109.37.130.22',
    'https://109.37.130.22',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=['Content-Disposition'],
)


@app.on_event("startup")
async def startup_event():
    log.debug("starup_event()")
    FastAPICache.init(InMemoryBackend())
    if "test" in settings.DATABASE:
        log.debug(f"Using a testing database")
        await clean_database()

    JudgeCtrl.start()
    PilotCtrl.start()
    TeamCtrl.start()
    TrickCtrl.start()
    CompCtrl.start()

# add a X-Process-Time header
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response


app.include_router(router)
