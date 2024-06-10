import Link from "next/link"

function Contact() {
  return (
    <div class="my-6 mx-auto max-w-xl bg-white font-[sans-serif]">
    <h1 class="text-3xl text-[#333] font-extrabold text-center">Contact</h1>
    <form class="mt-8 space-y-4">
        <input type='text' placeholder='Name'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
        <input type='email' placeholder='Email'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
        <input type='text' placeholder='Subject'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
        <textarea placeholder='Message' rows="6"
            class="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"></textarea>
        <button type='button'
            class="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
    </form>
</div>
  )
}

export default Contact