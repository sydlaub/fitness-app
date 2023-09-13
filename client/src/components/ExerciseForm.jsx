import React from 'react'

const ExerciseForm = ({ onChange, onSubmit, form }) => (
    <div className="container">
        <form
            onSubmit={onSubmit}
        >
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    name="title"
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="description"
                    onChange={onChange}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary float-right"
            >
                Submit
            </button>
        </form>
    </div>
)

export default ExerciseForm