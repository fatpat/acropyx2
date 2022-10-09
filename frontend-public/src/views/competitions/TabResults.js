// ** React Imports
import { forwardRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import ListItemButton from '@mui/material/ListItemButton'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ImageIcon from '@mui/icons-material/Image'
import WorkIcon from '@mui/icons-material/Work'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import EnhancedTable from 'src/views/tables/EnhancedTable'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import SquareIcon from '@mui/icons-material/Square'
import Filter1Icon from '@mui/icons-material/Filter1'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FlightIcon from '@mui/icons-material/Flight'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { createUseGridApiEventHandler } from '@mui/x-data-grid'
import { InboxRemoveOutline } from 'mdi-material-ui'

// ** local imports
import { ordinal_suffix } from 'src/util/ordinal_suffix'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

function TabPanelOverall(props) {
  const { children, value, index, rows, handleBackButton, ...other } = props
  const [selectedPilotIndex, setSelectedPilotIndex] = useState(0)
  const [displayPilotResume, setDisplayPilotResume] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query.p) {
      setSelectedPilotIndex(router.query.p)
      setDisplayPilotResume(true)
    } else {
      setSelectedPilotIndex(0)
      setDisplayPilotResume(false)
    }
  }, [router])

  const handlePilot = (event, index) => {
    if (rows[index].tricks) {
      setSelectedPilotIndex(index)
      setDisplayPilotResume(true)
      router.push(
        {
          query: { r: router.query.r, tab: router.query.tab, p: index, cid: router.query.cid }
        },
        undefined,
        { shallow: true }
      )
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const hiddenPilotResume = (event, index) => {
    setDisplayPilotResume(false)
    router.push(
      {
        query: { r: router.query.r, tab: router.query.tab, cid: router.query.cid }
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <TableContainer component={Paper} hidden={displayPilotResume}>

            <Typography variant="h5">
              <IconButton aria-label='delete' onClick={event => handleBackButton(event, 0)}>
                <ArrowBackIcon />
              </IconButton>
              {children}
            </Typography>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Runs Results</TableCell>
                  <TableCell>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={event => handlePilot(event, index)}
                  >
                    <TableCell component='th' scope='row'>
                      {ordinal_suffix(index + 1)}
                    </TableCell>
                    <TableCell component='th'>{row.pilot.name}</TableCell>
                    <TableCell>
                      <Table aria-label='simple table'>
                        <TableBody>
                          <TableRow>
                            <TableCell>Run</TableCell>
                            <TableCell>Rank</TableCell>
                            <TableCell>Score</TableCell>
                          </TableRow>
                          {row.result_per_run.map((rr, index) => (
                            <TableRow key={index}>
                              <TableCell>{index+1}</TableCell>
                              <TableCell>{ordinal_suffix(rr.rank)}</TableCell>
                              <TableCell>{rr.score.toFixed(3).toLocaleString('en-US')}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableCell>
                    <TableCell component="th">{row.score.toFixed(3).toLocaleString('en-US')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  )
}

function TabPanelRun(props) {
  const { children, value, index, rows, handleBackButton, ...other } = props
  const [selectedPilotIndex, setSelectedPilotIndex] = useState(0)
  const [displayPilotResume, setDisplayPilotResume] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query.p) {
      setSelectedPilotIndex(router.query.p)
      setDisplayPilotResume(true)
    } else {
      setSelectedPilotIndex(0)
      setDisplayPilotResume(false)
    }
  }, [router])

  const handlePilot = (event, index) => {
    if (rows[index].tricks) {
      setSelectedPilotIndex(index)
      setDisplayPilotResume(true)
      router.push(
        {
          query: { r: router.query.r, tab: router.query.tab, p: index, cid: router.query.cid }
        },
        undefined,
        { shallow: true }
      )
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const hiddenPilotResume = (event, index) => {
    setDisplayPilotResume(false)
    router.push(
      {
        query: { r: router.query.r, tab: router.query.tab, cid: router.query.cid }
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <TableContainer component={Paper} hidden={displayPilotResume}>
            <Typography variant="h5">
              <IconButton aria-label='delete' onClick={event => handleBackButton(event, 0)}>
                <ArrowBackIcon />
              </IconButton>
              {children}
            </Typography>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={event => handlePilot(event, index)}
                  >
                    <TableCell component='th' scope='row'>
                      {index + 1}
                    </TableCell>
                    <TableCell>{row.pilot.name}</TableCell>
                    <TableCell>{row.final_marks?.score.toFixed(3).toLocaleString('en-US')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6} hidden={!displayPilotResume}>
              <Typography variant="h5">
                <IconButton aria-label='delete' onClick={event => hiddenPilotResume(event, 0)}>
                  <ArrowBackIcon />
                </IconButton>
                {children} for {rows[selectedPilotIndex].pilot.name}
              </Typography>

              <ul hidden={!rows[selectedPilotIndex].did_not_start}>
                <li>Pilot <b>D</b>id <b>N</b>ot <b>S</b>tart</li>
                <li><b>Score: {rows[selectedPilotIndex].final_marks?.score.toFixed(3).toLocaleString('en-US')}</b></li>
                <li><b>Rank: {ordinal_suffix(parseInt(selectedPilotIndex)+1)}</b></li>
              </ul>

              <Typography hidden={rows[selectedPilotIndex].did_not_start} variant='h6' gutterBottom component='div'>
                Tricks:
              </Typography>
              <ol hidden={rows[selectedPilotIndex].did_not_start}>
                {rows[selectedPilotIndex].tricks?.map((t, i) => (
                  <li key={i}>
                    {t.name
                      .split(' ')
                      .map(word => word[0].toUpperCase() + word.substring(1))
                      .join(' ')}
                  </li>
                ))}
              </ol>
              <Typography hidden={rows[selectedPilotIndex].did_not_start} variant='h6' gutterBottom component='div'>
                Marks:
              </Typography>
              <ul hidden={rows[selectedPilotIndex].did_not_start}>
                <li>Technicity: {rows[selectedPilotIndex].final_marks?.technicity.toFixed(3).toLocaleString('en-US')}</li>
                <li>Bonus percentage: {rows[selectedPilotIndex].final_marks?.bonus_percentage}%</li>
                <li>Malus: {rows[selectedPilotIndex].final_marks?.malus}%</li>
                <li>
                  Judge's marks:
                  <ul>
                    <li>Technical: {rows[selectedPilotIndex].final_marks?.judges_mark?.technical.toFixed(3).toLocaleString('en-US')}</li>
                    <li>Choreography: {rows[selectedPilotIndex].final_marks?.judges_mark?.choreography.toFixed(3).toLocaleString('en-US')}</li>
                    <li>Landing: {rows[selectedPilotIndex].final_marks?.judges_mark?.landing.toFixed(3).toLocaleString('en-US')}</li>
                  </ul>
                </li>
                <li>
                  Calculated Marks:
                  <ul>
                    <li>Technical: {rows[selectedPilotIndex].final_marks?.technical.toFixed(3).toLocaleString('en-US')}</li>
                    <li>Choreography: {rows[selectedPilotIndex].final_marks?.choreography.toFixed(3).toLocaleString('en-US')}</li>
                    <li>Landing: {rows[selectedPilotIndex].final_marks?.landing.toFixed(3).toLocaleString('en-US')}</li>
                  </ul>
                </li>
                <li>Bonus: {rows[selectedPilotIndex].final_marks?.bonus.toFixed(3).toLocaleString('en-US')}</li>
                <li><b>Score: {rows[selectedPilotIndex].final_marks?.score.toFixed(3).toLocaleString('en-US')}</b></li>
                <li><b>Rank: {ordinal_suffix(parseInt(selectedPilotIndex)+1)}</b></li>
                {rows[selectedPilotIndex].final_marks?.warnings.length > 0 &&
                  <li>
                    Warnings:
                    <ul>
                      {rows[selectedPilotIndex].final_marks?.warnings.map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  </li>
                }
                {rows[selectedPilotIndex].final_marks?.notes.length > 0 &&
                  <li>
                    Notes:
                    <ul>
                      {rows[selectedPilotIndex].final_marks?.notes.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  </li>
                }
              </ul>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  )
}

const TabResults = ({ results }) => {
  // ** State
  const [date, setDate] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [value, setValue] = useState(-99)
  const router = useRouter()

  useEffect(() => {
    if (router.query.r) {
      setSelectedIndex(parseInt(router.query.r))
      setValue(parseInt(router.query.r))
    } else {
      setSelectedIndex(1)
      setValue(-99)
    }
  }, [router])

  const routeToResult = (event, index) => {
    setSelectedIndex(index)
    setValue(index)
    router.push(
      {
        query: { r: index, tab: router.query.tab, cid: router.query.cid }
      },
      undefined,
      { shallow: true }
    )
  }

  const handleBackButton = (event, index) => {
    setValue(-99)
    router.push(
      {
        query: { tab: router.query.tab, cid: router.query.cid }
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box hidden={value == -99}></Box>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} hidden={value != -99}>
            {results.runs_results.length == 0 && 'No Results yet ...'}
            {results.runs_results.length > 0 && (
              <ListItemButton onClick={event => routeToResult(event, 0)}>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiEventsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Overall results' />
              </ListItemButton>
            )}
            {results.runs_results.map((rr, index) => (
              <ListItemButton key={index} onClick={event => routeToResult(event, index + 1)}>
                <ListItemAvatar>
                  <Avatar>
                    <FlightIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'Run ' + (index + 1) + ' results'} />
              </ListItemButton>
            ))}
          </List>
          <TabPanelOverall
            rows={results.overall_results.sort((a, b) => b.score - a.score)}
            index={0}
            value={value}
            handleBackButton={event => handleBackButton(event, 100)}
          >
            Overall results
          </TabPanelOverall>
          {results.runs_results.map((rr, index) => (
            <TabPanelRun
              key={index + 1}
              rows={rr.results.sort((a, b) => b.final_marks.score - a.final_marks.score)}
              index={index + 1}
              value={value}
              handleBackButton={event => handleBackButton(event, 100)}
            >
              Run {index + 1} results
            </TabPanelRun>
          ))}
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabResults
