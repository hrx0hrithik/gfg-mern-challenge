import {ClockLoader} from 'react-spinners'

const LoadingComp = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen overflow-hidden'>
            <ClockLoader color="#3664d7" />
            <p className='text-[32px]'>Loading data from Server Please wait ...</p>
            <p>It can take more than 50sec for server to bootup from Inactive state </p>
        </div>
    )
}

export default LoadingComp