
import {useDispatch, useSelector} from'react-redux';
import { increament,decreament } from './Slice';
const Display = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>(state.users.count));
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={()=>dispatch(increament())}> ➕ Increament</button>
      <button onClick={()=>dispatch(decreament())}>➖ decreament</button>
    </div>
  )
}

export default Display
