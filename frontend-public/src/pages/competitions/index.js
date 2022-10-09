// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import EnhancedTable from 'src/views/tables/EnhancedTable'
import { get } from 'src/util/backend'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    type: 'ACTION',
    path: '/competitions',
    label: 'Name'
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Type'
  },
  {
    id: 'location',
    numeric: false,
    disablePadding: false,
    label: 'Location'
  },
  {
    id: 'start_date',
    numeric: false,
    disablePadding: false,
    label: 'Start date'
  },
  {
    id: 'pilots_or_teams',
    numeric: false,
    disablePadding: false,
    label: 'Registered Pilots or Team'
  }
]

function createData(id, name, type, location, start_date, pilots_or_teams) {
  return {
    id,
    name,
    type,
    location,
    start_date,
    pilots_or_teams
  }
}

const Dashboard = ({ data }) => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>Archived competitions</Typography>
        </Grid>
        {Object.keys(data).sort().reverse().map(year => (
          <Grid item xs={12} key={year}>
            <Card>
              <Typography variant='h5' style={{'text-align':'center'}}>{year}</Typography>
              <EnhancedTable
                rows={data[year].map(p =>
                  createData(
                    p.code,
                    p.name,
                    p.type,
                    p.location,
                    p.start_date,
                    p.type == 'solo' ? p.number_of_pilots : p.number_of_teams
                  )
                )}
                headCells={headCells}
                orderById='start_date'
                defaultOrder='desc'
                defaultRowsPerPage='2'
                pagination={false}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </ApexChartWrapper>
  )
}

// This gets called on every request
export async function getStaticProps() {
  let data = await get('/public/competitions/')

  data = data.filter(c => c.state === 'closed')

  let years = [...new Set(data.map(c => (new Date(c.start_date)).getFullYear()))]
  let d = {}
  for (const i in years) {
    d[years[i]] = data.filter(c => (new Date(c.start_date)).getFullYear() === years[i])
  }
  data = d

  // Pass data to the page via props
  return { props: { data }, revalidate: parseInt(process.env.NEXT_CACHE_DURATION) }
}

export default Dashboard
