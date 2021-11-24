import React from 'react'
import {Grid, Paper, TextField} from '@material-ui/core'

import style from './style.css'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SignIn=()=>{
	
	const paperStyle={padding:20, height:'70vh', width:"60vh" , margin:" 20px  auto"}

	return(
		
		<Grid>
			<Paper elevation={10} style={paperStyle}>

			
				<Grid align="center" className="username_tf"> 
					<TextField id="outlined-basic" label="" variant="outlined" placeholder='Enter username' size='small' fullWidth  required/>
				</Grid>
				<Grid className="first_Last_name">
					<TextField id="outlined-basic" label="" variant="outlined" placeholder='First Name' type= 'password'  size='small'  required/>
					<TextField id="outlined-basic" label="" variant="outlined" placeholder='Last Name' type= 'password'  size='small'  required/>
				</Grid>

				<Grid align="center" className="email_tf"> 
					<TextField id="outlined-basic" label="" variant="outlined" placeholder='Email' size='small' fullWidth  required/>
				</Grid>


				
					<Button type='submit' color='primary' variant='contained' fullWidth>Sign In  </Button>
					<FormControlLabel


						control={
							<Checkbox
								name="Checkb"
								color="primary"

							/>
							}

					
						label="I have read and agree to the Terms of Service" 
					/>
				
				
				

				
			</Paper>
		</Grid>	
		)
}

export default SignIn