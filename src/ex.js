import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';


const Ex = () => {
    const {id } = useParams()
    const {data:workout,error,isPending} = useFetch('http://localhost:8001/workouts/' + id);
    const navigate = useNavigate();

    const handleClick = ()=>{
        fetch('http://localhost:8001/workouts/' + workout.id,
            {
                method: 'DELETE'
            }
        ).then(() =>{
            navigate('/');
        })
    }
    const goBack = () =>{
        navigate(-1);
      }
    
    return ( <div className="Excersises">
            {isPending && <div>Loading...</div>}
            {error && <div>{error} </div>}
            
           
            {workout && (
                
                <article>
                    <h2>{workout.date}</h2>
                    <h4> Workout type: {workout.type}</h4>
                    
                 
                    {workout.excersises.map(excersise =>(
                        <div className="excersises">
                            <p> <strong>{excersise[0]} </strong><br />
                            Excersise : {excersise[1]} <br />
                            Weight (lbs): {excersise[2]} <br />
                            Sets: {excersise[3]} <br />
                            Reps per Set: {excersise[4]}</p>
                            
                        </div>
                    ))}
                        
                    
                    
                    
                    <button onClick={handleClick}>Delete</button>
                </article>
        )}
    <button className='back' onClick={goBack}>Back</button>
    </div>);
}
 
export default Ex;