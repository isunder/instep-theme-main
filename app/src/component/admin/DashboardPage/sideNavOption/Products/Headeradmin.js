import React from 'react'
import { Form, Field } from 'react-final-form'
import { adminPostheading } from '../../../../../Redux/action/adminheader'
import { useDispatch } from 'react-redux'

function Headeradmin() {
    const dispatch = useDispatch()

    const onSubmit = (values) => {


        console.log(values)


        dispatch(adminPostheading(values))


    }


    const handleImgeFile = () => {


    }
    return (
        <div>

            <Form
                onSubmit={onSubmit}
                // validate={required}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="heading" >
                            {({ input, meta }) => (
                                <div>
                                    <label>heading </label>
                                    <input {...input} type="text" placeholder="heading " />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="heading1" >
                            {({ input, meta }) => (
                                <div>
                                    <label> other heading </label>
                                    <input {...input} type="text" placeholder="heading " />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="Email" >
                            {({ input, meta }) => (
                                <div>
                                    <label>Email </label>
                                    <input {...input} type="text" placeholder="Email " />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div>

                            <input
                                name="images"
                                type="file"
                                className="form-control signup_form_input margin_bottom"
                                onChange={handleImgeFile}
                            />
                        </div>

                        <Field name="sitename" >
                            {({ input, meta }) => (
                                <div>
                                    <label>sitename </label>
                                    <input {...input} type="text" placeholder="sitename " />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <div className="buttons">
                            <button type="submit">
                                Submit
                            </button>

                        </div>

                    </form>
                )}
            />

        </div>
    )
}

export default Headeradmin