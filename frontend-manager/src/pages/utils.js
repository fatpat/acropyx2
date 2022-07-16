// ** auth
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

// ** react
import { useState, useEffect } from 'react'

// ** next
import Link from 'next/link'

// ** mui
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const Utils = () => {

  const { user, error, isLoading, checkSession } = useUser();

  useEffect(() => {
  }, [])

  return(
    <Box>
      <h1>Utils</h1>
      <List>
        <ListItem><Link href={`${process.env.NEXT_PUBLIC_API_URL}/utils/backup`}>Download Database Backup</Link></ListItem>
      </List>
    </Box>
  )
}

export default withPageAuthRequired(Utils)
