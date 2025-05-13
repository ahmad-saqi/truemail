
const CopyPaste = () => {
  return (
    <div className="mx-auto flex flex-col gap-4 w-full items-center justify-center mt-8">
      <textarea name="" id="" className="w-full flex h-full border-2 border-dashed rounded-3xl border-primary p-[14px] " rows={11}></textarea>
      <div className="flex w-full items-center justify-end">
      <button className="mt-5 rounded-full bg-primary px-9 py-3 text-white">
        Proceed
      </button>
     </div>
    </div>
  )
}

export default CopyPaste