import './PageNotFound.css';

function PageNotFound() {
    return (
        <main>
            <h2 className='oops'>Opps!</h2>
            <p className='not-found-msg'>Looks like you are on a page that does not exist.</p>
        </main>
    )
}

export default PageNotFound;