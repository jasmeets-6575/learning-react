import { useGlobalContext } from "./context";
import SetupForm from "./setupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  return <h1>Hello world</h1>;
}

export default App;
