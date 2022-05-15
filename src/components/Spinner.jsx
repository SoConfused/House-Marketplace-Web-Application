// creates spinning animation upon loading (though users might not be able to see it if it loads fast)

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
    <div className="loadingSpinner"></div>
    </div>
  )
}

export default Spinner