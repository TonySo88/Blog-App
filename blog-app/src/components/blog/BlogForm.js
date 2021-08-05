import React, { useState } from 'react'
import * as yup from 'yup'

import "./blog.css"

const formSchema = yup.object().shape({
    title: yup.string().required("Don't forget to set your title!"),
    date: yup.string().required("Date is required!"),
    body: yup.string().required("Let your readers hear what you have to say!")
})

const BlogForm = (props) => {
    const [entry, setEntry] = useState({
        id: Date.now(),
        title: "",
        date:"",
        body: ''
    })

    const [errors, setErrors] = useState({
        title: "",
        date:"",
        body: ''
    })

    const validate = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        // ** In our schema, validate ^ this filed against ^ this data **
            .then(valid => {

            })
            .catch(err => {
                console.log(err.errors)
            })
    }

    const changeHandler = e => {

        validate(e)
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addEntry(entry)
        setEntry({ id: Date.now(), title: "", date: "", body: ""})
    }
    return (
        <div className="entry-fields">
            <form
                onSubmit={handleSubmit}
            >
                <div className="entry entry1">
                    <label htmlFor="title">
                        Title: 
                    </label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title this entry"
                        value={entry.title}
                        onChange={changeHandler}
                    />
                </div>
                <div className="entry">
                    <label htmlFor="date">
                        Date: 
                    </label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        placeholder="Date"
                        value={entry.date}
                        onChange={changeHandler}
                    />
                </div>
                {/* ADD IMAGE INPUT?? */}
                <div className="entry">
                    <label>
                        Blog away:
                    </label>
                    <textarea
                        type="text"
                        id="body"
                        name="body"
                        placeholder="A long time ago, in a galaxy far, far away..."
                        value={entry.body}
                        onChange={changeHandler}
                    />
                </div>
                <div className="entry">
                    <button onClick={handleSubmit} type="submit">Click to submit</button>
                </div>
            </form>
        </div>
    )
}

export default BlogForm;