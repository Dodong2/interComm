
interface Container {
    children: React.ReactNode
}

const MainContainer: React.FC<Container> = ({children}) => {
  return (
    <>
      <div className="main-container">
        { children }
      </div>
    </>
  )
}

export default MainContainer
