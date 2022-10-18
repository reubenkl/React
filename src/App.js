import Employee from "./components/Employee";

function App() {
  const allowAccess = true;
  return (
    <div>
      { allowAccess ?
      <>
        <Employee />
        <Employee />
        <Employee />
      </>
      :
      <p> You don't have access</p>
    }
    </div>
  );
}

export default App;