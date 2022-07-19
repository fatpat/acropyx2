import logging
import os
from datetime import datetime
from http import HTTPStatus
from fastapi import APIRouter, Depends, Body, HTTPException, Request, BackgroundTasks
from typing import List
from fastapi.responses import Response, HTMLResponse, FileResponse

from core.security import auth

from models.competitions import Competition, CompetitionExport, CompetitionNew, CompetitionState, CompetitionPublicExport
from models.competition_configs import CompetitionConfig
from models.runs import Run, RunExport
from models.marks import FinalMark, FinalMarkExport
from models.flights import Flight, FlightNew, FlightExport
from models.results import RunResults, CompetitionResults, CompetitionResultsExport, RunResultsExport
from controllers.competitions import CompCtrl
from controllers.utils import UtilsCtrl

log = logging.getLogger(__name__)
competitions = APIRouter()

#
# Get all competitions
#
@competitions.get(
    "/",
    response_description="List all competitions",
    response_model=List[CompetitionPublicExport],
    dependencies=[Depends(auth)]
)
async def list():
    comps = []
    for comp in await Competition.getall():
        comp = await comp.export_public()
        if comp is not None:
            comps.append(comp)
    return comps

#
# Get one competition
#
@competitions.get(
    "/{id}",
    response_description="Get a Competition",
    response_model=CompetitionExport,
    dependencies=[Depends(auth)]
)
async def get_by_id(id: str, deleted: bool = False):
    comp = await Competition.get(id, deleted)
    return await comp.export(cache=await UtilsCtrl.get_cache())

#
# Create a new Competition
#
@competitions.post(
    "/new",
    status_code=201,
    response_description="Add new Competition",
    response_model=CompetitionExport,
    dependencies=[Depends(auth)],
)
async def create(competition: CompetitionNew = Body(...)):
    comp = await competition.create()
    return await comp.export(cache=await UtilsCtrl.get_cache())

#
# Update a Competition
#
@competitions.patch(
    "/{id}",
    status_code=204,
    response_description="Update a competition",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def update(id: str, updated_comp: CompetitionNew = Body(...)):
    comp = await Competition.get(id)
    await comp.update(updated_comp)

#
# Update Pilot list
#
@competitions.patch(
    "/{id}/pilots",
    status_code=204,
    response_description="Replace the pilot's list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_pilots(id: str, pilots: List[int] = Body(...)):
    comp = await Competition.get(id)
    await comp.update_pilots(pilots)

#
# Update Teams list
#
@competitions.patch(
    "/{id}/teams",
    status_code=204,
    response_description="Replace the teams's list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_teams(id: str, teams: List[str] = Body(...)):
    comp = await Competition.get(id)
    await comp.update_teams(teams)

#
# Update Judges list
#
@competitions.patch(
    "/{id}/judges",
    status_code=204,
    response_description="Replace the judge's list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_judges(id: str, judges: List[str] = Body(...)):
    comp = await Competition.get(id)
    await comp.update_judges(judges)

#
# Update Repeatable Tricks list
#
@competitions.patch(
    "/{id}/repeatable_tricks",
    status_code=204,
    response_description="Replace the repeatable tricks list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_repeatable_tricks(id: str, repeatable_tricks: List[str] = Body(...)):
    comp = await Competition.get(id)
    await comp.update_repeatable_tricks(repeatable_tricks)


#
# Update Config
#
@competitions.patch(
    "/{id}/config",
    status_code=204,
    response_description="Replace the competition config",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_config(id: str, config: CompetitionConfig = Body(...)):
    comp = await Competition.get(id)
    await comp.update_config(config)

@competitions.delete(
    "/{id}",
    status_code=204,
    response_description="Delete a Competition",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def delete(id: str, restore: bool = False):
    await Competition.delete(id, restore)

@competitions.post(
    "/{id}/open",
    status_code=204,
    response_description="Open a competition (change status from not started to open)",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def open(id: str):
    comp = await Competition.get(id)
    await comp.open()

@competitions.post(
    "/{id}/close",
    status_code=204,
    response_description="Close a competition (change status from open to close)",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def close(id: str):
    comp = await Competition.get(id)
    await comp.close()

@competitions.post(
    "/{id}/reopen",
    status_code=204,
    response_description="Reopen a closed competition (change status from close to open)",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def close(id: str):
    comp = await Competition.get(id)
    await comp.reopen()

@competitions.post(
    "/{id}/runs/new",
    status_code=201,
    response_description="Create a new run for a competition",
    response_model=RunExport,
    dependencies=[Depends(auth)],
)
async def new_run(id: str, pilots_to_qualify: int = 0):
    comp = await Competition.get(id)
    run = await comp.new_run(pilots_to_qualify)
    return await run.export(cache=await UtilsCtrl.get_cache())

@competitions.get(
    "/{cid}/runs/{rid}",
    response_description="Retrieve a run",
    response_model=RunExport,
    dependencies=[Depends(auth)],
)
async def get_run(cid: str, rid: int):
    comp = await Competition.get(cid)
    run = await comp.run_get(rid)
    return await run.export(cache=await UtilsCtrl.get_cache())

#
# Update Run Pilot list
#
@competitions.patch(
    "/{id}/runs/{i}/pilots",
    status_code=204,
    response_description="Replace the run pilots list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_run_pilots(id: str, i: int, pilots: List[int] = Body(...)):
    comp = await Competition.get(id)
    await comp.run_update_pilots(i, pilots)

#
# Update Teams list
#
@competitions.patch(
    "/{id}/runs/{i}/teams",
    status_code=204,
    response_description="Replace the run teams list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_run_teams(id: str, i: int, teams: List[str] = Body(...)):
    comp = await Competition.get(id)
    await comp.run_update_teams(i, teams)

#
# Update Judges list
#
@competitions.patch(
    "/{id}/runs/{i}/judges",
    status_code=204,
    response_description="Replace the run judges list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_run_judges(id: str, i: int, judges: List[str] = Body(...)):
    comp = await Competition.get(id)
    await comp.run_update_judges(i, judges)

#
# Update Repeatable Tricks list
#
@competitions.patch(
    "/{id}/runs/{i}/repeatable_tricks",
    status_code=204,
    response_description="Replace the run repeatable tricks list",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_run_repeatable_tricks(id: str, i: int, repeatable_tricks: List[str] = Body(...)):
    comp = await Competition.get(id)
    await comp.run_update_repeatable_tricks(i, repeatable_tricks)


#
# Update Config
#
@competitions.patch(
    "/{id}/runs/{i}/config",
    status_code=204,
    response_description="Replace the run config",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def patch_run_config(id: str, i: int, config: CompetitionConfig = Body(...)):
    comp = await Competition.get(id)
    await comp.run_update_config(i, config)

@competitions.post(
    "/{id}/runs/{i}/open",
    status_code=204,
    response_description="Open a run (change status from not started to open)",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def run_open(id: str, i: int):
    comp = await Competition.get(id)
    await comp.run_open(i)

@competitions.post(
    "/{id}/runs/{i}/close",
    status_code=204,
    response_description="Close a run (change status from not started to open)",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def run_close(id: str, i: int):
    comp = await Competition.get(id)
    await comp.run_close(i)

@competitions.post(
    "/{id}/runs/{i}/reopen",
    status_code=204,
    response_description="Reopen a run (change status from not started to open)",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def run_reopen(id: str, i: int):
    comp = await Competition.get(id)
    await comp.run_reopen(i)

@competitions.post(
    "/{id}/runs/{i}/flights/{pilot_team_id}/new",
    response_description="Simulate a run and get the detail score",
    response_model=FinalMarkExport,
    dependencies=[Depends(auth)],
)
async def flight_save(id: str, i: int, pilot_team_id, save: bool, published:bool = False, flight: FlightNew = Body(...)):
    log.debug(f"flight_save {pilot_team_id}")
    comp = await Competition.get(id)
    mark = await comp.flight_save(run_i=i, id=pilot_team_id, flight=flight, save=save, published=published)
    return await mark.export(cache=await UtilsCtrl.get_cache())

@competitions.get(
    "/{id}/results",
    status_code=200,
    response_description="Retrieve the results of the competition",
    response_model=CompetitionResultsExport,
    dependencies=[Depends(auth)],
)
async def get_all_results(id: str):
    comp = await Competition.get(id)
    res = await comp.results()
    return await res.export(cache=await UtilsCtrl.get_cache())

@competitions.get(
    "/{id}/csv_results",
    status_code=200,
    response_description="Rietrieve the results of the competition",
    response_class=FileResponse,
    dependencies=[Depends(auth)],
)
async def get_csv_results(id: str, bg_tasks: BackgroundTasks):
    res = await get_all_results(id)
    csv_file = CompCtrl.comp_to_csv(res)
    bg_tasks.add_task(os.remove, csv_file)
    filename=f"export-{id}-{datetime.now().strftime('%Y-%m-%d-%H%M%S')}.csv"
    return FileResponse(path=csv_file, filename=filename, background=bg_tasks)

@competitions.get(
    "/{id}/results/{i}",
    status_code=200,
    response_description="Retrieve the results of a specific run of competition",
    response_model=RunResultsExport,
    dependencies=[Depends(auth)],
)
async def run_get_results(id: str, i: int, published_only: bool = True):
    comp = await Competition.get(id)
    res = await comp.run_results(run_i=i, published_only=published_only)
    return await res.export(cache=await UtilsCtrl.get_cache())
