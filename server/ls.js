const { spawn } = require('child_process')

const ls = spawn('sudo', ['fuser', '-k', '3000/tcp'])

ls.stdout.on('data', (data) => {
  console.log(`stdout ${data}`)
})

ls.stderr.on('data', (data) => {
  console.log(`stderr ${data}`)
})

ls.on('error', (error) => {
  console.log(`error ${error.message}`)
})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})
