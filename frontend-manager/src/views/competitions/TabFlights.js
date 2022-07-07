// ** React Imports
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import AddIcon from '@mui/icons-material/Add'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import Editable from 'src/components/Editable'
import Autocomplete from '@mui/material/Autocomplete'
import NativeSelect from '@mui/material/NativeSelect'


// ** local
import EnhancedTable from 'src/views/tables/EnhancedTable'
import { useNotifications } from 'src/util/notifications'
import { APIRequest, useUniqueTricks } from 'src/util/backend'

const SelectMark = (props) => {
  return (
    <NativeSelect onChange={e => {props.onChange(e)}}>
      { Array.from({length: 21}, (v, k) => k*0.5).map(i => (<option value={i}>{i}</option>))}
    </NativeSelect>
  )
}

const TabFlights = ({ comp, run, rid }) => {
  // ** notification messages
  const [success, info, warning, error] = useNotifications()

  // ** states
  const [currentFlight, setCurrentFlight] = useState(0)
  const [pilot, setPilot] = useState(null)
  const [data, setData] = useState({
    tricks: [],
    marks: [],
    did_not_start: false,
    warnings: []
  })
  const [result, setResult] = useState({
      judges_mark:{}
  })
  const [uniqueTricks] = useUniqueTricks(comp.type)
  const [resultsOK, setResultsOK] = useState(false)

  // ** refs
  const nameRef = useRef()

  const prevPilot = () => {
    if (currentFlight == 0) return
    currentFlight -= 1
    setPilot(run.pilots[currentFlight])
    setCurrentFlight(currentFlight)
  }

  const nextPilot = () => {
    if (currentFlight+1 >= run.pilots.length)  return
    currentFlight += 1
    setPilot(run.pilots[currentFlight])
    setCurrentFlight(currentFlight)
  }

  const simulateScore = async(data) => {

    const body = {
      tricks: data.tricks.filter(t => t!=null).map(t => t.name),
      marks: data.marks,
      did_no_start: data.did_not_start,
      warnings: data.warnings,
    }

    const [err, retData, headers] = await APIRequest("/scores/simulate/solo", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })

    if (err) {
        console.log(`error while simlating score: ${err}`)
        setResult({
          judges_mark:{}
        })
        setResultsOK(false)
        return
    }
    console.log("simulated score:", retData) 
    setResult(retData)
    setResultsOK(true)
  }

  const setMark = (type, judge, mark) => {
    for (const [i, m] of data.marks.entries()) {
        if (data.marks[i].judge == judge._id) {
          data.marks[i][type] = mark
          setData(data)
          simulateScore(data)
          return
        }
    }
    var m = {judge: judge._id}
    m[type] = mark
    data.marks.push(m)
    setData(data)
    simulateScore(data)
  }

  const saveResults = async(publish) => {

    const body = {
      tricks: data.tricks.filter(t => t!=null).map(t => t.name),
      marks: data.marks,
      did_no_start: data.did_not_start,
      warnings: data.warnings,
    }

    const [err, retData, headers] = await APIRequest(`/competitions/${comp.code}/runs/${rid}/flights/${pilot.civlid}/new?published=${publish}&save=${true}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })

    if (err) {
        error(`error while saving score: ${err}`)
    }

    success(`${pilot.name}'s flights saved with a ${retData.score} score`)
  }

  const headCells = [
    {
      id: 'rank',
    },
    {
      id: 'pilot',
      rewrite: (p) => p.name,
    },
    {
      id: 'score',
      numeric: true,
    }
  ]

  useEffect(() => {
    currentFlight = 0
    setPilot(run.pilots.sort((a,b) => b.rank-a.rank)[currentFlight])
    setCurrentFlight(currentFlight)
  }, [])

  return (
    <CardContent>
{ pilot &&
      <Grid container>
        <Grid item xs={1} sm={1}>
            <IconButton onClick={prevPilot} >
              <NavigateBeforeIcon />
            </IconButton>
        </Grid>
        <Grid item xs={10} sm={10}>
                    <Autocomplete
                      id="autocomplete-pilot"
                      options={run.pilots.sort((a,b) => b.rank-a.rank)}
                      value={pilot}
                      getOptionLabel={(p) => `${p.name} (${p.civlid})`}
                      renderInput={(params) => <TextField {...params} name="pilot" label="Pilot" />}
                      onChange={(e, v) => {
                        if (!v) return
                        for(const [i,p] of run.pilots.entries()){
                            if (p.civlid == v.civlid) {
                                setPilot(v)
                                setCurrentFlight(i)
                                return
                            }
                        }
                      }}
                    />
        </Grid>
        <Grid item xs={1} sm={1}>
            <IconButton onClick={nextPilot} >
              <NavigateNextIcon />
            </IconButton>
        </Grid>
      </Grid>
}
      <Grid container spacing={2}>
      </Grid>
      <Grid container spacing={2}>
        {/* 1st column / maneuvers*/}
        <Grid container xs={6}>
            <Grid xs={12}>
              <Typography variant="h5">Maneuvers</Typography>
            </Grid>
{ [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
            <Grid xs={12} key={i}>
                    <Autocomplete
                      id="autocomplete-trick-{i}"
                      key="autocomplete-trick-{i}"
                      options={uniqueTricks}
                      getOptionLabel={(p) => `${p.name} (${p.acronym}) (${p.technical_coefficient})`}
                      renderInput={(params) => <TextField {...params} name="trick" />}
                      onChange={(e, v) => {
                          data.tricks[i] = v
                          simulateScore(data)
                          setData(data)
                      }}
                    />
            </Grid>
))}
        </Grid>
        {/* 2nd column */}
        <Grid container xs={6}>
          {/* marks */}
          <Grid container xs={12}>
            <Typography variant="h5">Marks</Typography>
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
    <TableHead>
      <TableRow>
          <TableCell>
            Judge
          </TableCell>
          <TableCell>
            Technical
          </TableCell>
          <TableCell>
            Choreography
          </TableCell>
          <TableCell>
            Landing
          </TableCell>
{comp.type == 'synchro' &&
          <TableCell>
            Synchro
          </TableCell>
}
      </TableRow>
    </TableHead>
            <TableBody>
{ run.judges.map((j) => {
    return (
              <TableRow>
                <TableCell>
                  <Typography>{ j.name }</Typography>
                </TableCell>
                <TableCell>
                  <SelectMark onChange={e => {setMark('technical', j, e.target.value)}}/>
                </TableCell>
                <TableCell>
                  <SelectMark onChange={e => {setMark('choreography', j, e.target.value)}}/>
                </TableCell>
                <TableCell>
                  <SelectMark onChange={e => {setMark('landing', j, e.target.value)}}/>
                </TableCell>
{comp.type == 'synchro' &&
                <TableCell>
                  <SelectMark onChange={e => {setMark('synchro', j, e.target.value)}}/>
                </TableCell>
}
            </TableRow>
)})}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
          </Grid>
          {/* scores */}
          <Grid container xs={12}>
            <Typography variant="h5">Scores</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Technicity: {result.technicity ?? ""}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>% Bonus: {result.bonus_percentage ?? ""}%</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Judge's marks</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Technical: {result.judges_mark.technical ?? ""}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Choreography: {result.judges_mark.choreography ?? ""}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Landing: {result.judges_mark.landing ?? ""}</Typography>
                  </TableCell>
{comp.type == 'synchro' &&
                  <TableCell>
                    <Typography>Synchro: {result.judges_mark.synchro ?? ""}</Typography>
                  </TableCell>
}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Final's marks</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Technical: {result.technical ?? ""}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Choreography: {result.choreography ?? ""}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Landing: {result.landing ?? ""}</Typography>
                  </TableCell>
{comp.type == 'synchro' &&
                  <TableCell>
                    <Typography>Synchro: {result.synchro ?? ""}</Typography>
                  </TableCell>
}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Bonuses: {result.bonus ?? ""}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Final Score: {result.score ?? ""}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          {/* actions */}
          <Grid container xs={12}>
              <Grid item xs={6}>
                <Button variant="contained" disabled={!resultsOK} onClick={e => saveResults(false)}>Save Results</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" disabled={!resultsOK} onClick={e => saveResults(true)}>Save & Publish Results</Button>
              </Grid>
{/*
              <Grid item xs={6}>
                <Button disabled={!resultsOK}>Save Results + next Run</Button>
              </Grid>
              <Grid item xs={6}>
                <Button disabled={!resultsOK}>Publish Results + next Run</Button>
              </Grid>
*/}
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabFlights
