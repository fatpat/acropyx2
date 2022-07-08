// ** React Imports
import { forwardRef, useState } from 'react'

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

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { createUseGridApiEventHandler } from '@mui/x-data-grid'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

function createData(rank, name, score) {
  return { rank, name, score }
}

function TabPanel(props) {
  const { children, value, index, rows, ...other } = props

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
          <Typography>{children}</Typography>

          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell align='right'>Name</TableCell>
                  <TableCell align='right'>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {index + 1}
                    </TableCell>
                    <TableCell align='right'>{row.name}</TableCell>
                    <TableCell align='right'>{row.score.toLocaleString('en-US')}</TableCell>
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

const TabResults = ({ results }) => {
  // ** State
  const [date, setDate] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [value, setValue] = useState(-99)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
    setValue(index)
  }

  const handleBackButton = (event, index) => {
    setValue(-99)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={2}>
          <Box hidden={value == -99}>
            <IconButton aria-label='delete' onClick={event => handleBackButton(event, 0)}>
              <ArrowBackIcon />
            </IconButton>
          </Box>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} hidden={value != -99}>
            <ListItemButton selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Overall' />
            </ListItemButton>
            {results?.runs_results.map((rr, index) => (
              <ListItemButton
                key={index}
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, index + 1)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'Run ' + (index + 1)} />
              </ListItemButton>
            ))}
          </List>
          <TabPanel
            rows={results?.overall_results
              .sort((a,b) => b.score - a.score)
              .map((r, index) => createData(index, r.pilot.name, r.score))}
            index={0}
            value={value}
          >
            Overall results
          </TabPanel>
          {results?.runs_results.map((rr, index) => (
            <TabPanel
              key={index + 1}
              rows={rr.results
                .sort((a,b) => b.final_marks.score - a.final_marks.score)
                .map((r, index) => createData(index, r.pilot.name, r.final_marks.score))}
              index={index + 1}
              value={value}
            >
              Run {index + 1}
            </TabPanel>
          ))}
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabResults
