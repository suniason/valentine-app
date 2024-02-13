import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
const ValentineForm = () => {
  const [state, handleSubmit] = useForm('xyyrwkpg')
  if (state.succeeded) {
    return (
      <div>
        <p>Thanks you!</p>
        <p>
          Have a{' '}
          <span className="font-semibold text-red-500">
            Happy Valentine&apos;s Day!
          </span>
        </p>
      </div>
    )
  }
  return (
    <>
      <div className="font-bold ">Write to someone special</div>
      <form onSubmit={handleSubmit}>
        <label className="block my-1" htmlFor="name">
          Who&apos;s this for?
        </label>
        <input
          className="block outline outline-[#ff819a] outline-1 rounded-lg w-full px-2 py-1"
          id="name"
          type="name"
          name="name"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="block my-1" htmlFor="message">
          Message
        </label>
        <textarea
          className="block outline outline-[#ff819a] outline-1 rounded-lg w-full px-2 py-1"
          id="message"
          name="message"
          rows={5}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="block bg-[#ff819a] text-white px-5 py-1 rounded-lg mt-5"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default ValentineForm
