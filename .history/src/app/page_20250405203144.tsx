'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Paper,
  Avatar,
  TextField,
  LinearProgress,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { blue, green, red, yellow, grey } from '@mui/material/colors'

export default function Home() {
  const [timeIn, setTimeIn] = useState('10:00 PM')
  const [timeOut, setTimeOut] = useState('--')
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ 
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      bgcolor: '#f9fafb',
      p: '1vh'
    }}>
      <Box sx={{ 
        height: '98vh',
        display: 'grid',
        gridTemplateAreas: {
          xs: `
            "header"
            "tracker"
            "form"
            "sales"
            "inventory"
          `,
          md: `
            "header header"
            "tracker form"
            "sales inventory"
          `
        },
        gridTemplateColumns: {
          xs: '1fr',
          md: '2fr 1fr'
        },
        gridTemplateRows: {
          xs: 'auto auto auto auto auto',
          md: 'auto 1fr 0.5fr'
        },
        gap: '1vh',
      }}>
        {/* Header */}
        <Paper sx={{ 
          gridArea: 'header',
          p: '1vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: '1vh', md: 0 },
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
        }}>
          <Box>
            <Typography variant="h6" fontSize="2vh" fontWeight="bold">Laundry King</Typography>
            <Typography fontSize="1.5vh" color="textSecondary">Laundry Shop POS Daily Entry</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1vh" justifyContent={{ xs: 'space-between', md: 'flex-end' }}>
            <Box>
              <Typography fontSize="2.5vh" color={blue[600]}>10:35 PM</Typography>
              <Typography fontSize="1.2vh">Time In: {timeIn}<br />Time Out: {timeOut}</Typography>
            </Box>
            <Avatar 
              alt="User" 
              src="https://via.placeholder.com/60" 
              sx={{ width: '5vh', height: '5vh' }} 
            />
            <Box display="flex" flexDirection={{ xs: 'row', md: 'column' }} gap="1vh">
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  fontSize: '1.5vh',
                  py: '0.5vh',
                  px: '1vh',
                  minWidth: '10vh',
                  bgcolor: blue[600],
                  '&:hover': { bgcolor: blue[800] }
                }}
              >
                Clock In
              </Button>
              <Button 
                variant="contained"
                size="small"
                sx={{ 
                  fontSize: '1.5vh',
                  py: '0.5vh',
                  px: '1vh',
                  minWidth: '10vh',
                  bgcolor: blue[600],
                  '&:hover': { bgcolor: blue[800] }
                }}
              >
                Clock Out
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Daily Tracker */}
        <Paper sx={{ 
          gridArea: 'tracker',
          p: '1vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          minHeight: 0
        }}>
          <Typography fontSize="1.8vh" fontWeight="medium" mb="1vh">Daily Tracker</Typography>
          <Box component="table" sx={{ 
            width: '100%',
            borderCollapse: 'collapse',
            flex: 1,
            '& th, & td': {
              border: '1px solid #e5e7eb',
              p: '0.5vh',
              textAlign: 'center',
              fontSize: '1.5vh',
              whiteSpace: 'nowrap'
            }
          }}>
            <Box component="thead">
              <Box component="tr">
                <Box component="th">Time</Box>
                <Box component="th">Task</Box>
                <Box component="th">Notes</Box>
              </Box>
            </Box>
            <Box component="tbody">
              <Box component="tr">
                <Box component="td">10:00</Box>
                <Box component="td">Drop Off</Box>
                <Box component="td">3 bags</Box>
              </Box>
              <Box component="tr">
                <Box component="td">11:00</Box>
                <Box component="td">Soap Refill</Box>
                <Box component="td">Machine #2</Box>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Form Section */}
        <Paper sx={{ 
          gridArea: 'form',
          p: '1vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          minHeight: 0
        }}>
          <Typography fontSize="1.8vh" fontWeight="medium" mb="1vh">April 5, 2025</Typography>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1vh',
            mb: '1vh'
          }}>
            {['Coin', 'Hopper', 'Soap', 'Vending', 'Drop Off 1', 'Drop Off 2'].map((label) => (
              <TextField
                key={label}
                size="small"
                placeholder={label}
                inputProps={{ style: { fontSize: '1.5vh' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '4vh',
                    borderRadius: '6px',
                    '& fieldset': {
                      borderColor: '#e5e7eb'
                    }
                  }
                }}
              />
            ))}
          </Box>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1vh',
            flex: 1,
            '& .MuiButton-root': {
              fontSize: '1.8vh',
              minHeight: '4vh'
            }
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                variant="contained"
                sx={{
                  bgcolor: grey[200],
                  color: 'black',
                  '&:hover': { bgcolor: grey[300] }
                }}
              >
                {num}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                bgcolor: green[500],
                color: 'white',
                '&:hover': { bgcolor: green[600] }
              }}
            >
              0
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: yellow[500],
                '&:hover': { bgcolor: yellow[600] }
              }}
            >
              .
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: red[500],
                color: 'white',
                '&:hover': { bgcolor: red[600] }
              }}
            >
              Del
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: blue[500],
                color: 'white',
                '&:hover': { bgcolor: blue[600] }
              }}
            >
              Clr
            </Button>
            <Button
              variant="contained"
              sx={{
                gridColumn: 'span 3',
                bgcolor: blue[600],
                color: 'white',
                '&:hover': { bgcolor: blue[800] }
              }}
            >
              Save
            </Button>
          </Box>
        </Paper>

        {/* Monthly Sales */}
        <Paper sx={{ 
          gridArea: 'sales',
          p: '1vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          minHeight: 0
        }}>
          <Typography fontSize="1.8vh" fontWeight="medium" mb="1vh">Monthly Sales</Typography>
          <Box sx={{ 
            display: 'flex',
            gap: '1vh',
            alignItems: 'flex-end',
            flex: 1,
            '& > div': {
              flex: 1,
              minWidth: '2vh'
            }
          }}>
            {[60, 40, 80, 55, 70, 60, 65].map((height, i) => (
              <Box
                key={i}
                sx={{
                  height: `${height}%`,
                  bgcolor: blue[600],
                  borderRadius: '4px'
                }}
              />
            ))}
          </Box>
        </Paper>

        {/* Inventory */}
        <Paper sx={{ 
          gridArea: 'inventory',
          p: '1vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          minHeight: 0
        }}>
          <Typography fontSize="1.8vh" fontWeight="medium" mb="1vh">Inventory</Typography>
          {[{ name: 'Soap', value: 70 }, { name: 'Detergent', value: 50 }].map((item, i) => (
            <Box key={i}>
              <Typography fontSize="1.5vh">{item.name}</Typography>
              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{
                  height: '2vh',
                  borderRadius: '4px',
                  bgcolor: grey[200],
                  '& .MuiLinearProgress-bar': {
                    bgcolor: blue[600]
                  }
                }}
              />
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  )
} 