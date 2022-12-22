import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchBenches } from "../../store/benches";
import BenchList from "./BenchList";


const BenchIndexPage = () => {
    const dispatch = useDispatch();
    const benches = useSelector((store) => Object.values(store.benches))

    useEffect(()=> {
        dispatch(fetchBenches())
    }, [dispatch])


    return(
        <>
            <div>Bench Index Page</div>
            <BenchList benches={benches}/>
        </>
    )
}

export default BenchIndexPage