import { useState } from 'react';
import { Place } from './api/Place';
import LocationsSearch from './components/LocationsSearch';
import Map from './components/Map';

function App() {
    const [place, setPlace] = useState<Place | null>(null);

    return (
        <>
            <div className="h-screen w-screen grid grid-cols-12">
                <div className="col-span-3 p-2">
                    <LocationsSearch />
                </div>
                <div className="col-span-9">
                    <Map place={place} />
                </div>
            </div>
        </>
    );
}

export default App;
