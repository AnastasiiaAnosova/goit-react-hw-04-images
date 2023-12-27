import { Circles } from 'react-loader-spinner';
import { LoaderStyles } from './Loader.styled';


const Loader = () => {
    return (
        <LoaderStyles>
            < Circles
                height="80"
                width="80"
                color="#4d6fa9"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </LoaderStyles>
    )
}

export default Loader;