import Head from "next/head";

import { PersonalInfo } from "../components/FormSteps/PersonalInfo";

const App = () => {
  return (
    <div>
      <Head>
        <title>React Form Validation</title>
      </Head>
        <div>
          <PersonalInfo />
        </div>
    </div>
  );
};
export default App;
