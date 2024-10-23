
export default function Loading() {
  return (
    <div className='container mt-1 loding'>
    <div className={`d-flex justify-content-center align-items-center breadcrumb `}>
    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
    <span className="sr-only">Loading...</span>
  </div><div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
    <span className="sr-only">Loading...</span>
  </div><div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
    <span className="sr-only">Loading...</span>
  </div>
    </div>
 
</div>
  )
}
