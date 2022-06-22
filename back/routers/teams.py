import logging
from http import HTTPStatus
from fastapi import APIRouter, Depends, Body, HTTPException
from core.security import auth
from models.teams import Team, TeamExport
from typing import List
from fastapi.responses import Response

log = logging.getLogger(__name__)
teams = APIRouter()

#
# Get all teams
#
@teams.get(
    "/",
    response_description="List all teams",
    response_model=List[TeamExport],
)
async def list(deleted: bool = False):
    teams = []
    for team in await Team.getall(deleted):
        teams.append(await team.export())
    return teams

#
# Get one team
#
@teams.get(
    "/{id}",
    response_description="Get a Team",
    response_model=TeamExport,
)
async def get(id: str, deleted: bool = False):
    team = await Team.get(id, deleted)
    log.debug(team)
    return await team.export()

#
# Create a new Team
#
@teams.post(
    "/new",
    status_code=201,
    response_description="Add new Team",
    response_model=TeamExport,
    dependencies=[Depends(auth)],
)
async def create(team: Team = Body(...)):
    team = await team.create()
    return await team.export()

#
# Update an existing Team
#
@teams.put(
    "/{id}",
    status_code=204,
    response_description="Update an existing Team",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def update(id: str, team: Team = Body(...)):
    await Team.update(id, team)

#
# Delete a Team
#
@teams.delete(
    "/{id}",
    status_code=204,
    response_description="Delete a Team",
    response_class=Response,
    dependencies=[Depends(auth)],
)
async def delete(id: str, restore: bool = False):
    await Team.delete(id, restore)
