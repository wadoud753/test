import React from 'react';

import Travel_tumbnail from './Travel_tumbnail';

function List({travels}) {

    return (
        <div>
            {
                travels.map(travel=><Travel_tumbnail key={travel.travel_id} travel={travel} />)
            }
        </div>

    );
}

export default List;