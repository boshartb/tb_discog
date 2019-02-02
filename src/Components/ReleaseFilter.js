import React from 'react'

const RecordingFilter = props =>
    <div>
        <label htmlFor="recording-filter">Release Info: </label>
        <input type="text" value={props.value} onChange={props.onChange} name="recording-filter" />
    </div>

export default RecordingFilter;