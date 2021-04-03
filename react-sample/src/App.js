import Loader from 'react-loader-spinner'


function App() {
    return (
        <div className="App">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />

            <Loader type="Audio" color="#00BFFF" height={80} width={80}/>
        </div>
    );
}

export default App;
