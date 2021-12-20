import Head from "next/head";
import { useFormData } from "../context";
import {
  PersonalInfo,
  ConfirmPurchase,
} from "../components/FormSteps";


const App = () => {
  const { formStep } = useFormData();
  return (
    <div>
      <Head>
        <title>React Form Validation</title>
      </Head>

        <div>
        {
            {

              0: <PersonalInfo />,
              1: <ConfirmPurchase />,
            }[formStep]
          }
        </div>
    </div>
    
  );
};

export default App;
