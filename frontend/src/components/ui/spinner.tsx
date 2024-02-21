import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
	return (
		<ClipLoader
									color="#fff"
									size={15}
									aria-label='Loading Spinner'
									data-testid='loader'
									className='block my-0 mx-auto '
								/>
	)
}

export default Spinner