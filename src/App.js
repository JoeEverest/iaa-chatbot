import ChatBot from "react-simple-chatbot";
import Faq from "./Faq";

function App() {
  return (
    <ChatBot
      steps={Faq}
      botAvatar={"https://iaa.ac.tz/wp-content/uploads/2019/12/New-Logo-150x150.jpg"}
      customStyle={{ backgroundColor: "red" }}
    />
  );
}

export default App;
