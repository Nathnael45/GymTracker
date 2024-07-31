import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';


const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(()=> {
    fetch('http://localhost:8001/workouts').then(
      res=> {
        return res.json();
      }
    ).then((data) =>{
      console.log(data);
      setWorkouts(data);
    }
    )
  },[])
    return (
        <div className = 'home'>
            <title>
              Gym Tracker Site
            </title>
            <nav>
                <button>
                    <Link to="/create" className='link'><strong>Add a Workout</strong></Link>
                </button>
            </nav>
            
            <div>
              <h2> Previous Workouts</h2>
                {workouts && workouts.map((workout)=> (
                  <Link to = {`/workouts/${workout.id}`}>
                    <div className="workout-preview" key={workouts.id}>
                          <p className='label'><strong>{workout.date}</strong> <br /> <span>{workout.type} </span>                 </p>
                          
                    </div> 
                  </Link>
                ))}
            </div>
            
            
           
        </div>
    );
}
 
export default Home;