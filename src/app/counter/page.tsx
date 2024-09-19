import { CounterProvider } from "@/app/components/organisms";
import { CounterView } from "@/app/components/views";

const Page = () => {
  return (
    <CounterProvider>
      <CounterView />
    </CounterProvider>
  );
};

export default Page;
