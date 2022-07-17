// ** auth
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

// ** react
import { useState, useEffect } from 'react'

// ** mui
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

// ** internal
import { useNotifications } from 'src/util/notifications'
import { APIRequest } from 'src/util/backend'

const Utils = () => {
  // ** notification messages
  const [success, info, warning, error] = useNotifications()

  const { user, authError, authIsLoading, checkSession } = useUser();
  const [isLoading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  const cleanupPilots = async (e) => {
    if (!confirm("Are you sure to delete unused pilots ?")) return false
    setLoading(true)

    const [err, data, headers] = await APIRequest(`/utils/cleanup_pilots`, {
      expected_status: 204,
      method: 'POST',
    })

    if (err) error(err)
    else success("Pilots cleanup successful")
    setLoading(false)
    return false
  }

  useEffect(() => {
  }, [])

  return(
    <Box>
      { err && <p>Error: {err}</p>}
      <h1>Utils</h1>
      <List>
        <ListItem><Link href={new URL('/utils/backup', process.env.NEXT_PUBLIC_API_URL).toString()}>Download Database Backup</Link></ListItem>
        <ListItem><Link href='#' onClick={cleanupPilots}>Cleanup unused pilots</Link></ListItem>
      </List>
    </Box>
  )
}

export default withPageAuthRequired(Utils)
