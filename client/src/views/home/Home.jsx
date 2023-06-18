import Fencing from '../../componets/home/Fencing/Fencing'
import Bibliogafi from '../../componets/home/Bibliogafi'
import InstructorHome from '../../componets/home/InstructorHome'
import { Button, Stack } from '@mui/material'

const Home = ()=>{

    return (
        <Stack justifyContent="center" alignItems="center"spacing={2}>
            <Fencing/>
            <div style={{width:'100%',height:'3em'}} >
                <Button variant='outlined' sx={{width:'92%',left:'4%'}}>Mas informacion</Button>
            </div>
            <Bibliogafi></Bibliogafi>
            <InstructorHome></InstructorHome>
        </Stack>
    )
}
export default Home